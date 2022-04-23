import { getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAv1wMt8Tj268_Ya2-74vgVfGRSRRyTJcE",
  appId: "1:745069029187:web:63da4bdf014aa20d5931f6",
  authDomain: "playground-devtrillo.firebaseapp.com",
  databaseURL: "https://playground-devtrillo.firebaseio.com",
  measurementId: "G-FLVJ9SMZDT",
  messagingSenderId: "745069029187",
  projectId: "playground-devtrillo",
  storageBucket: "playground-devtrillo.appspot.com",
};

if (getApps().length === 0) initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore();

export const storage = getStorage();
