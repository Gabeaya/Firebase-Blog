// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBep92qYMKLP6krxHW3XBna1HEpfMjPTo0",
  authDomain: "fir-blog-ecdda.firebaseapp.com",
  projectId: "fir-blog-ecdda",
  storageBucket: "fir-blog-ecdda.appspot.com",
  messagingSenderId: "1036173133878",
  appId: "1:1036173133878:web:ae7eb0d8a0d3242e673097",
  measurementId: "G-JD9VKVS9WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);