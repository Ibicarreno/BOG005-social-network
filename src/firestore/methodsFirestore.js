import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc,
} from './firestore.js';
import { app } from '../config/configFireBase.js';

const db = getFirestore(app);

export const saveRecipe = (title, description) => {
  addDoc(collection(db, 'recipes'), { title, description });
};

export const getRecipe = () => getDocs(collection(db, 'recipes'));

export const onGetRecipes = (callback) => onSnapshot(collection(db, 'recipes'), callback);

export const deletePost = (id) => deleteDoc(doc(db, 'recipes', id));

export const getPost = (id) => getDoc(doc(db, 'recipes', id));

export const updatePost = (id, newFields) => updateDoc(doc(db, 'recipes', id), newFields);
