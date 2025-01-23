// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA16rRqoEGNMQbCErZjIFT9ce3a3D0LSM",
  authDomain: "react-firebase-792b7.firebaseapp.com",
  projectId: "react-firebase-792b7",
  storageBucket: "react-firebase-792b7.firebasestorage.app",
  messagingSenderId: "576961335668",
  appId: "1:576961335668:web:fd2941aa11d8190d7f9c21",
  measurementId: "G-SFZG9TMESE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

