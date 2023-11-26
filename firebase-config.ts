// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0quoGUcOcJffG2Jpvz_XW_-jNERBlyMc",
  authDomain: "iths-crossplatform-6eab0.firebaseapp.com",
  projectId: "iths-crossplatform-6eab0",
  storageBucket: "iths-crossplatform-6eab0.appspot.com",
  messagingSenderId: "736236613865",
  appId: "1:736236613865:web:39d71df4f1c3d66e918078",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
