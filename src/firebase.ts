import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA-EmgAVBbeAOgoZ2KDxSit8umvthsTIKs",
  authDomain: "nextjs-firebase-f66b6.firebaseapp.com",
  databaseURL: "https://nextjs-firebase-f66b6-default-rtdb.firebaseio.com",
  projectId: "nextjs-firebase-f66b6",
  storageBucket: "nextjs-firebase-f66b6.appspot.com",
  messagingSenderId: "319776246570",
  appId: "1:319776246570:web:613f1b1899748ecfcdac53",
  measurementId: "G-YLCMK4PNLP"
};

// Connect to your Firebase app
const app = initializeApp(firebaseConfig);
// Connect to your Firestore database
const db = getFirestore(app);
// Connect to Firebase auth
const auth = getAuth(app);
// Connect to Firebase storage
const storage = getStorage(app);

export { db, storage, ref, getDownloadURL  };
