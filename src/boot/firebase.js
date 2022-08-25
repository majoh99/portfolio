// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8Z3Xs5l_ASGuWDAAT8IV9j_tnoIZrYgY",
  authDomain: "portafolio-mariam-rosal.firebaseapp.com",
  projectId: "portafolio-mariam-rosal",
  storageBucket: "portafolio-mariam-rosal.appspot.com",
  messagingSenderId: "905433089161",
  appId: "1:905433089161:web:bb890ad5ea87e3e7ceb258",
  measurementId: "G-ZFWH93QL4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
const db = getFirestore();

export { db };
