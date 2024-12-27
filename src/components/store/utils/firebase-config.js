// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDE9jL7O_faUtc6Bd-h0VVRe-NIYpj6Iy8",
    authDomain: "netflex-project-ee523.firebaseapp.com",
    projectId: "netflex-project-ee523",
    storageBucket: "netflex-project-ee523.firebasestorage.app",
    messagingSenderId: "330995828130",
    appId: "1:330995828130:web:bf70d0ab9d00a17e871efb",
    measurementId: "G-LDP1X1P1LY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)