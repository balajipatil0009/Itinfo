import React from "react";

import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/cSyl.json";
import SyllCards from "../../componunts/SyllCards";

const Csyl = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-white">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              C
            </h1>
            <p className="w-[70vw] text-justify pt-5 hidden sm:flex">
              C is a high-level, procedural programming language with low-level
              capabilities for system programming and operating system
              development. It is widely used for writing system software,
              compilers, and embedded applications due to its efficiency,
              portability, and direct access to memory and hardware resources.
            </p>
          </div>
        </div>
        <div>
          <SyllCards data={data} />
        </div>
        <div className="mt-6">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Csyl;
