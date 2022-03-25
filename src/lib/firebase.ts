import { getApp as getFirebaseApp, initializeApp } from "firebase/app";
import { getAuth as getFirebaseAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAv1wMt8Tj268_Ya2-74vgVfGRSRRyTJcE",
  appId: "1:745069029187:web:63da4bdf014aa20d5931f6",
  authDomain: "playground-devtrillo.firebaseapp.com",
  databaseURL: "https://playground-devtrillo.firebaseio.com",
  measurementId: "G-FLVJ9SMZDT",
  messagingSenderId: "745069029187",
  projectId: "playground-devtrillo",
  storageBucket: "playground-devtrillo.appspot.com",
};

const getApp = () => {
  try {
    return getFirebaseApp();
  } catch (e) {
    return initializeApp(firebaseConfig);
  }
};

export const getAuth = () => {
  const app = getApp();
  return getFirebaseAuth(app);
};
