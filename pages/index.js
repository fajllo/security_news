import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Example from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Example />
      <h1 className=" ">security news app</h1>
      <p>this is a paragraph just to test if eweryting is working </p>
    </div>
  );
}
