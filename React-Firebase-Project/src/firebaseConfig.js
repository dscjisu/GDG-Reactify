import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

//config
const firebaseConfig = {
    apiKey: "AIzaSyB07g2YIadDh5-aFgPtDEye0qwlU7bsj6c",
    authDomain: "tut-1-7544c.firebaseapp.com",
    projectId: "tut-1-7544c",
    storageBucket: "tut-1-7544c.firebasestorage.app",
    messagingSenderId: "887684515995",
    appId: "1:887684515995:web:c68f1dbc659c663a739e3e",
    databaseURL: "https://tut-1-7544c-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {app, database};