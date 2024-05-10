import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/Cyber.json";
import SyllCards from "../../componunts/SyllCards";

const Cyber = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-white">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Cyber Security
            </h1>
            <p className="w-[70vw] text-center font-sansLight pt-5 hidden sm:flex">
              The practice of protecting computer systems, networks, programs,
              and data from unauthorized access, theft, or damage. It involves
              implementing measures to prevent, detect, and respond to cyber
              threats and attacks, ensuring the confidentiality, integrity, and
              availability of digital assets.
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

export default Cyber;
