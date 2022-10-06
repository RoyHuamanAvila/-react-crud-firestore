// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgqZGRYrM7f9dOGHGb7PRj9BUW27JCG0M",
  authDomain: "react-crud-firestore-94e99.firebaseapp.com",
  projectId: "react-crud-firestore-94e99",
  storageBucket: "react-crud-firestore-94e99.appspot.com",
  messagingSenderId: "217196738765",
  appId: "1:217196738765:web:67ee9010661d6c10181184"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
