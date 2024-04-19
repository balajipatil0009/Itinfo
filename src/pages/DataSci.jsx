import React from "react";
import Navbar from "../componunts/Navbar";
import Footer from "../componunts/Footer";

const DataSci = () => {
  return (
    <div className="w-[100vw] h-auto">
      <Navbar />
      <div className="w-full h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-white">
        <div>
          <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
            data science
          </h1>
          <p className="w-[70vw] text-justify pt-5">
            data scince will be 6 month course Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cum obcaecati cupiditate, odio a
            dolorem iure nam eos veritatis ipsa placeat nesciunt voluptates
            eaque, explicabo excepturi tempore sequi inventore fuga amet!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataSci;
