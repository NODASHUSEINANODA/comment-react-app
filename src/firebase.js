import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfWXY8HlWPksY0p7DkTv4KZ1B4sPRjylk",
  authDomain: "comment-react-app-ee79d.firebaseapp.com",
  projectId: "comment-react-app-ee79d",
  storageBucket: "comment-react-app-ee79d.appspot.com",
  messagingSenderId: "190249105477",
  appId: "1:190249105477:web:e0146dda6db598aa9c8b2c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;