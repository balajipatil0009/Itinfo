import React from "react";
import { MdOutlineCopyright } from "react-icons/md";
import { AiOutlineTrademark } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-amber-400 max-w-[100vw] font-sansLight">
      <div className="flex justify-center">
        <div>
          <h1 className="text-center">Contact US</h1>
          <div className="flex gap-5 w-fit">
            <div className="flex items-center gap-2">
              <BiLogoGmail className=" text-2xl" />
              <h1 className="w-fit ">Itinfo@gmail.com</h1>
            </div>
            <div className="flex items-center gap-2 w-fit">
              <FaPhoneAlt />

              <h1 className="w-fit">345678907890 / 345678909889</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center w-[99vw] justify-center mt-6 text-sm">
        <MdOutlineCopyright className=" text-gray-700" />
        All rights are reserved .
        <AiOutlineTrademark className=" text-gray-700" />
        <h1 className=" text-gray-900"> ITINFO</h1>
      </div>
    </div>
  );
};

export default Footer;
