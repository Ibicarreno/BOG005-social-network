export const feed = () => {
    const containerFeed = document.createElement('div');
    const templateFeed = `
    <p id="nameUser" value="" style="color:black">Nombre de usuario</p>
    <form id="feedForm">
    <label for="title">Título</label>
    <input type="text" placeholder="Titulo" id="postTitle">
  
    <label for="description">Descripción</label>
    <textarea id="postDescription" rows="3" placeholder="escribe tu receta"> </textarea>
    
    <button id="btn-post-public">Publicar</button>
    </form>
  
    <div id= "postContainer"></div>
  
          `;
    containerFeed.innerHTML = templateFeed;
    containerFeed.querySelector('#feedForm').addEventListener('submit', (e) => {
      e.preventDefault();
  
      const title = containerFeed.querySelector('#postTitle').value;
      const postDescription = containerFeed.querySelector('#postDescription').value;
      console.log(title, postDescription);
    });
    // });
    // const feedForm = document.getElementById('feedForm');
    // if (feedForm) {
    //   feedForm.addEventListener('submit', (e) => {
    //     e.preventDefault();
  
    //     const title = feedForm.postTitle.value;
  
    //     const postDescription = feedForm.postDescription.value;
    //     console.log(title, postDescription);
    //   });
    // }
  
    return containerFeed;
  };