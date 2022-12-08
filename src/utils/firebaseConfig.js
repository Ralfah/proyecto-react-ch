import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbXGWK7KThrEYEZpC3TwPcz64o_gDM8Rw",
  authDomain: "coder-react-proyect.firebaseapp.com",
  projectId: "coder-react-proyect",
  storageBucket: "coder-react-proyect.appspot.com",
  messagingSenderId: "231455783145",
  appId: "1:231455783145:web:7c5c38a0cf3eabd1eb9878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;