import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDvu85v5HNhP2fdUHa-k5bWXj0QQcSrtZE",
    authDomain: "linkedin-clone-7c39f.firebaseapp.com",
    projectId: "linkedin-clone-7c39f",
    storageBucket: "linkedin-clone-7c39f.appspot.com",
    messagingSenderId: "194797841766",
    appId: "1:194797841766:web:905aabf3d45ac65f86aca7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};