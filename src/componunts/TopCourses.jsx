import React, { useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const TopCourses = (props) => {
  const courses = props.data;
  const [width, setWidth] = useState(window.innerWidth);
  const [visibleSclide, setVisibleSclides] = useState(4);

  const handleWidth = () => {
    if (width < 510) {
      setVisibleSclides(1);
    } else if (width < 983) {
      setVisibleSclides(2);
    } else {
      setVisibleSclides(4);
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    handleWidth();
  }, [window.innerWidth]);
  return (
    <div className="">
      <div className="h-[10vh] bg-blue-500"></div>
      <div className="pl-12 md:p-0">
        <div>
          <CarouselProvider
            naturalSlideWidth={90}
            totalSlides={courses.length + 1}
            infinite
            isPlaying
            visibleSlides={visibleSclide}
          >
            <Slider className=" h-[50vh] mt-3">
              {courses.map((item, index) => (
                <Slide
                  index={index}
                  className=" h-[70vh]"
                  key={index}
                  onClick={() => {
                    window.location = item.path;
                  }}
                >
                  <div
                    className=" bg-gray-100 w-[230px] min-h-[45vh] rounded-xl border mt-[4px] py-4 mx-2"
                    key={index}
                  >
                    <div
                      className="h-36 overflow-hidden m-2 rounded-md bg-center bg-cover"
                      style={{ backgroundImage: "url(" + item.img + ")" }}
                    ></div>
                    <h1 className="font-semibold text-lg text-center">
                      {item.courseNm}
                    </h1>
                    <h3 className="text-sm px-4 py-1 text-justify">
                      {item.discription}
                    </h3>
                  </div>
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
};

export default TopCourses;
