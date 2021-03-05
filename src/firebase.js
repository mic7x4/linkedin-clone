import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDxTMy70Vmtythw9rJ05MAuAvLXzpSFP44",
  authDomain: "linkedin-clone-29fb8.firebaseapp.com",
  projectId: "linkedin-clone-29fb8",
  storageBucket: "linkedin-clone-29fb8.appspot.com",
  messagingSenderId: "1034930222501",
  appId: "1:1034930222501:web:2fc04002698849e52ee44c",
  measurementId: "G-LP2H9S04M2"
};

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db =  firebaseApp.firestore();
    const auth = firebase.auth();

 export { db, auth }