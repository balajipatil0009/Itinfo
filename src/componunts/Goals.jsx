import React from "react";
import "../App.css";
const Goals = () => {
  return (
    <div className="h-[80vh] w-[100vw] items-center bg-[#f7f7f7] md:bg-[url(/itinfo3.jpg)] bg-contain bg-no-repeat bg-center flex justify-center md:justify-normal md:grid md:pr-[10vw]">
      <div className="w-[80vw] md:w-[40vw] justify-self-end grid">
        <h1 className=" font-bold text-[7vh]">ITINFO Advantages</h1>
        {/* <p className="text-center font-sansLight line-clamp-1">
          ITINFO Academy is your go-to destination for quality education and
          learning. Whether you are looking to enhance your skills, further your
          career, or simply learn something new, we have the resources and
          support you need to succeed. Choose ITINFO Academy for a
          transformative learning experience that will set you up for success in
          the future.
        </p> */}
        <div className="flex p-8">
          <ul className=" list-disc">
            <li className=" p-1 text-lg">
              Affordable pricing with premium quality.
            </li>
            <li className=" p-1 text-lg">Flexible learning options.</li>
            <li className=" p-1 text-lg">Real-world project Experience.</li>
            <li className=" p-1 text-lg">Globally recognized certification.</li>
            <li className=" p-1 text-lg">
              Comprehensive support from start to end.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Goals;
