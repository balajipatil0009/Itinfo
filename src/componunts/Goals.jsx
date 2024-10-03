import React from "react";
import "../App.css";
const Goals = () => {
  return (
    <div className="h-[80vh] w-[100vw] items-center bg-[#f7f7f7] md:bg-[url(/itinfo3.jpg)] bg-contain bg-no-repeat bg-center flex justify-center md:justify-normal md:grid md:pr-[10vw]">
      <div className="w-[80vw] h-[50%] md:w-[40vw] justify-self-end grid gap-4">
        <h1 className="text-center font-bold text-[7vh]">About Us</h1>
        <p className="text-center font-sansLight line-clamp-1">
          ITINFO Academy is your go-to destination for quality education and
          learning. Whether you are looking to enhance your skills, further your
          career, or simply learn something new, we have the resources and
          support you need to succeed. Choose ITINFO Academy for a
          transformative learning experience that will set you up for success in
          the future.
        </p>
      </div>
    </div>
  );
};

export default Goals;
