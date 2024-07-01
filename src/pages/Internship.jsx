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
          <div className="flex justify-center items-center w-full sm:w-3/4 md:w-[60vw] h-full ">
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
        <div className="md:w-[55vw] text-justify flex flex-col gap-4">
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
        className="h-[50vh] bg-no-repeat bg-center hidden md:block"
      >
        <p className=" text-center font-sansMedium text-[60px]">
          Let's Build Together
        </p>
      </div>
      <div className="flex justify-center mb-8">
        <div className="w-[70vw]">
          <h1 className="text-2xl font-bold mb-4">
            Empowering the Next Generation of IT Professionals
          </h1>
          <h2 className="text-xl font-bold m-2">About ITInfo Academy:</h2>
          <p className="m-2">
            ITInfo Academy is a leader in IT training and professional
            development, committed to nurturing talent and driving innovation in
            the information technology industry. With a strong commitment to
            quality education and hands-on experience, we offer a wide range of
            courses designed to prepare students for the demands of the
            technology industry.
          </p>
          <h2 className="text-xl font-bold m-2">
            Internship Program Overview:
          </h2>
          <p className="m-2">
            ITInfo Academy is pleased to offer a comprehensive internship
            program aimed at providing students and recent graduates with work
            experience, industry knowledge, and professional growth
            opportunities. Our internships are designed to bridge the gap
            between classroom learning and real-world application, ensuring
            participants are well prepared for a successful career in the IT
            field.
          </p>

          <div>
            <h1 className="text-2xl font-bold">Eligibility Criteria:</h1>
            <ul className=" list-disc m-2 mx-4">
              <li>
                Currently enrolled in or a recent graduate of a relevant degree
                program (Computer Science, Information Technology, Engineering,
                etc.).
              </li>
              <li>
                Strong academic performance and a demonstrated interest in IT.
              </li>
              <li>
                Basic knowledge of programming languages, software development
                or other appropriate skills.
              </li>
              <li>
                Great abilities to solve problems and a preemptive attitude.
              </li>
              <li>Good communication skills and ability to work in a team.</li>
            </ul>
            <h1 className="text-2xl font-bold">Program Duration :</h1>
            <p className="m-2">1 Months, 3 months & 6 Months</p>
            <h1 className="text-2xl font-bold">Online Mode Available</h1>
            <p className="m-2">
              Location: Near Kranti Hotel Blue sapphire Building Second Floor
              Sangli-Miraj road Sangli.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Internship;
