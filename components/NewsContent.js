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
import Skeleton from "./Skeleton";

export default function NewsContent({ newsProvider }) {
  let data;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(false);
    const colRef = collection(db, newsProvider);
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
    // );
    setLoading(true);
  }, [newsProvider]);

  return <div>{loading ? posts : <Loader />}</div>;
}

function Loader() {
  return (
    <div>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
