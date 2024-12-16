// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtqVgvxwca9FOyakNuiEhLwHErzD8vRL8",
  authDomain: "videos-hub-project.firebaseapp.com",
  projectId: "videos-hub-project",
  storageBucket: "videos-hub-project.firebasestorage.app",
  messagingSenderId: "564746130775",
  appId: "1:564746130775:web:946a6e54e9aafd7a1f5a12",
  measurementId: "G-CWP3EKWC88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);