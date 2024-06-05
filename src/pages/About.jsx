import React from "react";
import Navbar from "../componunts/Navbar";
import Footer from "../componunts/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <Navbar />
      <div className="w-[99vw] overflow-hidden">
        <div className="h-[100vh] bg-[url('./itinfo/info17.jpeg')] bg-center bg-cover flex justify-center items-center ">
          <div className="h-full backdrop-blur-sm flex items-center">
            <h1 className="text-[10vw] font-Bank backdrop-blur-sm p-0 text-white">
              ITINFO ACADEMY
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
