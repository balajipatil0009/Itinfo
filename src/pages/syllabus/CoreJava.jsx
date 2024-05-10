import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/coreJava.json";
import SyllCards from "../../componunts/SyllCards";

const CoreJava = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-white">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Core Java
            </h1>
            <p className="w-[70vw] text-justify pt-5 hidden sm:flex">
              The core features and libraries of the Java programming language,
              including the Java Virtual Machine (JVM), language syntax,
              object-oriented programming concepts, and essential APIs for
              building robust, cross-platform applications and systems.
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

export default CoreJava;
