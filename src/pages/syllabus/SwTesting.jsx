import React from "react";
import data from "../../assets/syllabus/Swtesting.json";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import SyllCards from "../../componunts/SyllCards";
const SwTesting = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto bg-[url('/logo.jpg')] bg-no-repeat bg-fixed bg-center">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200  to-tranferant ">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Software Testing
            </h1>
            <p className="w-[70vw] text-center font-sansLight pt-5 hidden sm:flex">
              Software Testing is the process of evaluating software
              applications or systems to identify defects, verify functionality,
              and ensure quality and reliability. It involves various techniques
              and methodologies such as unit testing, integration testing,
              system testing, and user acceptance testing to ensure that the
              software meets specified requirements and performs as expected.
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

export default SwTesting;
