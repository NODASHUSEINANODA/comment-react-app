import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuYsDinTwh3DtCRO8NgItZNSGag1HOWAk",
  authDomain: "comment-react-app-62d49.firebaseapp.com",
  projectId: "comment-react-app-62d49",
  storageBucket: "comment-react-app-62d49.appspot.com",
  messagingSenderId: "535453333767",
  appId: "1:535453333767:web:9d762b10d6b58bbd42ada2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;