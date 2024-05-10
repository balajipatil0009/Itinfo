import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/DataSci.json";
import SyllCards from "../../componunts/SyllCards";

const DataSci = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-white">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Data Science
            </h1>
            <p className="w-[70vw] text-center font-sansLight pt-5 hidden sm:flex">
              Data science is an interdisciplinary field that combines
              statistical and computational methods, along with domain
              knowledge, to extract insights and knowledge from structured and
              unstructured data. It encompasses techniques and theories from
              various fields such as mathematics, statistics, computer science,
              and domain-specific knowledge to uncover patterns, make
              predictions, and support decision-making processes.
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

export default DataSci;
