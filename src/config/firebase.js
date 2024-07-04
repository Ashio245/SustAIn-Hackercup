// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDH5BqzopVW0zKduhFLtiE_CFwViGz74ZU",
  authDomain: "sustain-40ede.firebaseapp.com",
  projectId: "sustain-40ede",
  storageBucket: "sustain-40ede.appspot.com",
  messagingSenderId: "993200961882",
  appId: "1:993200961882:web:c7c3c17a8f258553305b63",
  measurementId: "G-V0L8LY2MDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, storage, googleProvider }