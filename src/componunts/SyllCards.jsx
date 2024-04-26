import React from "react";

const SyllCards = (props) => {
  const data = props.data;
  return (
    <div>
      {data.map((item, index) => (
        <div className="w-[100vw] flex md:justify-center m-0 p-0" key={index}>
          <div className="w-[90%] md:w-2/3">
            {index % 2 == 0 ? (
              <>
                {" "}
                {/* leftcard of syllabus */}
                <div className="grid ml-3 md:m-0">
                  <div className="h-fit w-full md:w-[50%] relative justify-self-end md:justify-self-start grid md:grid left-[-2]">
                    <div className="w-[95%] md:w-[80%] px-2 py-3 h-fit border rounded-lg mt-4 bg-gray-200 justify-self-end md:justify-self-start">
                      <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                        {item.title}
                      </h1>
                      <div className="w-full ml-[6%]">
                        <ul className="list-disc  w-[97%]">
                          {item.points.map((inItem, inIndex) => (
                            <li>{inItem}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="h-full w-[4px] bg-amber-400 absolute left-[-2px] md:left-auto  top-0 md:right-[-2px] "></div>
                    <div className="w-[18px] h-[18px] bg-blue-500 top-8 absolute left-[-9px] md:right-[-9px] md:left-auto rounded-full border-4 border-blue-500"></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {" "}
                {/* rightcard of syllabus */}
                <div className="grid ml-3 md:m-0 h-fit">
                  <div className="h-fit w-full md:w-[50%] relative justify-self-end grid">
                    <div className="w-[95%] md:w-[80%] mt-4 px-2 py-3 h-fit border rounded-lg bg-gray-200 justify-self-end">
                      <h1 className="w-[100%] px-6 bg-blue-500 p-1 rounded font-sansMedium">
                        {item.title}
                      </h1>
                      <div className="w-full ml-[6%]">
                        <ul className="list-disc  w-[97%]">
                          {item.points.map((inItem, inIndex) => (
                            <li>{inItem}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="h-full w-1 bg-amber-400 absolute top-0 left-[-2px]"></div>
                    <div className=" absolute w-[18px] h-[18px] bg-blue-500 top-8 left-[-9px] rounded-full border-4 border-blue-500"></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SyllCards;
