import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  GoogleAuthProvider,
  signInWithPopup, 
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
//import { collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { app } from '../config/configFireBase.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { feed } from '../pages/feed.js';
const auth = getAuth(app);

// OBSERVADOR - PERMITE IDENTIFICAR SI EXISTE UNA CUENTA ABIERTA

auth.onAuthStateChanged((user) => {
  if (user){


  } else {
    console.log('no existe usuario');
  }
});


const root = document.getElementById('root');

const createEmail = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password, name)
    .then((result) => {
      let user = result.user.displayName;
      user = name;
      console.log(`Tienes un usuario registrado, su nombre es ${user}`);
      onNavigate('/feed');
      window.location.pathname = '/feed';
    })
    .catch((error) => {
      let errorMessage = error.message;
      alert(errorMessage);
      console.log(errorMessage);
      onNavigate('/register');
      //window.location.pathname = '/register';
    });
};

const validateUserAndPass = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      let user = result.user;
      console.log(email, password);
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
      let user = result.user;
      console.log(user.displayName);
      root.innerHTML = feed;
      onNavigate('/feed');
      console.log(user);
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

    });
    
    let user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
      console.log(uid);
}


};

export { createEmail, validateUserAndPass, loginWithGoogle };
