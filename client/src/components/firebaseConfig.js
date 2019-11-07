import firebase from "firebase";
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyA-yK3wWQQt1JgLHGH1lW6AD2TCENxTClI",
    authDomain: "meetographers-3edf6.firebaseapp.com",
    databaseURL: "https://meetographers-3edf6.firebaseio.com",
    projectId: "meetographers-3edf6",
    storageBucket: "meetographers-3edf6.appspot.com",
    messagingSenderId: "965677771393",
    appId: "1:965677771393:web:641a7bc3a0c197b1bfbb80",
    measurementId: "G-PR0N8372E0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {storage, firebase as default}