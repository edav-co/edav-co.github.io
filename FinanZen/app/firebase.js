// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//SDK de Firebase JS disponibles (de la CDN) para autenticación
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6rPgb5tnHpB9M05m9xD-IKoUl-i0jE7w",
  authDomain: "finanzen-7a7ce.firebaseapp.com",
  projectId: "finanzen-7a7ce",
  storageBucket: "finanzen-7a7ce.appspot.com",
  messagingSenderId: "595803373541",
  appId: "1:595803373541:web:ecab94a40ec5d48cdfb90c",
  measurementId: "G-WW8DESWSNF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
