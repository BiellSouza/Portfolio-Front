// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxY7UokQlJASIVzxj1G8DFVtYqGtNQtig",
  authDomain: "gabriel-de-souza-da-silva.firebaseapp.com",
  projectId: "gabriel-de-souza-da-silva",
  storageBucket: "gabriel-de-souza-da-silva.firebasestorage.app",
  messagingSenderId: "530870092241",
  appId: "1:530870092241:web:e31ada210723fcd3e920f0",
  measurementId: "G-MRFZ9K1KES",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
