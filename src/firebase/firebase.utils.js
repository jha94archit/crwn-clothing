import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyABAcHGPevxqpvOlL-7BZNCjdc9Srbz3R8",
    authDomain: "crwn-clothing-db-0294.firebaseapp.com",
    projectId: "crwn-clothing-db-0294",
    storageBucket: "crwn-clothing-db-0294.appspot.com",
    messagingSenderId: "504690604397",
    appId: "1:504690604397:web:b36bad9a98eb4b0cef4264",
    measurementId: "G-196LNEDMXV"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
