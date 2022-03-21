import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Dropdown from "../components/Dropdown";

export default function Home() {
  return (
    <>
      <Dropdown />
      <h1 className=" ">Cybersec news </h1>
      <p>this is a paragraph just to test if eweryting is working </p>
    </>
  );
}
