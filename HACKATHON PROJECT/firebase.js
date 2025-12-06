import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";   // ← ADD THIS

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvDWq4HGnAwq0JKaugPgZAUSfMEC_4x7E",
  authDomain: "hackhorizon-18a82.firebaseapp.com",
  projectId: "hackhorizon-18a82",
  storageBucket: "hackhorizon-18a82.firebasestorage.app",
  messagingSenderId: "1087455592108",
  appId: "1:1087455592108:web:6eeacf4947ee0f0affe909",
  measurementId: "G-HKMJRDTR5B"
};

const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getDatabase(app);

export {
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword
};
