import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBENor5KKiCf6FB8OUXoZvJ83odq6qVoiE",
    authDomain: "marioplan-fd7a5.firebaseapp.com",
    databaseURL: "https://marioplan-fd7a5.firebaseio.com",
    projectId: "marioplan-fd7a5",
    storageBucket: "marioplan-fd7a5.appspot.com",
    messagingSenderId: "187765178530",
    appId: "1:187765178530:web:1d4fa74b9fd8bad3cad7fb"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;