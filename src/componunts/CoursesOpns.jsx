import React from "react";

const CoursesOpns = (props) => {
  const data = props.data;
  return (
    <div className="mt-6 grid grid-cols-4 gap-5 pb-3">
      {data.map((item, index) => (
        <a href={item.path}>
          <div
            key={index}
            className="border text-center border-gray-600 p-2 rounded-md"
          >
            <h1>{item.name}</h1>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CoursesOpns;
