// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Project = () => {
//   return (
//     <div id="project">
//       <section className="text-gray-400 bg-gray-900 body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-col text-center w-full mb-20">
//             <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
//               My Project's
//             </h1>
//           </div>
//           <div className="flex flex-wrap -m-8">
//             {/* Project */}
//             <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
//               <div className="flex relative">
//                 <Image
//                   alt="gallery"
//                   className="absolute inset-0 w-full h-full object-cover object-center"
//                   src={"/images/iphone.png"}
//                   width={800}
//                   height={800}
//                 />
//                 <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                   <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
//                     E-Commerce Project
//                   </h2>
//                   <h1 className="title-font text-lg font-medium text-white mb-3">
//                     I-PHONE 14 PRO MAX
//                   </h1>
//                   <p className="leading-relaxed line-clamp-2">
//                     I built this iPhone website with Next.js and Tailwind CSS.
//                   </p>
//                   <Link target="_blank" href={"i-phone-store-e-commerce-website-5i7k.vercel.app"}>
//                   <p className="leading-relaxed text-indigo-400 hover:underline">View Project:</p>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//               {/* Project */}
//               <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
//               <div className="flex relative">
//                 <Image
//                   alt="gallery"
//                   className="absolute inset-0 w-full h-full object-cover object-center"
//                   src={"/images/fb.png"}
//                   width={800}
//                   height={800}
//                 />
//                 <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                   <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
//                     One Page Project
//                   </h2>
//                   <h1 className="title-font text-lg font-medium text-white mb-3">
//                     FACEBOOK CLONE PAGE
//                   </h1>
//                   <p className="leading-relaxed line-clamp-2">
//                     I built this FaceBook Clone page with Next.js and Tailwind CSS.
//                   </p>
//                   <Link target="_blank" href={"next-js-facebook-page-clone.vercel.app"}>
//                   <p className="leading-relaxed text-indigo-400 hover:underline">View Project:</p>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
//               <div className="flex relative">
//                 <Image
//                   alt="gallery"
//                   className="absolute inset-0 w-full h-full object-cover object-center"
//                   src={"/images/shopping.png"}
//                   width={300}
//                   height={300}
//                 />
//                 <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                   <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
//                     E-Commerce Project
//                   </h2>
//                   <h1 className="title-font text-lg font-medium text-white mb-3">
//                     Shopping Website
//                   </h1>
//                   <p className="leading-relaxed line-clamp-2">
//                     I built this E-Commerce Shopping Website with Next.js and Tailwind CSS.
//                   </p>
//                   <Link target="_blank" href={"e-commerce-shopping-website-albz.vercel.app"}>
//                   <p className="leading-relaxed text-indigo-400 hover:underline">View Project:</p>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Project;
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              My Project&apos;s
            </h1>
          </div>
          <div className="flex flex-wrap -m-8">
            {/* Project */}
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={"/images/iphone.png"}
                  width={800}
                  height={800}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    E-Commerce Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    I-PHONE 14 PRO MAX
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    I built this iPhone website with Next.js and Tailwind CSS.
                  </p>
                  <Link target="_blank" href={"https://i-phone-store-e-commerce-website-5i7k.vercel.app"}>
                    <p className="leading-relaxed text-indigo-400 hover:underline">View Project:</p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={"/images/fb.png"}
                  width={800}
                  height={800}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    One Page Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    FACEBOOK CLONE PAGE
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    I built this Facebook Clone page with Next.js and Tailwind CSS.
                  </p>
                  <Link target="_blank" href={"https://next-js-facebook-page-clone.vercel.app"}>
                    <p className="leading-relaxed text-indigo-400 hover:underline">View Project:</p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={"/images/shopping.png"}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    E-Commerce Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Shopping Website
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    I built this E-Commerce Shopping Website with Next.js and Tailwind CSS.
                  </p>
                  <Link target="_blank" href={"https://e-commerce-shopping-website-albz.vercel.app"}>
                    <p className="leading-relaxed text-indigo-400 hover:underline">View Project:</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
