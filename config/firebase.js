import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCw4UPt7JFNd_FKjqGRxurGBlxQgJP-IWI",
  authDomain: "anonibus-c3441.firebaseapp.com",
  databaseURL: "https://anonibus-c3441.firebaseio.com",
  projectId: "anonibus-c3441",
  storageBucket: "anonibus-c3441.appspot.com",
  messagingSenderId: "766998857059",
  appId: "1:766998857059:web:d9466562b373cb293abf56",
  measurementId: "G-E00GTDM3EX"

};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();