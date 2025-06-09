// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk-aiEiX01ANYrgzTVNBjlM4h01tNWQvc",
  authDomain: "radiusdash.firebaseapp.com",
  projectId: "radiusdash",
  storageBucket: "radiusdash.firebasestorage.app",
  messagingSenderId: "50951236678",
  appId: "1:50951236678:web:9510b64d0ae0854f4bae47",
  measurementId: "G-3QGFBDEVT7"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }; 