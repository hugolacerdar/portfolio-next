import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Metatags from "../components/Metatags/indes";
import Presentation from "../components/Presentation";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Metatags />
      <Header />
      <Presentation />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
