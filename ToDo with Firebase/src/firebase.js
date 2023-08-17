// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZb5tl8UDgxJHuKuy5AOJtpynHgAw1SVo",
    authDomain: "todo-app-f5aaf.firebaseapp.com",
    projectId: "todo-app-f5aaf",
    storageBucket: "todo-app-f5aaf.appspot.com",
    messagingSenderId: "693293297748",
    appId: "1:693293297748:web:6f9a5dfb639f8bf55f3dc1",
    measurementId: "G-W3EK4WK7WC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);