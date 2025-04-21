
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm-LXV4jSDJSTDAOD3b8TII54tmFikYqM",
  authDomain: "csai-d80bc.firebaseapp.com",
  projectId: "csai-d80bc",
  storageBucket: "csai-d80bc.firebasestorage.app",
  messagingSenderId: "651170688836",
  appId: "1:651170688836:web:c7c8899e4b602bdcf1b111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);