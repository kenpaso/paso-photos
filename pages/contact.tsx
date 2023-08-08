import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BsInstagram } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>kenpaso.com</title>
      </Head>
      <Navbar />
      <main className="mx-auto mt-10 flex h-[60vh] max-w-[1200px] flex-col  px-6">
        <h2 className="mb-4 text-3xl font-bold">contact</h2>
        <p className="max-w-[480px] text-lg font-thin">
          Hello World! I'm paso. Based in San Francisco, CA. I like to document
          my experiences and take pics.
        </p>

        <p className="mt-6 max-w-[480px] text-lg  font-normal">
          why kenpaso/paso?
        </p>
        <p className="text-md max-w-[480px] font-thin">
          It's a play on ¿qué pasó? meaning "what happened?"
        </p>
        <p className="text-md mt-2 max-w-[480px]  font-thin">
          I use this name when I'm creating because it's a name I made for
          myself.
        </p>
        <p className="text-md mt-2 max-w-[480px]  font-thin">
          That's it. I'm just an overthinker.
        </p>

        <a
          href="mailto:hello@kenpaso.com"
          target="_blank"
          className="mb-4 mt-10 max-w-[490px] text-lg font-thin underline underline-offset-8 hover:text-slate-500"
          rel="noreferrer"
        >
          hello@kenpaso.com
        </a>
        <a
          href="https://www.instagram.com/kenpaso_/"
          className="text-md mt-4 inline-block rounded border border-white pr-0 leading-none text-black hover:border-transparent hover:bg-white hover:text-gray-600 sm:mt-0 sm:pr-0 sm:pt-1  sm:text-lg"
        >
          <BsInstagram />
        </a>
      </main>
      <Footer />
    </>
  );
};

export default Home;
