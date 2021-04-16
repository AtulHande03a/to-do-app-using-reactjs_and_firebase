import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAfRfnsOdX0FFyV6IaFdn5YpMohuK4SqQ4",
  authDomain: "todoapp-9899d.firebaseapp.com",
  projectId: "todoapp-9899d",
  storageBucket: "todoapp-9899d.appspot.com",
  messagingSenderId: "746484860561",
  appId: "1:746484860561:web:1c0b55d0d7cfcad295a130",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };
