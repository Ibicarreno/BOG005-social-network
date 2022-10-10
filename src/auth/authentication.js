import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from '../config/configFireBase.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

const auth = getAuth(app);

// const use = auth.currentUser;

// if (use) {
//   console.log('activo ', use);
// } else {
//   console.log('no está activo ', use);
// }

// OBSERVADOR - IDENTIFICA SI EL USUARIO ESTÁ CONECTADO O NO
onAuthStateChanged(auth, (user) => {
  if (!user) {
    onNavigate('/');
    console.log('está desconectado');
  } else {
    onNavigate('/feed');
    console.log('está conectado');
  }
});

// CREAR EMAIL CON CORREO Y CONTRASEÑA
const createEmail = (email, password, nameUser) => {
  createUserWithEmailAndPassword(auth, email, password, nameUser)
    .then((result) => {
      updateProfile(auth.currentUser, { // ACTUALIZA DATA
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

const signOff = () => {
  signOut(auth).then((result) => {
    window.location.pathname = '/';
    console.log('cerró sesión con éxito', result);
    // Sign-out successful.
  }).catch((error) => {
    alert(error.message);
  });
};

const validateUserAndPass = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user.displayName;
      console.log(user);
      // root.innerHTML = feed;
      window.location.pathname = '/feed';
      // document.querySelector('#nameUser').textContent = user;
      // onNavigate('/feed');
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
      console.log('error en el registro');
      // window.location.pathname = '/';
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
      // root.innerHTML = feed;
      // onNavigate('/feed');
    }).catch((error) => {
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorMessage);
      onNavigate('/register');
      console.log(email, credential);
    });
};

export {
  createEmail, validateUserAndPass, loginWithGoogle, signOff, auth,
};
