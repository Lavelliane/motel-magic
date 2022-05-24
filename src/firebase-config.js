import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_KEY}`,
  authDomain: "motel-magic.firebaseapp.com",
  projectId: "motel-magic",
  storageBucket: "motel-magic.appspot.com",
  messagingSenderId: "623810016",
  appId: "1:623810016:web:f9efc9b3c548ef6cd24785",
  measurementId: "G-X31CEF4LGS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
