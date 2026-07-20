// firebase-config.js

import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyD8vmu6_0i1UNfXDXTA4UDXfn8TyLKjcUc",
  authDomain: "narcle-joias.firebaseapp.com",
  projectId: "narcle-joias",
  storageBucket: "narcle-joias.firebasestorage.app",
  messagingSenderId: "650402693382",
  appId: "1:650402693382:web:758d3256152e75108ade87"
};

export const app = initializeApp(firebaseConfig);