import Navbar from "../componunts/Navbar";
import JobRoles from "../assets/catagoryCourses/JobCourses.json";
import Footer from "../componunts/Footer";
import CoursesOpns from "../componunts/CoursesOpns";
import LangCourses from "../assets/catagoryCourses/langCourses.json";
import other from "../assets/catagoryCourses/graphic.json";

const Courses = () => {
  return (
    <div className="max-w-[100vw] overflow-hidden bg-[url('/logo.jpg')] bg-no-repeat bg-fixed bg-center">
      <Navbar />
      <div className=" max-w-[99vw] overflow-hidden h-[50vh] flex items-center  justify-center bg-gradient-to-b from-yellow-400 via-yellow-200 to-tranferant  relative py-4">
        <div className="w-full border flex justify-center border-b-gray-500 border-x-0 border-t-0 static h-full items-center">
          <h1 className=" font-sansMedium  text-center text-3xl font-bold w-full">
            Courses Provoided by Us
          </h1>
          <h1
            className="w-fit h-fit absolute bottom-0 border border-gray-500 px-3 py-1 rounded-md bg-white"
            id="job"
          >
            Job Role based Courses
          </h1>
        </div>
      </div>
      <div className=" h-fit pb-4 relative">
        <div className="w-[99vw] flex justify-center static border border-x-0 border-t-0 border-gray-700 pt-4 pb-8">
          <CoursesOpns data={JobRoles} />

          <h1 className="w-fit h-fit absolute bottom-0 border border-gray-500 px-3 py-1 rounded-md bg-white">
            Language Bases Courses
          </h1>
        </div>
      </div>
      <div className=" h-fit pb-4 relative">
        <div className="w-[99vw] flex justify-center static border border-x-0 border-t-0 border-gray-700 pt-4 pb-8">
          <CoursesOpns data={LangCourses} />
          <h1
            className="w-fit h-fit absolute bottom-0 border border-gray-500 px-3 py-1 rounded-md bg-white"
            id="other"
          >
            Other tech Courses
          </h1>
        </div>
      </div>
      <div className="mb-7">
        <div className="w-[99vw] flex justify-center static pt-4">
          <CoursesOpns data={other} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
