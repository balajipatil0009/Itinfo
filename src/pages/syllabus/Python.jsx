import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/python.json";
import SyllCards from "../../componunts/SyllCards";

const Python = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto bg-[url('/logo.jpg')] bg-no-repeat bg-fixed bg-center">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200  to-tranferant ">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Python
            </h1>
            <p className="w-[70vw] text-center pt-5 hidden sm:flex">
              Python is widely used for data analysis, machine learning, and web
              development. Its extensive libraries, such as NumPy, pandas, and
              scikit-learn, empower data scientists and engineers to build
              powerful applications. Whether you’re a beginner or an experienced
              developer, Python’s simplicity and versatility make it an
              excellent choice for various projects.
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

export default Python;
