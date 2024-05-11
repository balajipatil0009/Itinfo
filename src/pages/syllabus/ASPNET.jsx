import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/AspNET.json";
import SyllCards from "../../componunts/SyllCards";

const ASPNET = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto bg-[url('/logo.jpg')] bg-no-repeat bg-fixed bg-center">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200  to-tranferant ">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              ASP.NET
            </h1>
            <p className="w-[70vw] text-justify pt-5 hidden sm:flex">
              ASP.NET is a Microsoft's server-side web application framework for
              building dynamic websites, web services, and web applications
              using .NET technologies. It provides a robust set of tools and
              libraries for developing secure, scalable, and high-performance
              web applications.
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

export default ASPNET;
