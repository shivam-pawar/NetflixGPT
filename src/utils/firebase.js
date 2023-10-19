// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALXFOwuEFQuwRKtwZ0-iSFHMP2bnSalF4",
  authDomain: "netflixgpt-168dd.firebaseapp.com",
  projectId: "netflixgpt-168dd",
  storageBucket: "netflixgpt-168dd.appspot.com",
  messagingSenderId: "966371630265",
  appId: "1:966371630265:web:015843cfacc123ff874f68",
  measurementId: "G-VFFZ3GRJ2S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
