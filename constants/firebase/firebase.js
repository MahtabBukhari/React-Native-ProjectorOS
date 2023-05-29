// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
// } from "firebase/auth";
// import {
//   getFirestore,
//   doc,
//   getDoc,
//   setDoc,
//   collection,
//   writeBatch,
//   getDocs,
//   query,
// } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDxg509dSFTrICJ2U_mLUeO4El0vFFkPAo",
//   authDomain: "react-native-projectoros.firebaseapp.com",
//   projectId: "react-native-projectoros",
//   storageBucket: "react-native-projectoros.appspot.com",
//   messagingSenderId: "972453341257",
//   appId: "1:972453341257:web:e2c4377c99cfefa545f798",
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();

// provider.getCustomParameters({
//   prompt: "select_account",
// });

// export const auth = getAuth();

// export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// //connect with firebase database

// export const db = getFirestore();

// //store categoreis in only one transaction
// export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
//   const collectionRef = collection(db, collectionKey);
//   const batch = writeBatch(db);

//   objectToAdd.forEach((object) => {
//     // tell to the doc which collection where wite hte document
//     const docRef = doc(collectionRef, object.title.toLowerCase());
//     // batch will add each object to the relevant document in collection
//     batch.set(docRef, object);
//   });
//   await batch.commit();
// };

// //fetch data from the firebase database
// export const getCollectionsAndDocuments = async () => {
//   //first access the collection references
//   const collectionRef = collection(db, "categories");
//   // then query on that collection refreference
//   const q = query(collectionRef);
//   //then fetch the document on the base of query
//   const querySnapshot = await getDocs(q);
//   return querySnapshot.docs.map((docSnapShot) => docSnapShot.data());
// };

// export const createUserDocumentfromAuth = async (
//   userAuth,
//   authenticationInfo = {}
// ) => {
//   const getDocRef = doc(db, "users", userAuth.uid);

//   console.log(getDocRef);
//   const userSnapshot = await getDoc(getDocRef);

//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await setDoc(getDocRef, {
//         displayName,
//         email,
//         createdAt,
//         ...authenticationInfo,
//       });
//     } catch (error) {
//       console.log("error during the user register", error.message);
//     }
//   }

//   return userSnapshot;
// };

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await createUserWithEmailAndPassword(auth, email, password);
// };
// export const SignInAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await signInWithEmailAndPassword(auth, email, password);
// };

// export const SignOutUser = async () => await signOut(auth);

// export const onAuthStateChangedListener = (callback) =>
//   onAuthStateChanged(auth, callback);