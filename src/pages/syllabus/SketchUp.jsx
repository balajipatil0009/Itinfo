import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/DataSci.json";
import SyllCards from "../../componunts/SyllCards";

const SketchUp = () => {
  return (
    <>
      <div className="w-[100vw] h-auto">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-white">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Data Science
            </h1>
            <p className="w-[70vw] text-justify pt-5 hidden sm:flex">
              data scince will be 6 month course Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cum obcaecati cupiditate, odio a
              dolorem iure nam eos veritatis ipsa placeat nesciunt voluptates
              eaque, explicabo excepturi tempore sequi inventore fuga amet!
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

export default SketchUp;
