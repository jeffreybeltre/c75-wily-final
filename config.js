import firebase from 'firebase';
require('@firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCrO6lHu_2tKimZUv7VXacNQxAsetsq8dY",
    authDomain: "wily-1d310.firebaseapp.com",
    projectId: "wily-1d310",
    storageBucket: "wily-1d310.appspot.com",
    messagingSenderId: "1055832810523",
    appId: "1:1055832810523:web:e08a00034ed6f431f6c4be"
};

// Initialize Firebase
if(!firebase.apps.length){ 
    firebase.initializeApp(firebaseConfig); 
}

export default firebase.firestore();