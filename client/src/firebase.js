// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "debnath-estate.firebaseapp.com",
  projectId: "debnath-estate",
  storageBucket: "debnath-estate.appspot.com",
  messagingSenderId: "972874870122",
  appId: "1:972874870122:web:402c56fb0f73f1e5db0913"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);