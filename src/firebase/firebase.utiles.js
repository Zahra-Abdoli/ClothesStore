import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyCIhgq6YhagaJLy2ElZU5TFAr_53a5-PrE",
    authDomain: "clothshop-eb530.firebaseapp.com",
    databaseURL: "https://clothshop-eb530.firebaseio.com",
    projectId: "clothshop-eb530",
    storageBucket: "clothshop-eb530.appspot.com",
    messagingSenderId: "606434271459",
    appId: "1:606434271459:web:5f237e56870024a74065d6",
    measurementId: "G-NX5LXTQNZ2"
  };
  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
