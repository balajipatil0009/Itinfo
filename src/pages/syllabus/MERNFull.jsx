import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/MERNFull.json";
import SyllCards from "../../componunts/SyllCards";

const MERNFull = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto bg-[url('/logo.jpg')] bg-no-repeat bg-fixed bg-center">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200  to-tranferant ">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Website Development MERN Stack
            </h1>
            <p className="w-[70vw] text-center pt-5 font-sansLight hidden sm:flex">
              MERN Stack is a popular full-stack web development stack that
              combines MongoDB (a NoSQL database), Express.js (a web application
              framework for Node.js), React.js (a JavaScript library for
              building user interfaces), and Node.js (a JavaScript runtime
              environment for server-side programming).
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

export default MERNFull;
