import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/react.json";
import SyllCards from "../../componunts/SyllCards";

const React1 = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto bg-[url('/logo.jpg')] bg-no-repeat bg-fixed bg-center">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200  to-tranferant ">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              ReactJs
            </h1>
            <p className="w-[70vw] text-center pt-5 hidden sm:flex">
              React is an open-source JavaScript library used to build user
              interface (UI) components for single-page applications. Originally
              created by Facebook, React streamlines app development, improves
              performance, and simplifies code maintenance
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

export default React1;
