// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "luxe-estate.firebaseapp.com",
  projectId: "luxe-estate",
  storageBucket: "luxe-estate.appspot.com",
  messagingSenderId: "991998145986",
  appId: "1:991998145986:web:0c1879c5a17376f97f525b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);