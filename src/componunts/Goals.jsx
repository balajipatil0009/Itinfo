import React from "react";
import "../App.css";
const Goals = () => {
  return (
    <div className="h-[80vh] w-[100vw] items-center bg-[#f7f7f7] bg-[url(./itinfo3.jpg)] bg-contain bg-repeat-space flex justify-center md:justify-normal md:grid md:pr-[10vw]">
      <div className="w-[80vw] h-[50%] md:w-[40vw] justify-self-end grid gap-4">
        <h1 className="text-center font-bold text-[7vh]">About Us</h1>
        <p className="text-center font-sansLight line-clamp-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, quia.
          Hic perferendis repellendus magnam facilis ab maxime, ex, cupiditate,
          harum id recusandae eligendi accusamus reiciendis rerum ratione neque
          laudantium! Totam.
        </p>
      </div>
    </div>
  );
};

export default Goals;
