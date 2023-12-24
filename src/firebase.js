// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV_4hNEjjhZx-W5I3Gt0nnxne8L9e1svU",
  authDomain: "project-94b04.firebaseapp.com",
  projectId: "project-94b04",
  storageBucket: "project-94b04.appspot.com",
  messagingSenderId: "683992137537",
  appId: "1:683992137537:web:6873f91600ef64cfafebc0",
  measurementId: "G-PCPTLDT1EB"
};
// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };