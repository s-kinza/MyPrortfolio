import React from "react";
import { PiFlagCheckeredFill } from "react-icons/pi";
const Skill = () => {
  return (
    <div id="skill">
      <section className="text-gray-100 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-indigo-500 tracking-widest font-bold title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-extrabold title-font text-gray-200">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Skills  HTML*/}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <PiFlagCheckeredFill className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-200 text-lg title-font font-extrabold">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-8 w-full bg-gray-300 rounded-full">
                    <div className="absolute inset-3 bg-indigo-500 rounded-full"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">100%</p>
                </div>
              </div>
            </div>
             {/* Skills CSS*/}
             <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <PiFlagCheckeredFill className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-200 text-lg title-font font-extrabold">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-8 w-full bg-gray-300 rounded-full">
                    <div className="absolute inset-3 bg-indigo-500 rounded-full w-[70%]"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">70%</p>
                </div>
              </div>
            </div>
             {/* Skills JS/TS*/}
             <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <PiFlagCheckeredFill className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-200 text-lg title-font font-extrabold">
                    JavaScript/TypeScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-8 w-full bg-gray-300 rounded-full">
                    <div className="absolute inset-3 bg-indigo-500 rounded-full w-[50%]"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">50%</p>
                </div>
              </div>
            </div>
             {/* Skills REACT.JS*/}
             <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <PiFlagCheckeredFill className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-200 text-lg title-font font-extrabold">
                    React.JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-8 w-full bg-gray-300 rounded-full">
                    <div className="absolute inset-3 bg-indigo-500 rounded-full w-[60%]"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">60%</p>
                </div>
              </div>
            </div>
            {/* Skills NEXT.JS*/}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <PiFlagCheckeredFill className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-200 text-lg title-font font-extrabold">
                    Next.js
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-8 w-full bg-gray-300 rounded-full">
                    <div className="absolute inset-3 bg-indigo-500 rounded-full w-[80%]"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">80%</p>
                </div>
              </div>
            </div>
             {/* Skills TAILWIND CSS*/}
             <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <PiFlagCheckeredFill className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-200 text-lg title-font font-extrabold">
                    Tailwind CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-8 w-full bg-gray-300 rounded-full">
                    <div className="absolute inset-3 bg-indigo-500 rounded-full w-[75%]"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">75%</p>
                </div>
              </div>
            </div>
            {/* Skills CANVA*/}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <PiFlagCheckeredFill className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-200 text-lg title-font font-extrabold">
                    Canva
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-8 w-full bg-gray-300 rounded-full">
                    <div className="absolute inset-3 bg-indigo-500 rounded-full w-[55%]"></div>
                  </div>
                  <p className="text-indigo-500 font-bold text-right">55%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;


