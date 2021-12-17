import type { NextPage } from "next";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Presentation />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
