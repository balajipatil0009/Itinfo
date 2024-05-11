import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/css.json";
import SyllCards from "../../componunts/SyllCards";

const CSS = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto bg-[url('/logo.jpg')] bg-no-repeat bg-fixed bg-center">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200  to-tranferant ">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              CSS
            </h1>
            <p className="w-[70vw] text-justify pt-5 hidden sm:flex">
              CSS (Cascading Style Sheets) is a stylesheet language used for
              describing the presentation and styling of web pages, including
              colors, layouts, fonts, and other visual aspects. It works in
              tandem with HTML to separate content from presentation, enabling
              consistent and visually appealing web design.
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

export default CSS;
