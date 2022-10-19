import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc,
  updateDoc, arrayUnion, arrayRemove, orderBy, query,
} from './firestore.js';
import { app } from '../config/configFireBase.js';

const db = getFirestore(app);

export const saveRecipe = (date, title, description, name, idUser) => {
  addDoc(collection(db, 'recipes'), {
    date, title, description, like: [], name, idUser,
  });
};

const dates = collection(db, 'recipes');
export const q = query(dates, orderBy('date', 'desc'));

export const getRecipe = () => getDocs(collection(db, 'recipes'));

export const onGetRecipes = (callback) => onSnapshot(q, callback);

export const deletePost = (id) => deleteDoc(doc(db, 'recipes', id));

export const getPost = (id) => getDoc(doc(db, 'recipes', id));

export const updatePost = (id, newFields) => updateDoc(doc(db, 'recipes', id), newFields);

export const likeMe = (idPost, idUser) => {
  updateDoc(doc(db, 'recipes', idPost), { like: arrayUnion(idUser) });
};

export const dislikeMe = (idPost, idUser) => {
  updateDoc(doc(db, 'recipes', idPost), { like: arrayRemove(idUser) });
};
