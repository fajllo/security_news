import Card from "./Card";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  getDocs,
  query,
  onSnapshot,
  doc,
} from "firebase/firestore";

export default function NewsContent() {
  let data;

  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    // real time
    const colRef = collection(db, "darkreading");
    data = onSnapshot(colRef, snap => {
      const news = snap.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      });
      setPosts(
        news.map(post => {
          return <Card key={post.id} post={post} />;
        })
      );
    });
  }, [data]);

  return <div>{posts}</div>;
}
