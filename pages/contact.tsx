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
      <main className="mx-auto mt-10 flex max-w-[1200px] h-[60vh] flex-col  px-6">
        <h2 className="mb-4 text-3xl font-bold">contact</h2>
        <p className="font-thin text-lg max-w-[480px]">
          Hello World! I'm paso. Based in San Francisco, CA. I like to document 
          my experiences and take pics.
        </p>
        <a
            href="mailto:hello@kenpaso.com"
            target="_blank"
            className="font-thin text-lg max-w-[490px] mt-10 mb-4 underline-offset-8 underline hover:text-slate-500"
            rel="noreferrer"
          >
            hello@kenpaso.com
          </a>
          <a
              href="https://www.instagram.com/kenpaso_/"
              className="text-md mt-4 inline-block rounded border border-white pr-0 leading-none text-black hover:border-transparent hover:bg-white hover:text-gray-600 sm:mt-0 sm:pt-1 sm:text-lg  sm:pr-0"
            >
              <BsInstagram />
            </a>
      </main>
      <Footer />
    </>
  );
};

export default Home;
