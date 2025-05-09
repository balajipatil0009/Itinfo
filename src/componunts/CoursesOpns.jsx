const CoursesOpns = (props) => {
  const data = props.data;
  return (
    <div className="mt-6 grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 pb-3 ">
      {data.map((item, index) => (
        <a href={item.path}>
          <div
            key={index}
            className="border text-center border-gray-600 p-2 rounded-md min-w-[90vw] sm:min-w-56 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/50 hover:border-none"
          >
            <h1>{item.name}</h1>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CoursesOpns;
