import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/Adobe_InDesign.json";
import SyllCards from "../../componunts/SyllCards";
const Adobe_InDesign = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto bg-[url('/logo.jpg')] bg-no-repeat bg-fixed bg-center">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200  to-tranferant ">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Adobe InDesign
            </h1>
            <p className="w-[70vw] text-justify pt-5 hidden sm:flex">
              Adobe InDesign is a desktop publishing and typesetting software
              used for creating posters, brochures, magazines, newspapers, and
              books. It provides precise control over typography and allows
              efficient layout design with advanced tools for working with text
              and images.
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

export default Adobe_InDesign;
