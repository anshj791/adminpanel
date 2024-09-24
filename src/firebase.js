import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA2klfuLsM7a2SzOnhIOly4JAbaS1NWxEE",
  authDomain: "cp-iii-ai-trip-planer.firebaseapp.com",
  projectId: "cp-iii-ai-trip-planer",
  storageBucket: "cp-iii-ai-trip-planer.appspot.com",
  messagingSenderId: "58417660987",
  appId: "1:58417660987:web:f66d80abc06a7b1560881e",
  measurementId: "G-M6YLGGN51G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
