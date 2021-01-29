import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBxuLbOQQm7QjhI3QsQRbSGLRRuHFXUCEg",
    authDomain: "tinder-clone-8cf5e.firebaseapp.com",
    projectId: "tinder-clone-8cf5e",
    storageBucket: "tinder-clone-8cf5e.appspot.com",
    messagingSenderId: "31536968079",
    appId: "1:31536968079:web:ab0fa0d502a5fd495a1bfa",
    measurementId: "G-YHFQTJ8JCY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;