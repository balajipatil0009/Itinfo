import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/Adobe_Illustrator.json";
import SyllCards from "../../componunts/SyllCards";

const Adobe_Illustrator = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto bg-[url('/logo.jpg')] bg-no-repeat bg-fixed bg-center">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-transparent">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Adobe Illustrator
            </h1>
            <p className="w-[70vw] text-center font-sansLight pt-5 hidden sm:flex">
              Adobe Illustrator is a powerful vector graphics editor used for
              creating logos, illustrations, diagrams, and digital artwork. It
              allows designers to work with precise paths, shapes, and lines to
              produce highly scalable and resolution-independent graphics for
              print, web, video, and mobile applications. Illustrator's robust
              toolset, advanced typography features, and integration with other
              Adobe apps make it an industry-standard for professional graphic
              design.
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

export default Adobe_Illustrator;
