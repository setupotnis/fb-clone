// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4Ccan0UWbCLzFoN36r2wSeadSMBDNJxw",
  authDomain: "facebook-clone-84592.firebaseapp.com",
  databaseURL: "https://facebook-clone-84592.firebaseio.com",
  projectId: "facebook-clone-84592",
  storageBucket: "facebook-clone-84592.appspot.com",
  messagingSenderId: "684877188045",
  appId: "1:684877188045:web:159402da5a0d90be44d284",
  measurementId: "G-YQ0J2DTGGR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
