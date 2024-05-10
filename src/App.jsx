import React, { lazy } from "react";
import Navbar from "./componunts/Navbar";
import { ReactTyped } from "react-typed";
import "./App.css";
import TopCourses from "./componunts/TopCourses";
import Footer from "./componunts/Footer";
import Highlights from "./componunts/Highlights";
import Goals from "./componunts/Goals";
import courses from "./assets/topCourses.json";
import toplang from "./assets/topLangCourses.json";

const App = () => {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <div className="bg-gradient-to-r from-yellow-500 via-yellow-100 to-gray-100 pt-1">
        <Navbar />
        <div
          id="tagLine"
          className=" w-[100vw] flex justify-center h-[60vh] md:h-[80vh] md:bg-[url(/main3.jpg)] bg-cover bg-right items-center Intro"
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
          <div className="w-1/3"></div>
        </div>
      </div>
      <div className="bg-sky-400 hidden h-[20vh] items-center md:flex justify-center">
        <h1 className="text-3xl text-white font-sansMedium font-semibold">
          With ITINFO Learn & become the Top 1% software developer
        </h1>
      </div>
      <TopCourses data={courses} />
      <TopCourses data={toplang} />
      <Goals />
      <Highlights />
      <Footer />
    </div>
  );
};

export default App;
