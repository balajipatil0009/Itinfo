import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/MongoDB.json";
import SyllCards from "../../componunts/SyllCards";

const MongoDB = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto bg-[url('/logo.jpg')] bg-no-repeat bg-fixed bg-center">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200  to-tranferant ">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              MongoDB
            </h1>
            <p className="w-[70vw] text-justify pt-5 hidden sm:flex">
              MongoDB is a NoSQL database that stores data in a
              document-oriented format (BSON). Developed in C++, it’s designed
              for scalability and handling large amounts of unstructured data.
              In MongoDB, a document is a collection of key-value pairs, where
              keys are strings (field names) and values can be various data
              types like strings, numbers, arrays, boolean values, dates, or
              even nested documents.
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

export default MongoDB;
