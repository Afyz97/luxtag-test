import firebase from 'firebase/app';
import 'firebase/auth';
//import 'firebase/database';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyC6VtHho5uDFplfSMYgRpt6Vtmr57ovFfY",
    authDomain: "luxtag-test.firebaseapp.com",
    projectId: "luxtag-test",
    storageBucket: "luxtag-test.appspot.com",
    messagingSenderId: "555422516230",
    appId: "1:555422516230:web:9e81f4060adcc3fe7caf87",
    measurementId: "G-ERKYDQ4K7R"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();