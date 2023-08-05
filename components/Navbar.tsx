import { BsInstagram } from "react-icons/bs";
import React, { useState } from "react";
export default function Navbar() {
  let Links = [
    { name: "portraits", link: "/" },
    { name: "cars", link: "/cars" },
    // { name: "contact", link: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between bg-white p-6 px-6 lg:px-10">
        <div className="mr-6 flex flex-shrink-0 items-center text-black">
          <a href="/">
           <span className="text-xl font-road tracking-tight">KENPASO</span>
          </a>
        </div>
        <div className="block sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button className="flex items-center rounded border border-black px-3 py-2 text-black hover:border-white hover:text-white">
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="block w-full flex-grow sm:flex sm:w-auto sm:items-center">
          <div className={`text-md  ${isOpen ? 'inline-block' : 'hidden'}  sm:inline-block sm:flex-grow `}>
            {Links.map((link) => (
              <a
                href={link.link}
                className="mr-4 mt-4 block text-black hover:underline sm:mt-0 sm:inline-block"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className={`${isOpen ? ' `block' : 'hidden'}  sm:block `}>
            <a
              href="https://www.instagram.com/kenpaso_/"
              className="text-md mt-4 inline-block rounded border border-white pr-0 leading-none text-black hover:border-transparent hover:bg-white hover:text-gray-600 sm:mt-0 sm:pt-1 sm:text-lg  sm:pr-0"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
