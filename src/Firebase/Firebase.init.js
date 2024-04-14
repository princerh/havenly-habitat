
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFdGiUaocs0eHUeOtbnJwWzaCtHNMGl5o",
  authDomain: "havenly-habitat.firebaseapp.com",
  projectId: "havenly-habitat",
  storageBucket: "havenly-habitat.appspot.com",
  messagingSenderId: "744172586992",
  appId: "1:744172586992:web:c932c5f956d29b3b6b3f35"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) 