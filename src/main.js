import { Profile } from "../src/pages/profile"; //ibeht
import { feed } from "../src/pages/feed.js";
import { Login } from "../src/pages/login.js";
import { Register } from "../src/pages/register.js";
import { createEmail, validateUserAndPass, loginWithGoogle } from "./auth/authentication.js"; //ibeht

const routes = {
  '/': Login,
  '/register': Register,
  '/feed': feed,
  '/profile': Profile,
};

/* PERMITE QUE LAS RUTAS MANIPULEN EN DOM CON LOS LITERAL TEMPLATES GUARDADOS EN PAGES */

// const root = document.getElementById('root');
// root.innerHTML = routes[window.location.pathname];


/* GENERAR RUTAS EN URLS*/

export const onNavigate = (pathname, paramRoutes = routes) => {
  window.history.pushState({}, pathname, window.location.origin + pathname)
  const root = document.getElementById('root');
  root.innerHTML = paramRoutes[pathname];
};

window.addEventListener('load', () => {
  onNavigate(window.location.pathname);
});

/*ACCEDER A LA PÁGINA REGISTRATE*/
/*Botón regístrate*/
let activeRegister = document.getElementById("linkRegister");
if (activeRegister) {
  activeRegister.addEventListener("click", () => {
    onNavigate('/register')
  });
}

const inputEmail = document.getElementById("registerEmailUser");
const inputPass = document.getElementById("registerPassWordUser");
const inputName = document.getElementById("registerNameUser");
let bottonRegister = document.getElementById("bottonRegister");


//BOTÓN PARA VALIDAR EL REGISTRO //

if (bottonRegister) {
  bottonRegister.addEventListener("click", () => {
    createEmail(inputEmail.value, inputPass.value); /* Comando de Firebase para Autenticación */
  });
}

// REGISTRARSE CON GOOGLE //

let googleButton = document.getElementById("bottonGoogle");
if (googleButton) {
  googleButton.addEventListener("click", () => {
    loginWithGoogle();
  })
}


// INICIAR SESION E INGRESAR EN EL FEED

const inputEmailLogIn = document.getElementById("emailUser");
const inputPassLogIn = document.getElementById("passWordUser");

let activeLogin = document.getElementById("logginButton");
if(activeLogin){
activeLogin.addEventListener("click", () => {
  validateUserAndPass(inputEmailLogIn.value, inputPassLogIn.value);
})}


// IR DEL FEED AL PERFIL

let profile = document.getElementById("profileButton")
if(profile){
  profile.addEventListener("click", () => {
      history.pushState(null, "profile", "/profile");
      root.innerHTML = Profile;
    })}
