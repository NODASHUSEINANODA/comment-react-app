import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";
import db from "../firebase";
import {
  doc,
  postData,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { FirebaseError } from "firebase/app";

// function sendMessage(e) {
//   e.preventDefault();

//   db.collection("posts").add({
//     text: message,
//     title,
//     timestamp: FirebaseError.firestore.FieldValue.serverTimestamp(),
//   });
// }

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    // データベースからデータを取得する
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));

    
    });
    

    // リアルタイムで取得
    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({ ...doc.data() })));
    });
    
  }, []);
  
  
  // firebaseに書き込む
  function sendMessage(e) {
    e.preventDefault();
    try {
      addDoc(collection(db, "posts"), {
        title: name,
        text: message,
        createdAt: Timestamp.fromDate(new Date()),
      });
    } catch (error) {
      console.log(error);
    }
    
  }
  
  
  const handleChange = (e) => {
    setText(e.target.value.trim());
  };

  return (
    <div className={styles.container}>
      <Header />
      {posts.map((post) => (
        <div key={uuidv4()}>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
        </div>
      ))}
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input
            type="text"
            placeholder="メッセージを入力してください"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </form>
      <Main />
      <Footer />
    </div>
  );
}
