// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
    apiKey: "AIzaSyBgn4ScnKTupwOtflTNBQfj7_naw1EU9oQ",
    authDomain: "timer-a3bae.firebaseapp.com",
    projectId: "timer-a3bae",
    storageBucket: "timer-a3bae.appspot.com",
    messagingSenderId: "688954326020",
    appId: "1:688954326020:web:12ddba2d1bd748f1edc951",
    measurementId: "G-PEF3XKMQ1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);