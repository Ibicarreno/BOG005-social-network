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
} from './authControllers.js';
import { app } from '../config/configFireBase.js';
import { onNavigate } from '../main.js';

const auth = getAuth(app);

// OBSERVADOR - PERMITE IDENTIFICAR SI EXISTE UNA CUENTA ABIERTA
onAuthStateChanged(auth, (user) => {
  if (!user) {
    onNavigate('/');
    window.location.hash = '';
    if (window.location.hash === '') {
      // eslint-disable-next-line no-restricted-globals
      history.replaceState({}, '', '/');
    }
    console.log('está desconectado');
  } else {
    onNavigate('/feed');
    console.log('está conectado ');
  }
});

// const logOutUser = () => {
//   // eslint-disable-next-line no-restricted-globals
//   if (confirm('¿Estás seguro de cerrar sesión?')) {
//     signOut(auth)
//       .then(() => {
//         console.log('cerró sesión');
//         window.location.pathname = '/';
//       })
//       .catch(() => {});
//   } else {
//     onNavigate('/feed');
//   }
// };
const logOutUser = () => signOut(auth);

const createEmail = (email, password, nameUser) => {
  createUserWithEmailAndPassword(auth, email, password, nameUser)
    .then(() => {
      updateProfile(auth.currentUser, {
        displayName: nameUser,
      }).then(() => {
        let user = auth.currentUser.displayName;
        user = nameUser;
        window.location.pathname = '/feed';
        console.log(user);
      }).catch((error) => error.message);
      // console.log('createEmail ', result);
      // updateProfile(auth.currentUser, {
      //   displayName: nameUser,
      // }).then(result => console.log('valor recibido ', nameUser));
      // let user = result.user.displayName;
      // user = nameUser;
      // window.location.pathname = '/feed';
      // // onNavigate('/feed');
      // console.log(user, 'displayaname ', auth.currentUser.displayName);
    })
    .catch((error) => {
      alert(error.message);
      onNavigate('/register');
    });
};

// const validateUserAndPass = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((result) => {
//       const user = result.user;
//       window.location.pathname = '/feed';
//       console.log('user validate ', user);
//     })
//     .catch((error) => {
//       const errorMessage = error.message;
//       alert(errorMessage);
//       console.log('error en el registro');
//       onNavigate('/');
//     });
// };
const validateUserAndPass = (email, password) => signInWithEmailAndPassword(auth, email, password);
const provider = new GoogleAuthProvider();
const loginWithGoogle = () => signInWithPopup(auth, provider);
// const loginWithGoogle = () => {
//   const provider = new GoogleAuthProvider();
//   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//   provider.addScope('profile');
//   provider.addScope('email');

//   signInWithPopup(auth, provider)
//     .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       console.log(token);
//       // The signed-in user info.
//       const user = result.user;
//       console.log(user.displayName);
//       window.location.pathname = '/feed';
//     }).catch((error) => {
//     // Handle Errors here.
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       alert(errorMessage);
//       onNavigate('/register');
//       console.log(email, credential);
//     });
// };

export {
  createEmail, validateUserAndPass, loginWithGoogle, logOutUser, auth,
};
