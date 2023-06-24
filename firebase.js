import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpVbWSKksaVc4x7fx2e7CJpU1or2F70Bs",
  authDomain: "ecommerce-application-dc293.firebaseapp.com",
  projectId: "ecommerce-application-dc293",
  storageBucket: "ecommerce-application-dc293.appspot.com",
  messagingSenderId: "443679962105",
  appId: "1:443679962105:web:a40896d271b96902b68328",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
