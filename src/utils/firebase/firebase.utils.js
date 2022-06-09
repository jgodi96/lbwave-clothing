import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup,GoogleAuthProvider} from 'firebase/auth'

//copy and paste from firebase documentation
const firebaseConfig = {
    apiKey: "AIzaSyBukizbevlc3NkH8EaxijVbbfNpvC99-J0",
    authDomain: "lbwave-clothing.firebaseapp.com",
    projectId: "lbwave-clothing",
    storageBucket: "lbwave-clothing.appspot.com",
    messagingSenderId: "813382432833",
    appId: "1:813382432833:web:b73fab6e09c2f90df5eec0",
    measurementId: "G-9R4CDELV7E"
  };
   // Initialize Firebase
   const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt:"select_account"
  });
  
  // Initialize Firebase
export const auth = getAuth();