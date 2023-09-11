import { BsArrowUp } from "react-icons/bs";
import { PiArrowUpThin } from "react-icons/pi";
import { useRef } from 'react';

export default function Footer() {
    const ref = useRef(null);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   };
    return (
      <>
      <footer className="pb-6 pt-6 text-center text-xs text-black/80 sm:pb-12 ">
        <div className="flex justify-center pb-2">
          <PiArrowUpThin onClick={scrollToTop} className="flex text-black/90 text-center text-4xl sm:text-4xl"/>
        </div>
        Built by{" "}
        <a
          href="https://www.kennethgalang.com/"
          target="_blank"
          className="font-semibold hover:text-slate-500"
          rel="noreferrer"
        >
          Kenneth Galang
        </a>
        <p className="pt-1">
          <a
            href="https://www.instagram.com/kenpaso_/"
            target="_blank"
            className="font-semibold hover:text-slate-500"
            rel="noreferrer"
          >
            Instagram
          </a>{" "}
          |{" "}
          <a
            href="mailto:hello@kenpaso.com"
            target="_blank"
            className="font-semibold hover:text-slate-500"
            rel="noreferrer"
          >
            Email
          </a>
        </p>
      </footer></>
      
      
    )
  }