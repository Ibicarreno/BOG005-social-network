export const Profile = () => {
  const profileContainer = document.createElement('div');
  const profileTemplate = `
    <div class= "feedView">
    <h2>Pagina en construccion</h2>
    <button id="bottonProfile">Ir al perfil</button>
    </div>
    `;
  profileContainer.innerHTML = profileTemplate;

  return profileContainer;
};
