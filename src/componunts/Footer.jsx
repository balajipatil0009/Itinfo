import React from "react";
import { MdOutlineCopyright } from "react-icons/md";
import { AiOutlineTrademark } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-amber-400 max-w-[100vw] sm:flex h-auto justify-evenly font-sansLight p-6">
      <div>
        <h1 className="text-sm font-semibold text-white mb-5">
          STUDENT CARE CENTER
        </h1>
        <img
          src="./itinfo/help.jpeg"
          alt="help logo"
          className="h-[130px] rounded"
        />
        <h1 className="text-xs font-semibold text-black  mt-5">
        8830257210 | 8007633732
        </h1>
      </div>
      <div className=" my-6">
        <h1 className=" font-extrabold text-white">COMPANY</h1>
        <a href="/about">
          <h1 className="pl-2 mt-2 text-white ">About</h1>
        </a>
        <a href="https://www.instagram.com/itinfoacademy?igsh=ZHRoYWN2d3o1aWdi">
          <h1 className="pl-2 mt-2 text-white ">Instagram</h1>
        </a>
        <a href="https://www.linkedin.com/in/itinfo-academy-aa05a02a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <h1 className="pl-2 mt-2 text-white ">LinkedIn</h1>
        </a>
        <a href="https://www.facebook.com/share/ciPrf9ixUD4eeeeT/">
          <h1 className="pl-2 mt-2 text-white ">Facebook</h1>
        </a>
        <a href="https://wa.me/918830257210">
          <h1 className="pl-2 mt-2 text-white ">Whatsapp</h1>
        </a>
      </div>

      <div>
        <h1 className=" font-extrabold text-white">CAREER COURSES</h1>

        <a href="/courses">
          <h1 className="pl-2 mt-2 text-white ">Job Role Courses</h1>
        </a>
        <a href="/courses/#other">
          <h1 className="pl-2 mt-2 text-white ">Language Courses</h1>
        </a>
        <a href="/courses/#other">
          <h1 className="pl-2 mt-2 text-white ">Other Tech Courses</h1>
        </a>
      </div>
      {/* <div>
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
          <div>
            
          </div>
        </div>

        <div className="flex items-center w-[70vw] justify-center mt-6 text-sm">
          <MdOutlineCopyright className=" text-gray-700" />
          All rights are reserved .
          <AiOutlineTrademark className=" text-gray-700" />
          <h1 className=" text-gray-900"> ITINFO</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
