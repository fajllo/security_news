import NewsContent from "../../components/NewsContent";

export async function getServerSideProps({ query: urlQuery }) {
  //   get user name from url
  const { provider } = urlQuery;

  return { props: { provider } };
}
export default function ProviderPage({ provider }) {
  return (
    <div>
      <NewsContent newsProvider={provider} />
    </div>
  );
}
