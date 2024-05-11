import React from "react";
import Navbar from "../../componunts/Navbar";
import Footer from "../../componunts/Footer";
import data from "../../assets/syllabus/Ethical.json";
import SyllCards from "../../componunts/SyllCards";

const Ehical = () => {
  return (
    <>
      <div className="max-w-[100vw] h-auto bg-[url('/logo.jpg')] bg-no-repeat bg-fixed bg-center">
        <Navbar />
        <div className="w-full min-h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200  to-tranferant ">
          <div className=" mt-16 sm:mt-12 md:m-0">
            <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
              Ethical Hacking
            </h1>
            <p className="w-[70vw] text-center font-sansLight pt-5 hidden sm:flex">
              Ethical Hacking is a authorized and legal practice of attempting
              to gain access to computer systems, networks, or applications to
              identify potential vulnerabilities and weaknesses. Ethical hackers
              use their skills and knowledge to help organizations improve their
              security posture and prevent malicious attacks.
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

export default Ehical;
