import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Example from "../components/Navbar";
import SignIn from "../components/auth";
import NewsContent from "../components/NewsContent";

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <h1 className="w-screen text-[#D4EAC8] ">cybersecnews</h1>
      {/* <SignIn /> */}
      <NewsContent /> 
    </div>
  );
}
