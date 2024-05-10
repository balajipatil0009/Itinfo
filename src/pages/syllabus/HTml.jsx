import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/HTML.json";
import SyllCards from "../../componunts/SyllCards";

const HTml = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-white">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              HTML (HyperText Markup Language)
            </h1>
            <p className="w-[70vw] text-justify pt-5 hidden sm:flex">
              HTML (HyperText Markup Language) is a standard markup language for
              creating and structuring content on the World Wide Web. It
              provides a set of elements and tags for defining headings,
              paragraphs, links, images, and other components that make up web
              pages.
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

export default HTml;
