import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen 
    snap-y snap-mandatory 
    overflow-scroll z-0"
    >
      <Head>
        <title>AnotherItDude | Abhimanyu Baidya | Resume</title>
        <meta
          name="description"
          content="AnotherItDude | Abhimanyu Baidya | Resume created with NextJS and typescrit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* hero */}
      <section id="hero" className="snap-end">
        <Hero />
      </section>

      {/*About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Propects */}

      {/* Contact */}
    </div>
  );
};

export default Home;
