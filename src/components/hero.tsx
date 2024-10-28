"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font bg-fixed bg-cover bg-center " id="home">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Hello Coder's! 
        <br className="hidden lg:inline-block" />
        
    
    
        <br className="hidden lg:inline-block"/>
        <Typewriter
          options={{
            strings: [
                'Myself Syeda Kanzul-Eeman.',
              'I AM Web Developer',
              'I AM Full Stack Developer',
              'I AM Tech Enthusiast',
              'I AM Create digital experiences',
            ],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </h1>
      
      <div className="w-[100px] h-[2px] bg-blue-700"></div>
      
      <p className="mb-8 leading-relaxed">
      I'm a passionate coder and tech enthusiast, driven to create seamless and impactful digital experiences. My journey in tech is fueled by curiosity and a dedication to mastering new skills. Let's connect and explore the world of coding together
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
        width={300}
        height={300}
        alt="hero"
        src="/images/pic.png"
      />
    </div>
  </div>
</section>

   
  );
};

export default Hero;
