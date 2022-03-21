// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8KMPihFYw-dtUEdoEpAbKQYGt6bmdsK4",
  authDomain: "cybersecnews-94302.firebaseapp.com",
  projectId: "cybersecnews-94302",
  storageBucket: "cybersecnews-94302.appspot.com",
  messagingSenderId: "670136203811",
  appId: "1:670136203811:web:99b1b25f359de0939c8f96",
  measurementId: "G-SKRD90EQBK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export const signIn = signInWithPopup;
export const logOut = signOut;
