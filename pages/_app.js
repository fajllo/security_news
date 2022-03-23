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
      <header>
        <h1 className="w-screen text-[#D4EAC8] fixed top-0 left-0 bg-[#070600]  p-4 z-10 ">
          cybersecnews
        </h1>
        <div className="h-10"></div>
      </header>

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
