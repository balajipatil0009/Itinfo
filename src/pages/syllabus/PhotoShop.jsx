import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/PhotoShop.json";
import SyllCards from "../../componunts/SyllCards";
const PhotoShop = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto bg-[url('/logo.jpg')] bg-no-repeat bg-fixed bg-center">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200  to-tranferant ">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Adobe Photoshop
            </h1>
            <p className="w-[70vw] text-justify pt-5 hidden sm:flex">
              Adobe Photoshop is a powerful graphics editing software developed
              by Adobe Inc. It was first released in 1987 and has since become
              the go-to tool for photographers, graphic designers, digital
              artists, and other creatives. With Photoshop, users can create,
              edit, and enhance images with unparalleled precision and
              creativity1. It offers features like layers, masks, and various
              selection tools, making it an essential tool in the creative
              industry
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

export default PhotoShop;
