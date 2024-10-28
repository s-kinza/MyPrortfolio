// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const About = () => {
//   return (
//     <div id="about">
//       <section className="text-gray-300 body-font bg-gray-900  bg-fixed bg-cover bg-center">
//         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
//             <Image
//               className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
//               alt="hero"
//               width={300}
//               height={500}
//               src="/images/about.png"
//             />
//           </div>
//           <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
//             <h1 className="title-font sm:text-4xl text-9xl mb-4 font-extrabold text-gray-100">
//               About me
//             </h1>
//             <p className="mb-7 leading-relaxed">
//             Hey there! I'm Syeda Kanzul-Eman.
// I'm a Full Stack Developer who loves diving into backend development and exploring the endless possibilities of Generative AI 🌐. I focus on creating web solutions that are not only powerful but also efficient and forward-thinking.
// <br />
// <br />
// 🌟<b> What I Bring:</b>
// <br />
// <br />
// . Creative Thinker & Tech Enthusiast
// <br />

// . Passionate Learner
// <br />

// . Problem Solver for Complex Tech Challenges
// <br />
// <br />
// 💼 <b>A Little About Me:</b>
// <br />
// <br />
// I have a strong foundation in full-stack development, with a special interest in integrating Artificial Intelligence into my projects. My goal is simple: to build reliable, high-performance applications that match your unique business needs.
// <br />
// <br />
// 🛠 <b>Tech Skills:</b>
// <br />
// <br />
// <b>Languages:</b> TypeScript, JavaScript
// <br />
// <b>Frameworks:</b> Next.js, Tailwind CSS
// <br />
// <br />
// 🤝 <b>Let's Work Together!</b>
// <br />
// <br />
// I'm always open to new projects, collaborations, and networking opportunities. If you have an idea or a project in mind, let’s connect and make it a reality!
// <br />  
// <br />
//   I'm continuously refining my skills to stay in sync with industry trends. At the moment, I’m diving deeper into advanced front-end techniques, blending creativity and functionality to bring ideas to life through code.
//             </p>
//             <div className="flex justify-center">
//                 <Link href={"/cv/myCV.pdf"}>
//               <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                 View CV
//               </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-300 body-font bg-gray-900 bg-fixed bg-cover bg-center">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="hero"
              width={300}
              height={500}
              src="/images/about.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-9xl mb-4 font-extrabold text-gray-100">
              About me
            </h1>
            <p className="mb-7 leading-relaxed">
              Hey there! I&apos;m Syeda Kanzul-Eman.
              I&apos;m a Full Stack Developer who loves diving into backend development and exploring the endless possibilities of Generative AI 🌐. I focus on creating web solutions that are not only powerful but also efficient and forward-thinking.
              <br />
              <br />
              🌟<b> What I Bring:</b>
              <br />
              <br />
              . Creative Thinker &amp; Tech Enthusiast
              <br />
              . Passionate Learner
              <br />
              . Problem Solver for Complex Tech Challenges
              <br />
              <br />
              💼 <b>A Little About Me:</b>
              <br />
              <br />
              I have a strong foundation in full-stack development, with a special interest in integrating Artificial Intelligence into my projects. My goal is simple: to build reliable, high-performance applications that match your unique business needs.
              <br />
              <br />
              🛠 <b>Tech Skills:</b>
              <br />
              <br />
              <b>Languages:</b> TypeScript, JavaScript
              <br />
              <b>Frameworks:</b> Next.js, Tailwind CSS
              <br />
              <br />
              🤝 <b>Let&apos;s Work Together!</b>
              <br />
              <br />
              I&apos;m always open to new projects, collaborations, and networking opportunities. If you have an idea or a project in mind, let&apos;s connect and make it a reality!
              <br />  
              <br />
              I&apos;m continuously refining my skills to stay in sync with industry trends. At the moment, I&apos;m diving deeper into advanced front-end techniques, blending creativity and functionality to bring ideas to life through code.
            </p>
            <div className="flex justify-center">
              <Link href={"/cv/myCV.pdf"}>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  View CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
