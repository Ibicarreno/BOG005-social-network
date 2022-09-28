import { Profile } from "../pages/profile.js"; //ibeht
import { feed } from "../pages/feed.js";
import { Login } from "../pages/login.js";
import { Register } from "../pages/register.js";
import { createEmail, validateUserAndPass } from "./auth/authentication.js"; //ibeht

const routes = {
  '/': Login,
  '/register': Register,
  '/feed': feed,
  '/profile': Profile,
};

/* PERMITE QUE LAS RUTAS MANIPULEN EN DOM CON LOS LITERAL TEMPLATES GUARDADOS EN PAGES */
const root = document.getElementById('root');
root.innerHTML = routes[window.location.pathname];


/* GENERAR RUTAS EN URLS*/

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    '',
    window.location.origin + pathname,
  );
};

//let activeLogin = document.getElementById("logginButton");

/*ACCEDER A LA PÁGINA REGISTRATE*/

/*Botón regístrate*/
let activeRegister = document.getElementById("linkRegister");
if (activeRegister) {
  activeRegister.addEventListener("click", () => {
    history.pushState(null, "register", "/register");
    root.innerHTML = Register;
  });
}

const inputEmail = document.getElementById("registerEmailUser");
const inputPass = document.getElementById("registerPassWordUser");
let bottonRegister = document.getElementById("bottonRegister");

//BOTÓN PARA VALIDAR EL REGISTRO //

if (bottonRegister) {
  bottonRegister.addEventListener("click", () => {
    createEmail(inputEmail.value, inputPass.value); /* Comando de Firebase para Autenticación */
  });
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
