import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/Flutter.json";
import SyllCards from "../../componunts/SyllCards";

const Flutter = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-white">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Android Development using Flutter
            </h1>
            <p className="w-[70vw] text-center font-sansLight pt-5 hidden sm:flex">
              An open-source UI software development kit created by Google for
              building natively compiled applications for mobile, web, and
              desktop from a single codebase. It uses the Dart programming
              language and offers a reactive framework for creating
              high-performance, visually attractive, and natively compiled
              applications.
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

export default Flutter;
