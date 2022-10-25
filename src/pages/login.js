import { validateUserAndPass } from '../auth/authentication.js';

export const login = () => {
  const loginContainer = document.createElement('div');
  const loginTemplate = `
  <div id="backgroundVideo">   
    <video src="./resources/pexels-vanessa-loring-5858145.mp4" autoplay loop muted></video>
  </div>
    <section id="sectionLogIn" class="sectionLogIn">
      <p id="LogInP">INICIAR SESIÓN</p>
      <input  type="text" id="emailUser" placeholder="Correo electrónico">
      <input type="password" id="passWordUser" placeholder="Contraseña">
      <button id="logginButton">ENTRAR</button>
      <hr class="lineRight">
      <p id="letter">o</p>
     <hr class="lineLeft">
  </section>
  <div id="sigInMobile">
    <p>¿No tienes una cuenta?</p>
    <button id="linkRegister">¡Regístrate!</button>
  </div>
`;
  loginContainer.innerHTML = loginTemplate;

  loginContainer.querySelector('#logginButton').addEventListener('click', () => {
    validateUserAndPass(document.querySelector('#emailUser').value, document.querySelector('#passWordUser').value);
  });
  loginContainer.querySelector('#linkRegister').addEventListener('click', () => {
    window.location.pathname = '/register';
  });

  return loginContainer;
};
