// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCvaibFRy8jsx3DaX8hnEDvXiYclGruL0",
  authDomain: "asadito-arg.firebaseapp.com",
  projectId: "asadito-arg",
  storageBucket: "asadito-arg.appspot.com",
  messagingSenderId: "881655583649",
  appId: "1:881655583649:web:5c7d0716cd1f838708f1e0",
  measurementId: "G-5LE9NFCFT8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
