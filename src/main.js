// const routes = {
//   '/': Login,
//   '/register': Register,
//   '/feed': feed,
//   '/profile': Profile,
import { routes } from './routes/routes.js';
// import { Profile } from "../pages/profile.js"; //ibeht
// import { feed } from "../pages/feed.js";
// import { Login } from "../pages/login.js";
// import { Register } from "../pages/register.js";

// eslint-disable-next-line import/no-cycle
import { createEmail, validateUserAndPass, loginWithGoogle } from './auth/authentication.js';

/* PERMITE QUE LAS RUTAS MANIPULEN EN DOM CON LOS LITERAL TEMPLATES GUARDADOS EN PAGES */

const root = document.getElementById('root');
root.innerHTML = routes[window.location.pathname];

/* GENERAR RUTAS EN URLS */

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.innerHTML = routes[pathname];
};

/* PERMITE CAMBIAR LA RUTA DESDE LAS FLECHAS DE NAVEGACIÓN */
window.onpopstate = () => {
  root.innerHTML = routes[window.location.pathname];
};


/* ACCEDER A LA PÁGINA REGISTRATE */
/* Botón regístrate */
const activeRegister = document.getElementById('linkRegister');
if (activeRegister) {
  activeRegister.addEventListener('click', () => {
    onNavigate('/register');
  });
}

const inputEmail = document.getElementById('registerEmailUser');
const inputPass = document.getElementById('registerPassWordUser');
const bottonRegister = document.getElementById('bottonRegister');

// BOTÓN PARA VALIDAR EL REGISTRO //

if (bottonRegister) {
  bottonRegister.addEventListener('click', () => {
    createEmail(inputEmail.value, inputPass.value, inputName.value); /* Comando de Firebase para Autenticación */
    console.log(inputName.value);
  });
}

// REGISTRARSE CON GOOGLE //

const googleButton = document.getElementById('bottonGoogle');
if (googleButton) {
  googleButton.addEventListener('click', () => {
    loginWithGoogle();
    //const nameUserGoogle = document.getElementById("#nameUser")
    //if(nameUserGoogle){nameUserGoogle.innerHTML = user.displayName;}
  });
}

const inputName = document.getElementById('registerNameUser');

// INICIAR SESION E INGRESAR EN EL FEED

const inputEmailLogIn = document.getElementById('emailUser');
const inputPassLogIn = document.getElementById('passWordUser');

const activeLogin = document.getElementById('logginButton');
if (activeLogin) {
  activeLogin.addEventListener('click', () => {
    validateUserAndPass(inputEmailLogIn.value, inputPassLogIn.value);
  });
}

// PINTAR NOMBRE EN FEED
const viewName = document.getElementById("nameUser");
if (viewName){
  viewName.innerHTML = inputName.value;
}






// IR DEL FEED AL PERFIL

const profile = document.getElementById('profileButton');
if (profile) {
  profile.addEventListener('click', () => {
    onNavigate('/profile');
    // history.pushState(null, "profile", "/profile");
    // root.innerHTML = Profile;
  });
}

const logout = document.getElementById("#signOut");
if(logout){
    logout.addEventListener("click", () => {
        console.log("lo lograste Nata")
    })
}