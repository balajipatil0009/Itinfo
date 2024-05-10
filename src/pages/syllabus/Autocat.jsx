import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/Autocat.json";
import SyllCards from "../../componunts/SyllCards";

const Autocat = () => {
  return (
    <>
      {" "}
      <div className="max-w-[100vw] h-auto">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-white">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              AutoCAD
            </h1>
            <p className="w-[70vw] text-justify pt-5 hidden sm:flex">
              AutoCAD is a computer-aided design (CAD) software used for 2D and
              3D drafting, design, and modeling in various industries like
              architecture, engineering, construction, and manufacturing. It
              offers precise object creation, editing, and annotation tools for
              professional technical drawing and documentation.
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

export default Autocat;
