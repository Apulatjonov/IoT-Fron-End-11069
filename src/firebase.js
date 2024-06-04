// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'; // Import Realtime Database


const firebaseConfig = {
    apiKey: "AIzaSyCb5hfXVVBYgfwnib9OILRA9F6a2KvGkOc",
    authDomain: "iot-hospital-fe64b.firebaseapp.com",
    databaseURL: "https://iot-hospital-fe64b-default-rtdb.firebaseio.com",
    projectId: "iot-hospital-fe64b",
    storageBucket: "iot-hospital-fe64b.appspot.com",
    messagingSenderId: "52969607618",
    appId: "1:52969607618:web:b5fde87d36dd125346c65b",
    measurementId: "G-H09FDJ7DPB"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = firebase.database();
export { auth, firestore };
