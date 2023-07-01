import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtW2QlrIMLiagkKNQ5wU5vfvGAoON-Bd0",
  authDomain: "chatgpt-messenger-82599.firebaseapp.com",
  projectId: "chatgpt-messenger-82599",
  storageBucket: "chatgpt-messenger-82599.appspot.com",
  messagingSenderId: "914548467905",
  appId: "1:914548467905:web:a5a06df725cbc833ab8c40",
};

// Initialize Firebase
const app = getApps().length ? getApp(): initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };