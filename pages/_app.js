import "../styles/globals.css";
import Head from "next/head";
import Picker from "../components/Picker";
import Link from "next/link";

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
      <header className="flex w-full bg-[#070600] z-10 opacity-1 fixed top-0 left-100">
        <div className="flex justify-between   w-full">
          {" "}
          {/* <Picker /> */}
          <Link href="/">
            <h1 className=" text-[#D4EAC8]   p-4  ">cybersecnews</h1>
          </Link>
        </div>
        <Picker />
      </header>
      <div className="h-10"></div>

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
