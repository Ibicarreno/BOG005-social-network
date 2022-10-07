import { saveRecipe, getRecipe, onGetRecipes } from '../firestore/methodsFirestore.js';

export const feed = () => {
  const feedContainer = document.createElement('div');
  const feedTemplate = `
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
          <div class= "feedView">
              <h3>${post.title}</h3>
              <h3>${post.description}</h3>
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
