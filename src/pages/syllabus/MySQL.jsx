import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/Mysql.json";
import SyllCards from "../../componunts/SyllCards";

const MySQL = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto bg-[url('/logo.jpg')] bg-no-repeat bg-fixed bg-center">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200  to-tranferant ">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              MySQL{" "}
            </h1>
            <p className="w-[70vw] text-justify pt-5 hidden sm:flex">
              MySQL is an open-source relational database management system
              (RDBMS) known for its reliability, scalability, and high
              performance. The DESCRIBE TABLE command in MySQL retrieves
              information about a table’s structure, such as column details,
              nullability, and key constraints
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

export default MySQL;
