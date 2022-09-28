import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword //ibeht
  } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
  // import { Register } from "../components/registers.js";
  import { app } from "../config/configFireBase.js";
  import { onNavigate } from "../main.js";
  import { Login } from "../pages/login.js";
  import { feed } from "../pages/feed.js"; //ibeht
  const auth = getAuth(app);
//   console.log(auth.languageCode = "es");
//   console.log(auth);

  const root = document.getElementById('root');
  
  const createEmail = (email, password, nameUser) => {
      createUserWithEmailAndPassword(auth, email, password, nameUser)
      .then((result) => {
        const user = result.user;
        console.log(user);
        root.innerHTML = feed
        onNavigate('/feed');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        onNavigate("/register");
      });
  };

  const validateUserAndPass = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      root.innerHTML = feed
      onNavigate("/feed");
  })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
      console.log('error en el registro')
      onNavigate("/login");
    });
  }

  
export { createEmail, validateUserAndPass };