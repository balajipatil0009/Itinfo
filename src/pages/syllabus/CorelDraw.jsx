import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/CorelDraw.json";
import SyllCards from "../../componunts/SyllCards";

const CorelDraw = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-white">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              CorelDRAW
            </h1>
            <p className="w-[70vw] text-justify pt-5 hidden sm:flex">
              CorelDRAW is a vector graphics editor and design software suite
              for creating logos, illustrations, diagrams, and page layouts. It
              provides a comprehensive toolset for professional graphic design,
              with specialized tools for typography, photo editing, and website
              creation.
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

export default CorelDraw;
