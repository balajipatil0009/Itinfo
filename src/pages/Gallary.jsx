import React from "react";
import Navbar from "../componunts/Navbar";
import Footer from "../componunts/Footer";

const Gallary = () => {
  return (
    <div className="w-[99vw] overflow-hidden">
      <Navbar />
      <div className="w-[99vw] overflow-hidden">
        <div className="h-[100vh] bg-[url('/itinfo/info17.jpeg')] bg-center bg-cover flex justify-center items-center ">
          <div className="h-full backdrop-blur-sm flex items-center">
            <h1 className="text-[10vw] font-Bank backdrop-blur-sm p-0 text-white">
              ITINFO ACADEMY
            </h1>
          </div>
        </div>
      </div>

      <div className=" relative h-auto ">
        <div className="h-[80vh] flex w-[99vw] overflow-hidden justify-center">
          <div className="w-[90vw]  relative flex gap-6">
            <div className="bg-[url('/itinfo/info1.jpeg')] bg-center bg-cover border-4 border-white rounded-xl h-[80%] w-1/2 absolute hover:z-10 hover:shadow-lg"></div>
            <div className=" h-full w-1/2">
              <div className="h-1/2 w-[40vw] bg-[url('/itinfo/info2.jpeg')] bg-center bg-cover border-4 border-white rounded-xl absolute right-7 hover:z-10 hover:shadow-lg"></div>
              <div className="h-3/5 w-[40vw] bg-[url('/itinfo/info4.jpeg')] bg-center bg-cover border-4 border-white absolute left-[35vw] bottom-5 rounded-xl"></div>
            </div>
          </div>
        </div>

        <div className="h-[80vh] flex w-[99vw] overflow-hidden justify-center">
          <div className="w-[90vw] relative flex gap-6">
            <div className="bg-[url('/itinfo/info6.jpeg')] bg-center bg-cover border-4 border-white rounded-xl h-[80%] w-1/2 absolute hover:z-10 hover:shadow-lg"></div>
            <div className=" h-full w-1/2">
              <div className="h-1/2 w-[40vw] bg-[url('/itinfo/info8.jpeg')] bg-center bg-cover border-4 border-white rounded-xl absolute right-7 hover:z-10 hover:drop-shadow-lg"></div>
              <div className="h-3/5 w-[40vw] bg-[url('/itinfo/info12.jpeg')] bg-center bg-cover border-4 border-white absolute left-[35vw] bottom-5 rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="h-[80vh] flex w-[99vw] overflow-hidden justify-center">
          <div className="w-[90vw] overflow-hidden relative flex gap-6">
            <div className="bg-[url('/itinfo/info5.jpeg')] bg-center bg-cover border-4 border-white rounded-xl h-[80%] w-1/2 absolute hover:z-10 hover:shadow-lg"></div>
            <div className=" h-full w-1/2">
              <div className="h-1/2 w-[40vw] bg-[url('/itinfo/info10.jpeg')] bg-center bg-cover border-4 border-white rounded-xl absolute right-7 hover:z-10 hover:drop-shadow-lg"></div>
              <div className="h-3/5 w-[40vw] bg-[url('/itinfo/info16.jpeg')] bg-center bg-cover border-4 border-white absolute left-[35vw] bottom-5 rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="h-[80vh] flex w-[99vw] overflow-hidden justify-center">
          <div className="w-[90vw] relative flex gap-6">
            <div className="bg-[url('/itinfo/info13.jpeg')] bg-center bg-cover border-4 border-white rounded-xl h-[80%] w-1/2 absolute hover:z-10 hover:shadow-lg"></div>
            <div className=" h-full w-1/2">
              <div className="h-1/2 w-[40vw] bg-[url('/itinfo/info12.jpeg')] bg-center bg-cover border-4 border-white rounded-xl absolute right-7 hover:z-10 hover:drop-shadow-lg"></div>
              <div className="h-3/5 w-[40vw] bg-[url('/itinfo/info15.jpeg')] bg-center bg-cover border-4 border-white absolute left-[35vw] bottom-5 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallary;
