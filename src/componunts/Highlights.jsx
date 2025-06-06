import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import courses from "../assets/topCourses.json";

const Highlights = () => {
  return (
    <div className="hidden sm:block">
      <div className="h-[10vh] bg-blue-500"></div>
      <CarouselProvider
        naturalSlideWidth={90}
        totalSlides={courses.length + 1}
        visibleSlides={1}
        isPlaying
        infinite
      >
        <Slider className=" h-50vh] md:h-[80vh]">
          {courses.map((item, index) => (
            <Slide index={index} className=" h-[50vh] md:h-[80vh]" key={index}>
              <a href={item.path}>
                <div className="h-[50vh] md:h-[80vh] w-[100vw] flex justify-center">
                  <div className=" bg-gray-100 h-full w-10/12 rounded-xl border mt-[4px] py-4 mx-2">
                    <div className="w-full h-[95%] flex justify-center">
                      <a href={item.path}>
                        <img
                          src={item.img}
                          alt="alt"
                          className="p-2 h-full w-auto"
                        />
                      </a>
                    </div>
                    <h1 className="font-semibold text-lg text-center ">
                      {item.courseNm}
                    </h1>
                  </div>
                </div>
              </a>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default Highlights;
