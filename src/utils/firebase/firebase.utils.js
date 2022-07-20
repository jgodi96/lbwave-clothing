import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc,
  collection,
  query,
  getDocs,
writeBatch } from "firebase/firestore";

//copy and paste from firebase documentation
const firebaseConfig = {
  apiKey: "AIzaSyBukizbevlc3NkH8EaxijVbbfNpvC99-J0",
  authDomain: "lbwave-clothing.firebaseapp.com",
  projectId: "lbwave-clothing",
  storageBucket: "lbwave-clothing.appspot.com",
  messagingSenderId: "813382432833",
  appId: "1:813382432833:web:b73fab6e09c2f90df5eec0",
  measurementId: "G-9R4CDELV7E",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Initialize Firebase
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  {signInWithPopup(auth, googleProvider);}
export const signInWithGoogleRedirect = () =>
  {signInWithRedirect(auth, googleProvider);}
  
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

 
   objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
    
   });
   

   await batch.commit();
   console.log('done')

} 

export const getCategoriesAndDocuments = async() =>{
  const collectionRef = collection(db,'categories');
  const q = query(collectionRef)

  const querySnapshot =  await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot)=>{
    const {title,items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  },{})

  return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth,additionalInformation = {}) => {

  if(!userAuth) return 
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  //data
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }
};

export const createAuthUserWithEmailAndPassword = async (email,password) =>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthUserWithEmailAndPassword = async (email,password) =>{
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth,email,password);
}
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
}