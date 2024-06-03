import React, { useRef, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const options = useRef();
  const dots = useRef();
  const cross = useRef();

  const [hide, setHide] = useState(1);
  const handleclick = () => {
    if (hide == 1) {
      options.current.classList.remove("hidden");
      cross.current.classList.remove("hidden");
      dots.current.classList.add("hidden");
      setHide(0);
    } else {
      options.current.classList.add("hidden");
      cross.current.classList.add("hidden");
      dots.current.classList.remove("hidden");
      setHide(1);
    }
  };

  return (
    <div className="fixed z-10 top-0 left-0 right-0 grid w-[100vw] md:flex justify-left">
      <div className="grid w-[95%]">
        <div className=" flex justify-around md:justify-around mx-[3%] px-1 rounded-xl py-2 text-sm font-semibold shadow-md shadow-gray-200 bg-gradient-to-r from-gray-50 to-gray-300 mt-2 items-center w-full">
          <div className="w-1/2 md:w-1/3">
            {" "}
            <img src="/logo.jpg" alt="ITINFO" className="max-h-[5vh]" />
          </div>
          <div className="flex flex-col md:w-1/2">
            <div className="flex">
              <div className="md:hidden" ref={dots}>
                <SlOptionsVertical onClick={handleclick} size={17} />
              </div>
              <div className="hidden md:hidden" ref={cross}>
                <RxCross2 size={20} onClick={handleclick} />
              </div>
            </div>
            <div className=" hidden md:flex justify-evenly w-full">
              <a href="/about">
                <h1 className="p-2 hover:bg-white rounded-md">About us</h1>
              </a>
              <a href="/courses">
                <h1 className="p-2 hover:bg-white rounded-md">Courses</h1>
              </a>
              <a href="/internShips">
                <h1 className="p-2 hover:bg-white rounded-md">Internship</h1>
              </a>
              <a href="/gallary">
                <h1 className="p-2 hover:bg-white rounded-md">Gallery</h1>
              </a>
              <h1 className="p-2 hover:bg-white rounded-md">Franchise</h1>
            </div>
          </div>
        </div>
        <div
          className="hidden flex-col md:hidden justify-self-end mr-[5vw] w-[30%] sm:w-[20%] pt-3 bg-gray-200 p-2 rounded-md gap-1"
          ref={options}
        >
          <a href="/about">
            <h1 className="p-1 hover:bg-white rounded-md">About us</h1>
          </a>
          <a href="/courses">
            <h1 className="p-1 hover:bg-white rounded-md">Courses</h1>
          </a>
          <a href="/internShips">
            <h1 className="p-1 hover:bg-white rounded-md">Internship</h1>
          </a>
          <h1 className="p-1 hover:bg-white rounded-md">Gallery</h1>
          <h1 className="p-1 hover:bg-white rounded-md">Franchise</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
