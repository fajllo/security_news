// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVlf4fa_dUfQeAPM_7HRqjmRqfOBMz0no",
  authDomain: "security-news-2074c.firebaseapp.com",
  projectId: "security-news-2074c",
  storageBucket: "security-news-2074c.appspot.com",
  messagingSenderId: "303951060017",
  appId: "1:303951060017:web:7060369fc3c3a9f44d4910",
  measurementId: "G-TBF7SPE1C5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
