import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Montserrat:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content={"cybersec news"} />
        <meta
          property="og:description"
          content={"this a security news website created with next js "}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
