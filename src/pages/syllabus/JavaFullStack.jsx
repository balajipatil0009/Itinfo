import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import SyllCards from "../../componunts/SyllCards";
import data from "../../assets/syllabus/fullJava.json";
const JavaFullStack = () => {
  return (
    <div>
      <div className="max-w-[100vw] h-auto bg-[url('/logo.jpg')] bg-no-repeat bg-center Intro bg-fixed">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-transparent">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Java Full Stack
            </h1>
            <p className="w-[70vw] text-center font-sansLight pt-5 hidden sm:flex">
              Java Full Stack a comprehensive approach to web development using
              Java as the programming language and the Spring framework for
              building enterprise-level applications. It encompasses front-end
              development, back-end server-side programming, database
              integration, and deployment, providing a robust and scalable
              solution for full-stack web applications.
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
    </div>
  );
};

export default JavaFullStack;
