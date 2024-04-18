import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="fixed  z-10 top-0 left-0 right-0 flex justify-around mx-[3%] px-1 rounded-xl py-2 text-sm font-semibold shadow-md shadow-gray-200 bg-gradient-to-r from-gray-50 to-gray-300 mt-2">
        <div>Home</div>
        <div className="flex justify-around w-[50%]">
          <h1>About us</h1>
          <a href="/courses">
            <h1>Courses</h1>
          </a>
          <h1>Media</h1>
          <h1>Gallery</h1>
          <h1>Franchise</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
