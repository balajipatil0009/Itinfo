import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/JavaScript.json";
import SyllCards from "../../componunts/SyllCards";

const JavaScript = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto bg-[url('/logo.jpg')] bg-no-repeat bg-fixed bg-center">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200  to-tranferant ">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              JavaScript
            </h1>
            <p className="w-[70vw] text-justify pt-5 hidden sm:flex">
              JavaScript is a high-level, interpreted programming language
              primarily used for adding interactivity, dynamics, and effects to
              web pages. It runs on the client-side (in web browsers) and
              server-side (with Node.js) and is essential for creating modern,
              responsive, and interactive web applications.
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

export default JavaScript;
