import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Head>
        <title>Hugo Lacerda{"'"}s Portfolio</title>
      </Head>
      <Presentation />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
