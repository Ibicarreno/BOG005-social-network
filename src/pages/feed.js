import { auth, signOff } from '../auth/authentication.js';
import { saveRecipe, onGetRecipes } from '../firestore/methodsFirestore.js';

export const feed = () => {
  const feedContainer = document.createElement('div');
  const feedTemplate = `
  <button id="btnLogOut">Cerrar sesión</button>
    <div class='feed' id="feed">
        <section id="feedMainProfile">
            <section id="infoUser">
                <img src='../resources/user-feed.png' alt="icon" id="icon">
                <p id="nameUser">Nombre de usuari@</p>
            </section>
                <section id="publishPost">
                    <h1 for="publish">Publica tu receta</h1>
                        <form id="publishRecipe">
                        <input type="text" placeholder="Nombre de la receta" id="recipeName">
                        <textarea name="recipe-description" rows="3" placeholder="Descripción de la receta"></textarea>
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
        `;
  feedContainer.innerHTML = feedTemplate;
  const feedMainPost = feedContainer.querySelector('#postUsers');
  feedContainer.querySelector('#btnLogOut').addEventListener('click', signOff);
  window.addEventListener('DOMContentLoaded', () => {
    onGetRecipes((querySnapshot) => {
      feedContainer.querySelector('#nameUser').textContent = auth.currentUser.displayName;
      console.log(auth.currentUser.displayName);
      let html = '';
      querySnapshot.forEach((doc) => {
        const post = doc.data();
        html += `
          <div class= "feedView">
              <h3>${post.title}</h3>
              <h3>${post.description}</h3>
              </div>
          `;
      });
      feedMainPost.innerHTML = html;
    });
  });

  const publishRecipe = feedContainer.querySelector('#publishRecipe');

  publishRecipe.addEventListener('submit', (e) => {
    e.preventDefault();
    // eslint-disable-next-line dot-notation
    const nameRecipe = publishRecipe['recipeName'].value;
    const descriptionRecipe = publishRecipe['recipe-description'].value;
    saveRecipe(nameRecipe, descriptionRecipe);
    publishRecipe.reset();
  });

  return feedContainer;
};
