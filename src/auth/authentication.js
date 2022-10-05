import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, // ibeht
  GoogleAuthProvider,
  signInWithPopup, // nata
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { app } from '../config/configFireBase.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// import { Login } from '../pages/login.js';
import { feed } from '../pages/feed.js';
// ibeht
const auth = getAuth(app);


 // OBSERVADOR - PERMITE IDENTIFICAR SI EXISTE UNA CUENTA ABIERTA

 auth.onAuthStateChanged((user) => {
  if(user){
    const uid = user.uid;
    console.log(user)
  } else {
    console.log("no existe usuario")
  }
});

const root = document.getElementById('root');

const createEmail = (email, password, displayName) => {
  createUserWithEmailAndPassword(auth, email, password, displayName)
    .then((result) => {
      const user = result.user;
      // root.innerHTML = feed
      onNavigate('/feed');      
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      onNavigate('/');
    });
};

const validateUserAndPass = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      console.log(email, password);
      root.innerHTML = feed;
      onNavigate('/feed');
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
      console.log('error en el registro');
      onNavigate('/');
    });
};

const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  provider.addScope('profile');
  provider.addScope('email');

  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      console.log(user.displayName);
      root.innerHTML = feed;
      onNavigate('/feed');
      //const nameUserGoogle = document.getElementById("#nameUser")
      //nameUserGoogle.innerHTML = user.displayName;
    }).catch((error) => {
    // Handle Errors here.
      // const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorMessage);
      console.log(email, credential);
    // ...
    });   
};

const saveName = (inputName) => {
  
}


export { createEmail, validateUserAndPass, loginWithGoogle };
