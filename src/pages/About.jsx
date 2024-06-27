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
      <div className="p-6 bg-slate-100 p-6">
        <div>
          <u>
            <h1 className="text-4xl">OUR VISION</h1>
          </u>
          <p className="p-6 w-[60vw] text-justify">
            &nbsp;&nbsp;&nbsp;&nbsp;To become a globally recognized institution
            empowering individuals with comprehensive knowledge and expertise in
            cutting-edge information technology, fostering innovation, and
            preparing them for successful careers in a rapidly evolving digital
            landscape.
          </p>
        </div>
        <div className=" flex justify-end bg-slate-100 p-6">
          <div className=" right-4">
            <u>
              <h1 className="text-4xl text-right">OUR MISSION</h1>
            </u>
            <p className="p-6 w-[60vw] text-justify">
              &nbsp;&nbsp;&nbsp;&nbsp; At ITINFO ACADEMY, our mission is to
              provide a dynamic learning environment that emphasizes hands-on
              experience, industry-aligned curriculum, and personalized learning
              paths. We aim to cultivate a community of learners guided by
              expert faculty and industry connections, fostering a supportive
              ecosystem that nurtures individual growth and encourages
              exploration of emerging technologies. Through mentorship,
              certifications, and accreditation, we aspire to equip our students
              with the skills and mindset needed to thrive in the ever-changing
              IT landscape.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
