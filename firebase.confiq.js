// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCi-SO-FwpO3m4KRpZBtWxqGVHJawmjpH4",
    authDomain: "simple-auth-00.firebaseapp.com",
    projectId: "simple-auth-00",
    storageBucket: "simple-auth-00.appspot.com",
    messagingSenderId: "1054710307992",
    appId: "1:1054710307992:web:17a84f53829092d58384ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app