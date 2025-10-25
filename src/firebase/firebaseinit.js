// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUw_LAj8_EdGiyN4a811bE1q_tLoQphjA",
  authDomain: "assignment9-c74b8.firebaseapp.com",
  projectId: "assignment9-c74b8",
  storageBucket: "assignment9-c74b8.firebasestorage.app",
  messagingSenderId: "1054397702021",
  appId: "1:1054397702021:web:2333a150d9590fbc026eec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth  = getAuth(app)