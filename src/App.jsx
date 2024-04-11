import React from "react";
import Navbar from "./componunts/Navbar";
import { ReactTyped } from "react-typed";
import "./App.css";
import TopCourses from "./componunts/TopCourses";
import Footer from "./componunts/Footer";

const App = () => {
  return (
    <div className=" max-w-[100vw] overflow-hidden">
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-gray-100 pt-1">
        <Navbar />
        <div
          id="tagLine"
          className=" w-[100vw] flex justify-center h-[80vh] items-center"
        >
          <div>
            <div className="text-3xl w-fit font-sansMedium font-semibold">
              <h2>With ITINFO</h2> <h2>Learn & become the Top 1%</h2>
              <h2 className=" text-sky-500"> software developer</h2>
            </div>

            <ReactTyped
              startWhenVisible
              loop
              strings={[
                "It info acaoruy sangli",
                "balaji patil",
                "It Info accadomy",
              ]}
              typeSpeed={40}
            />
          </div>
          <div className="w-[50%] h-full bg-[url(./assets/main1.jpg)] bg-cover Intro"></div>
        </div>
      </div>{" "}
      <div className="bg-sky-400 h-[20vh] items-center flex justify-center">
        <h1 className="text-3xl text-white font-sansMedium font-semibold">
          With ITINFO Learn & become the Top 1% software developer
        </h1>
      </div>
      <TopCourses />
      <TopCourses />
      <TopCourses />
      <Footer />
    </div>
  );
};

export default App;
