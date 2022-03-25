import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import SignIn from "../components/auth";
import ProviderPage from "../components/Providers";

export default function Home() {
  return (
    <div className="flex flex-wrap">
      {/* <SignIn /> */}
      <ProviderPage />
    </div>
  );
}
