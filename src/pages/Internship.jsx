import React from "react";
import Navbar from "../componunts/Navbar";
import Footer from "../componunts/Footer";
import "../App.css";

const Internship = () => {
  return (
    <>
      <Navbar />
      <div className="h-[80vh]  m-0">
        <div className="bg-no-repeat bg-center bg-cover bg-[url('/mainImg2.jpg')] h-full Intro ">
          <div className="flex justify-center items-center w-1/2 md:w-[60vw] h-full ">
            <div className="border border-l-2 py-6 border-x-0 border-y-0 border-black font-sansbold text-4xl cshadow bg-gradient-to-r from-slate-200 to-white">
              <p className=" bg-orange-400 text-white pl-1">
                Improve your Skills with
              </p>
              <p className=" text-4xl font-sansMedium text-white bg-sky-300 w-fit pr-4 pl-1">
                ITINFO
              </p>
              <p className=" font-sansMedium bg-yellow-300 text-white pl-1">
                Create industry greade projects
              </p>
              <p className=" bg-indigo-400 w-fit pr-3 pl-1">
                In industrial Envoirement
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('./girlLap.jpg')] h-[80vh] w-[100vw] bg-cover bg-center"></div>
      <div>
        <p className=" text-center font-sansMedium text-[60px]">
          Let's Build Together
        </p>
        <div className="w-[100vw] flex justify-center">
          <img src="./gifRoad.gif" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Internship;
