// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore, getDocs} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOXQqtrKmuoreU2kYwN24LLjDPdH9rqtI",
  authDomain: "dashbord-e14c8.firebaseapp.com",
  projectId: "dashbord-e14c8",
  storageBucket: "dashbord-e14c8.appspot.com",
  messagingSenderId: "709236265083",
  appId: "1:709236265083:web:dc9d62e63a28ba2888d2de",
  measurementId: "G-XQZGE4V3C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

