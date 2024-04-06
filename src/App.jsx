import React from "react";
import Navbar from "./componunts/Navbar";
import { ReactTyped } from "react-typed";
import "./App.css";
import TopCourses from "./componunts/TopCourses";

const App = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-gray-100 pt-1  ">
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
      <div className="bg-gradient-to-rbg-gradient-to-t from-stone-50 to-yellow-300 h-[20vh] rounded-br-3xl rounded-tl-3xl mx-12 items-center flex justify-center">
        <h1 className="text-3xl font-sansMedium font-semibold bg-gradient-to-r from-sky-500  to-sky-200 bg-clip-text text-transparent">
          With ITINFO Learn & become the Top 1% software developer
        </h1>
      </div>
      <TopCourses />
    </>
  );
};

export default App;
