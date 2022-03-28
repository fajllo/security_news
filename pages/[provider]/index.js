import NewsContent from "../../components/NewsContent";
import { db } from "../../lib/firebase";
import { collection, getDoc, doc, query } from "firebase/firestore";

export async function getServerSideProps({ query: urlQuery }) {
  //   get user name from url
  const { provider } = urlQuery;
  // const colRef = collection(db, provider);
  // const q = query(colRef);
  // let news = [];
  // getDoc(q)
  //   .then(snap => {
  //     snap.docs.foreach(doc => {
  //       news.push({ ...doc.data, id: doc.id });
  //     });
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });

  return { props: { provider } };
}
export default function ProviderPage({ provider }) {
  return (
    <div>
      <NewsContent newsProvider={provider} />
    </div>
  );
}
