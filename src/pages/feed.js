import { auth, logOutUser } from '../auth/authentication.js';
import {
  saveRecipe, onGetRecipes, deletePost, getPost, updatePost, getRecipe, likeMe, dislikeMe,
} from '../firestore/methodsFirestore.js';

export const feed = () => {
  const feedContainer = document.createElement('div');
  const feedTemplate = `
  <div id="mainFeed">
  <button id="btnLogOut">Cerrar sesión</button>
    <div class='feed' id="feed">
        <section id="feedMainProfile">
            <section id="infoUser">
                <img src='../resources/user-feed.png' alt="icon" id="icon">
                <p id="nameUser">Nombre de usuari@</p>
            </section>
                <section id="publishPost">
                    <h1 for="publish" id="publishTitle">Publica tu receta</h1>
                        <form id="publishRecipe">
                        <input type="text" placeholder="Nombre de la receta" id="recipeName">
                        <textarea name="recipe-description" rows="3" placeholder="Descripcion de la receta"></textarea>
                        <button id="btnPublishRecipe">Publicar</button>
                        </form>
                </section>
        </section>
        <section id="feedMainPost">
            <div class= "feedView">
                <h1 id="titlePostMain">Publicaciones de tus amigos</h1>
                    <div id="postUsers">
                    </div>
            </div>
        </section>
    </div>
  </div>
  `;
  feedContainer.innerHTML = feedTemplate;
  const feedMainPost = feedContainer.querySelector('#postUsers');
  const logOutPage = feedContainer.querySelector('#btnLogOut');
  const publishRecipe = feedContainer.querySelector('#publishRecipe');
  let editStatus = false;
  const btnPublish = feedContainer.querySelector('#btnPublishRecipe');
  let id = '';

  window.addEventListener('DOMContentLoaded', () => {
    onGetRecipes((querySnapshot) => {
      feedContainer.querySelector('#nameUser').textContent = auth.currentUser.displayName;
      let html = '';
      querySnapshot.forEach((doc) => {
        const post = doc.data();
        // console.log('id ', post);
        html += `
          <div class= "postView">
          <div id="imageRecipe">
          <img src='../resources/saladDish.jpg' alt="icon" id="icon">
          </div>
          <div id="dataForRecipe">
              <h3 id="postTitle">${post.title}</h3>
              <p id="authorPost">${post.name}</p>
              <h3 id="descriptionPost">${post.description}</h3>
              <div id="iconsPosts">
               <div id="likeCounter">
                <img src='../resources/corazon.png' alt="icon" class="postIcon">
                <p id="counter">${post.like.length}</p>
               </div>
               <div id="iconsInteractive">
               <button id="iconLike" class="btnsLike" data-id='${doc.id}'>
                Like
                </button>
                <button id="iconEdit" class="btnsEdit" data-id='${doc.id}'>
                Editar
                </button> 
                <button id="iconDelete"  class="btnsDelete" data-id='${doc.id}'>
                Borrar
                </button>
               </div>
              </div>
          </div>
          </div>
          `;
      });
      // <img src='../resources/basura.png' alt="icon" class="postIcon"></img>
      feedMainPost.innerHTML = html;
      const btnsDelete = feedMainPost.querySelectorAll('.btnsDelete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', (event) => {
          // eslint-disable-next-line no-restricted-globals
          if (confirm('¿Estás seguro de eliminar la publicación?')) {
            deletePost(event.target.dataset.id);
          }
        });
      });

      const btnsEdit = feedMainPost.querySelectorAll('.btnsEdit');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (event) => {
          const post = await getPost(event.target.dataset.id);
          const postData = post.data();
          // eslint-disable-next-line dot-notation
          publishRecipe['recipeName'].value = postData.title;
          publishRecipe['recipe-description'].value = postData.description;

          editStatus = true;
          id = post.id;

          btnPublish.innerText = 'Actualizar';
        });
      });

      const btnsLike = feedMainPost.querySelectorAll('.btnsLike');
      btnsLike.forEach((btn) => {
        const changeLike = () => btn.classList.toggle('background-red');
        btn.addEventListener('click', changeLike);
        btn.addEventListener('click', (e) => {
          getRecipe().then((result) => result.docs.forEach(
            (idPost) => {
              if (e.target.dataset.id === idPost.id) {
                if (!idPost.data().like.includes(auth.currentUser.uid)) {
                  console.log('idPost.id ', idPost.id);
                  likeMe(idPost.id, auth.currentUser.uid);
                  // console.log(likeMe());
                  // console.log('se dio like ', idPost.data().like);
                } else {
                  dislikeMe(idPost.id, auth.currentUser.uid);
                  console.log('se quitó el like ', idPost.data().like);
                }
              }
            },
          ));
        });
      });
    });
  });

  publishRecipe.addEventListener('submit', (e) => {
    e.preventDefault();
    // eslint-disable-next-line dot-notation
    const nameRecipe = publishRecipe['recipeName'];
    const descriptionRecipe = publishRecipe['recipe-description'];
    const date = new Date();
    const author = auth.currentUser.displayName;
    console.log(author);
    if (!editStatus) {
      saveRecipe(date, nameRecipe.value, descriptionRecipe.value, author);
      console.log(date);
    } else {
      updatePost(id, {
        title: nameRecipe.value,
        description: descriptionRecipe.value,
      });
      editStatus = false;
      btnPublish.innerText = 'Publicar';
    }

    publishRecipe.reset();
  });

  logOutPage.addEventListener('click', () => {
    logOutUser();
  });
  return feedContainer;
};
