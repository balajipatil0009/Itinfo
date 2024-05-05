import React from "react";
import "../App.css";
const Goals = () => {
  return (
    <div className="h-[90vh] w-[100vw] flex items-center justify-center bg-gray-300">
      <div>
        <div className="w-[100vw] flex flex-col md:flex-row justify-evenly items-center gap-0 md:gap-3">
          <div className="w-[80vw] md:w-[40vw]  h-[40vh] bg-cover bg-[url('women.jpeg')] bg-center"></div>
          <div className="w-[80vw] md:w-[40vw]">
            <h1 className="text-center">About Us</h1>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
              quia. Hic perferendis repellendus magnam facilis ab maxime, ex,
              cupiditate, harum id recusandae eligendi accusamus reiciendis
              rerum ratione neque laudantium! Totam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
