import React from "react";
import Navbar from "../componunts/Navbar";
import Footer from "../componunts/Footer";

const SwTesting = () => {
  return (
    <div className="w-[100vw] h-auto">
      <Navbar />
      <div className="w-full h-[40vh] flex justify-center items-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-white">
        <div>
          <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
            Software Testing
          </h1>
          <p className="w-[70vw] text-justify pt-5">
            data scince will be 6 month course Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cum obcaecati cupiditate, odio a
            dolorem iure nam eos veritatis ipsa placeat nesciunt voluptates
            eaque, explicabo excepturi tempore sequi inventore fuga amet!
          </p>
        </div>
      </div>
      <div className="w-[100vw] flex justify-center">
        <div className=" w-2/3 min-h-48">
          <div className="grid">
            <div className="h-40 w-[50%] relative">
              <div className="w-[80%] px-2 py-3 h-full border rounded-lg bg-gray-200">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded">
                  balaji
                </h1>
              </div>
              <div className="h-full w-[4px] bg-amber-400 absolute top-0 right-[-2px] rounded-t-full"></div>
              <div className=" absolute  w-[18px] h-[18px] bg-blue-500 top-4 right-[-9px] rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
          <div className="grid">
            <div className="h-40 w-[50%] relative justify-self-end grid">
              <div className="w-[80%] px-2 py-3 h-full border rounded-lg bg-gray-200 justify-self-end">
                <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded">
                  balaji
                </h1>
              </div>

              <div className="h-full w-1 bg-amber-400 absolute top-0 left-[-2px]"></div>
              <div className=" absolute w-[18px] h-[18px] bg-blue-500 top-4 left-[-9px] rounded-full border-4 border-blue-500"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SwTesting;
