import { routes } from './routes/routes.js';

// eslint-disable-next-line import/no-cycle
// import { createEmail, validateUserAndPass, loginWithGoogle } from './auth/authentication.js';

/* PERMITE QUE LAS RUTAS MANIPULEN EN DOM CON LOS LITERAL TEMPLATES GUARDADOS EN PAGES */

/* GENERAR RUTAS EN URLS */

export const onNavigate = (pathname, paramRoutes = routes) => {
  const root = document.getElementById('root');
  root.replaceChildren(paramRoutes[pathname]);
};

window.addEventListener('load', () => {
  onNavigate(window.location.pathname);
});

/* ACCEDER A LA PÁGINA REGISTRATE */
/* Botón regístrate */
// const activeRegister = document.getElementById('linkRegister');
// if (activeRegister) {
//   activeRegister.addEventListener('click', () => {
//     onNavigate('/register');
//   });
// }

// const inputEmail = document.getElementById('registerEmailUser');
// const inputPass = document.getElementById('registerPassWordUser');
// // const inputName = document.getElementById('registerNameUser');
// const bottonRegister = document.getElementById('bottonRegister');

// // BOTÓN PARA VALIDAR EL REGISTRO //

// if (bottonRegister) {
//   bottonRegister.addEventListener('click', () => {
//     createEmail(inputEmail.value, inputPass.value); /* Comando de Firebase para Autenticación */
//   });
// }

// // REGISTRARSE CON GOOGLE //

// const googleButton = document.getElementById('bottonGoogle');
// if (googleButton) {
//   googleButton.addEventListener('click', () => {
//     loginWithGoogle();
//   });
// }

// // INICIAR SESION E INGRESAR EN EL FEED

// const inputEmailLogIn = document.getElementById('emailUser');
// const inputPassLogIn = document.getElementById('passWordUser');

// const activeLogin = document.getElementById('logginButton');
// if (activeLogin) {
//   activeLogin.addEventListener('click', () => {
//     validateUserAndPass(inputEmailLogIn.value, inputPassLogIn.value);
//   });
// }

// // IR DEL FEED AL PERFIL

// const profile = document.getElementById('profileButton');
// if (profile) {
//   profile.addEventListener('click', () => {
//     onNavigate('/profile');
//     // history.pushState(null, "profile", "/profile");
//     // root.innerHTML = Profile;
//   });
// }
