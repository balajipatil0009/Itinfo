import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/node.json";
import SyllCards from "../../componunts/SyllCards";

const Node1 = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto bg-[url('/logo.jpg')] bg-no-repeat bg-fixed bg-center">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200  to-tranferant ">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Node.js
            </h1>
            <p className="w-[70vw] text-center pt-5 hidden sm:flex">
              Node.js is an open-source, cross-platform JavaScript runtime
              environment that executes JavaScript code outside of a web
              browser1. Unlike a language or a framework, Node.js provides an
              environment for writing server-side applications using JavaScript.
              It’s built on Chrome’s V8 JavaScript engine, which ensures
              efficient execution and scalability. Developers use Node.js for
              tasks like building APIs, handling real-time data, and creating
              web servers.
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

export default Node1;
