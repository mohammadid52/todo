import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJD9La1oIGjI7dGF0EauVXVHMagPAw83A",
  authDomain: "todo-fefcf.firebaseapp.com",
  databaseURL: "https://todo-fefcf.firebaseio.com",
  projectId: "todo-fefcf",
  storageBucket: "todo-fefcf.appspot.com",
  messagingSenderId: "318353273091",
  appId: "1:318353273091:web:dbcb1ec185ba1118733936",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.auth();
export default firebase;
