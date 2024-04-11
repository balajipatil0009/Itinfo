import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import courses from "../assets/topCourses.json";
const TopCourses = () => {
  return (
    <div>
      <div className="h-[10vh] bg-blue-500"></div>
      <CarouselProvider
        naturalSlideWidth={90}
        naturalSlideHeight={85}
        totalSlides={courses.length + 1}
        infinite
        isPlaying
        visibleSlides={4}
      >
        <Slider className=" h-min">
          {courses.map((item, index) => (
            <Slide index={index}>
              <div className=" bg-gray-100 w-[250px] rounded-xl border mt-[4px] py-4 mx-2">
                <img src="src\assets\main1.jpg" alt="alt" className="p-2" />
                <h1 className="font-semibold text-lg text-center">
                  data science
                </h1>
                <h3 className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Recusandae epellendus alias atque recusandae nulla.
                </h3>
              </div>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default TopCourses;
