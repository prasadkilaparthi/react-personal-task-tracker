// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const Api_key = import.meta.env.VITE_APIKEY;
const firebaseConfig = {
  apiKey: Api_key,
  authDomain: "react-personal-task-tracker.firebaseapp.com",
  projectId: "react-personal-task-tracker",
  storageBucket: "react-personal-task-tracker.firebasestorage.app",
  messagingSenderId: "87457383127",
  appId: "1:87457383127:web:0d04a4c33cd5f65de52692",
  measurementId: "G-CX8V1VNQYD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
