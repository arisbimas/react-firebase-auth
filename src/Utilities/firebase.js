import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEcm8tl6shE22l0q_BuuV62dC0bZn_dyw",
  authDomain: "formyprojects-1bb32.firebaseapp.com",
  projectId: "formyprojects-1bb32",
  storageBucket: "formyprojects-1bb32.appspot.com",
  messagingSenderId: "860914854523",
  appId: "1:860914854523:web:f6d22aa541e8835f3410de",
  measurementId: "G-XHLLG2RLNG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
