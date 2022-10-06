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
                    <section id="postUsers">
                    </section>
            </div>
        </section>
    </div>
    `;
  feedContainer.innerHTML = feedTemplate;

  //   window.addEventListener('DOMContentLoaded', () => {
  //   });

  const publishRecipe = feedContainer.querySelector('#publishRecipe');
  // const recipeName = feedContainer.querySelector('#recipeName');

  publishRecipe.addEventListener('submit', (e) => {
    e.preventDefault();

    // eslint-disable-next-line dot-notation
    const nameRecipe = publishRecipe['recipeName'].value;
    const descriptionRecipe = publishRecipe['recipe-description'].value;
    console.log('submitted', nameRecipe, descriptionRecipe);
  });

  return feedContainer;
};
