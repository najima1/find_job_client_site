// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB12m1C4c7R5B0Q-wNis0WiUz6p-v1GY2Y",
    authDomain: "find-jobs-client.firebaseapp.com",
    projectId: "find-jobs-client",
    storageBucket: "find-jobs-client.appspot.com",
    messagingSenderId: "355822959708",
    appId: "1:355822959708:web:4b0564b8a246d4e7417a99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app