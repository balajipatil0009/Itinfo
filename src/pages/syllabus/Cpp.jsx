import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/cpp.json";
import SyllCards from "../../componunts/SyllCards";
const Cpp = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-white">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              C++
            </h1>
            <p className="w-[70vw] text-justify pt-5 hidden sm:flex">
              C++ is a general-purpose, object-oriented programming language
              that offers low-level memory manipulation, making it suitable for
              system programming, game development, and performance-critical
              applications. It combines high-level programming features with
              low-level control over memory and system resources.
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

export default Cpp;
