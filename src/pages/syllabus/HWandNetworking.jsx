import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/HWandNetworking.json";
import SyllCards from "../../componunts/SyllCards";

const HWandNetworking = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-white">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Hardware and Networking
            </h1>
            <p className="w-[70vw] text-center font-sansLight pt-5 hidden sm:flex">
              Hardware and Networking a study and implementation of computer
              hardware components, such as processors, memory, storage devices,
              and input/output devices, as well as the technologies and
              protocols involved in connecting computers and devices into
              networks for data communication and resource sharing.
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

export default HWandNetworking;
