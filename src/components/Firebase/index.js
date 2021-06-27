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

  class Firebase{
    constructor(){
        this.fieldValue = app.firestore.FieldValue;
        this.emailAuthProvider = app.auth.EmailAuthProvider;
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }

    // Firebase Authentication API

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
   doSignOut = () => this.auth.signOut();
  
   doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
   doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.data();
            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = [];
            }
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };
            next(authUser);
          });
      } else {
        fallback();
      }
    });
    
    //*** Firebase Realtime Database User API ***
    
    user = uid => this.db.doc(`users/${uid}`);
    
    users = () => this.db.doc.collection('users');

    // jobs = uid => this.db.doc(`jobs/${uid}`);
 
    // messages = () => this.db.collection('messages');
    
  }

export default Firebase ;