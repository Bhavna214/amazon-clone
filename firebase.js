import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyD4fDakBz7Fsz5E_REBKO2QYsabKxRKG8M",

    authDomain: "clone-2-c633a.firebaseapp.com",

    projectId: "clone-2-c633a",

    storageBucket: "clone-2-c633a.appspot.com",

    messagingSenderId: "209112211525",

    appId: "1:209112211525:web:cde8528a55bdc24714c32c",

    measurementId: "G-0WTXGL5W97"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore();

