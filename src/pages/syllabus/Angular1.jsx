import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/Angular.json";
import SyllCards from "../../componunts/SyllCards";

const Angular1 = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-white">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Angular
            </h1>
            <p className="w-[70vw] text-justify pt-5 hidden sm:flex">
              Angular is a TypeScript-based open-source web application
              framework, maintained by Google, for building modern, reactive,
              and scalable single-page applications (SPAs). It follows a
              component-based architecture and offers features like data
              binding, dependency injection, and modular structure.
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

export default Angular1;
