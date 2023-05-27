
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDbHaFX_DSJUKROlIV1qeT-agR3p8cBLaE",
  authDomain: "proyecto-react-js-484f5.firebaseapp.com",
  projectId: "proyecto-react-js-484f5",
  storageBucket: "proyecto-react-js-484f5.appspot.com",
  messagingSenderId: "374368142485",
  appId: "1:374368142485:web:54cb5b6e97c8d3bed6879c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)