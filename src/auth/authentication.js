import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from '../config/configFireBase.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

const auth = getAuth(app);

// OBSERVADOR - PERMITE IDENTIFICAR SI EXISTE UNA CUENTA ABIERTA
onAuthStateChanged(auth, (user) => {
  if (!user) {
    onNavigate('/');
    console.log('está desconectado');
  } else {
    onNavigate('/feed');
    console.log('está conectado ');
  }
});
// console.log(uid);

const logOutUser = () => {
  // eslint-disable-next-line no-restricted-globals
  if (confirm('¿Estás seguro de cerrar sesión?')) {
    signOut(auth)
      .then(() => {
        console.log('cerro sesion');
        window.location.pathname = '/';
      })
      .catch(() => {});
  } else {
    onNavigate('/feed');
    console.log('cerrar sesión onNavigate ');
  }
};

const createEmail = (email, password, nameUser) => {
  createUserWithEmailAndPassword(auth, email, password, nameUser)
    .then((result) => {
      updateProfile(auth.currentUser, {
        displayName: nameUser,
      });
      let user = result.user.displayName;
      user = nameUser;
      window.location.pathname = '/feed';
      console.log(user);
    })
    .catch((error) => {
      alert(error.message);
      onNavigate('/register');
    });
};

const validateUserAndPass = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      window.location.pathname = '/feed';
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
      window.location.pathname = '/feed';
    }).catch((error) => {
    // Handle Errors here.
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorMessage);
      onNavigate('/register');
      console.log(email, credential);
    });
};

export {
  createEmail, validateUserAndPass, loginWithGoogle, logOutUser, auth,
};
