import { saveRecipe, getRecipe, onGetRecipes } from '../firestore/methodsFirestore.js';

export const feed = () => {
  const feedContainer = document.createElement('div');
  const feedTemplate = `
  <div id="mainFeed">
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
  const querySnapshot = getRecipe();
  // onGetRecipes()
  window.addEventListener('DOMContentLoaded', () => {
    let html = '';
    onGetRecipes(querySnapshot.then((resul) => {
      resul.forEach((doc) => {
        const post = doc.data();
        html += `
          <div class= "postView">
          <div id="imageRecipe">
          <img src='../resources/saladDish.jpg' alt="icon" id="icon">
          </div>
          <div id="dataForRecipe">
              <h3 id="postTitle">${post.title}</h3>
              <h3 id="descriptionPost">${post.description}</h3>
              <div id="iconsPosts">
               <div id="likeCounter">
                <img src='../resources/corazon.png' alt="icon" class="postIcon">
                <p id="counter">5</p>
               </div>
               <div id="iconsInteractive">
                <img src='../resources/me-gusta.png' alt="icon" class="postIcon">
                <img src='../resources/editar.png' alt="icon" class="postIcon">
                <img src='../resources/basura.png' alt="icon" class="postIcon">
               </div>
              </div>
          </div>
          </div>
          `;
      });
      feedMainPost.innerHTML = html;
    }));
  });

  const publishRecipe = feedContainer.querySelector('#publishRecipe');
  // const recipeName = feedContainer.querySelector('#recipeName');

  publishRecipe.addEventListener('submit', (e) => {
    e.preventDefault();

    // eslint-disable-next-line dot-notation
    const nameRecipe = publishRecipe['recipeName'];
    const descriptionRecipe = publishRecipe['recipe-description'];
    // console.log('submitted', nameRecipe, descriptionRecipe);
    saveRecipe(nameRecipe.value, descriptionRecipe.value);
    publishRecipe.reset();
  });

  return feedContainer;
};
