import React from "react";

const Footer = () => {
  return (
    <div className=" bg-amber-400 h-[80vh] flex flex-col md:flex-row p-10">
      <div className="md:w-1/4 flex items-center">
        <div className="w-full">
          <img
            src="/main1.jpg"
            alt="logo"
            className="Intro h-32 justify-self-center"
          />
          <h1 className="text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            hic! Expedita!
          </h1>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="w-1/4">
          <h1 className="font-bold">HELPFUL LINKS</h1>
        </div>
        <div className="w-1/4">
          <h1 className="font-bold">GET IN TOUCH</h1>
        </div>
        <div className=" w-1/4">
          <h1 className="font-bold">CONNECT WITH US</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
