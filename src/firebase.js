import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyACs1-Twj8MFwKRce3Atlpawk1pR-HUHro",
    authDomain: "clone-98436.firebaseapp.com",
    projectId: "clone-98436",
    storageBucket: "clone-98436.appspot.com",
    messagingSenderId: "1097350151327",
    appId: "1:1097350151327:web:36e9a5b673d1f3768e36aa"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };