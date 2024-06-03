import React from "react";
import Navbar from "../componunts/Navbar";
import Footer from "../componunts/Footer";
import "../App.css";
import { GoGoal } from "react-icons/go";
import { GiStairsGoal, GiMustache } from "react-icons/gi";

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
      <div className="bg-[url('./girlLap.jpg')] h-[70vh] w-[99vw] bg-cover bg-center flex justify-end items-center">
        <div className="w-[55vw] text-justify flex flex-col gap-4">
          <div className="flex gap-3 w-[80%]">
            <GoGoal className="text-[60px]" />
            <p className="  font-sansLight">
              At ITINFO ACADEMY, our mission is to provide a dynamic learning
              environment that emphasizes hands-on experience, industry-aligned
              curriculum, and personalized learning paths.
            </p>
          </div>
          <div className="flex gap-3 w-[80%]">
            <GiStairsGoal className="text-[60px]" />
            <p className="  font-sansLight">
              We aim to cultivate a community of learners guided by expert
              faculty and industry connections, fostering a supportive ecosystem
              that nurtures individual growth and encourages exploration of
              emerging technologies.
            </p>
          </div>
          <div className="flex gap-3 w-[80%]">
            <GiMustache className="text-[60px]" />
            <p className="  font-sansLight">
              Through mentorship, certifications, and accreditation, we aspire
              to equip our students with the skills and mindset needed to thrive
              in the ever-changing IT landscape.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: "url('./gifRoad.gif')" }}
        className="h-[50vh] bg-no-repeat bg-center"
      >
        <p className=" text-center font-sansMedium text-[60px]">
          Let's Build Together
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Internship;
