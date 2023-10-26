
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDpUybQvoB-j51mGippUaqo7KX4w-oWe9E",
    authDomain: "victory-admin-recruit.firebaseapp.com",
    projectId: "victory-admin-recruit",
    storageBucket: "victory-admin-recruit.appspot.com",
    messagingSenderId: "970965247244",
    appId: "1:970965247244:web:ac849905b47fb755695529",
    measurementId: "G-800E0RX8Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };