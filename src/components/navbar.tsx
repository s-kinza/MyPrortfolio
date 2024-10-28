import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5"

const Navbar = () => {
  return (
    <div className="z-50 sticky top-0">
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
           <Image src="/images/sk-logo.png" alt={"Sk-Logo"} width={300} height={300} className="w-20"/>
            <span className="ml-3 text-xl">Syeda Kanzul-Eman</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"#home"} className="mr-5 hover:text-white">Home</Link>
            <Link href={"#about"} className="mr-5 hover:text-white">About</Link>
            <Link href={"#skill"} className="mr-5 hover:text-white">Skills</Link>
            <Link href={"#project"} className="mr-5 hover:text-white">Project</Link>
            <Link href={"#Contact"} className="mr-5 hover:text-white">Contact</Link>
          </nav>
            <a href="/cv/myCV.pdf">
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
         Download CV
         <IoCloudDownloadOutline className="ml-5"/>
          </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
