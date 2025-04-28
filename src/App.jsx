import { useRef } from 'react';
import { FaArrowRight, FaArrowLeft, FaArrowRight as FaArrowRightIcon } from 'react-icons/fa';
import heroImage from '/main3.jpg'; // Replace with your image path
import courseImage1 from '/langImages/c.jpg'; // Replace with your course image paths
import courseImage2 from '/langImages/cpp.jpg';
import courseImage3 from '/langImages/CSS.jpg';
import Navbar from "./componunts/Navbar"
import Footer from "./componunts/Footer"

const App = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <img src={heroImage} alt="ITINFO Academy" className="w-full h-[60vh] object-cover opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400">Welcome to ITINFO Academy</h1>
            <p className="text-lg md:text-xl mb-6">Empowering Future IT Professionals</p>
            <a
              href="/courses"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full hover:bg-yellow-500 transition"
            >
              Explore Courses <FaArrowRightIcon className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Expert Instructors</h3>
            <p className="text-blue-900">Learn from industry professionals with years of experience.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Hands-On Internships</h3>
            <p className="text-blue-900">Gain real-world experience through our internship programs.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Certified Courses</h3>
            <p className="text-blue-900">Earn recognized certifications to boost your career.</p>
          </div>
        </div>
      </section>

      {/* Course Cards Section with Horizontal Scroll */}
      <section className="py-16 px-4 md:px-16 bg-blue-50 relative">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Our Courses</h2>
        <div className="flex items-center justify-center">
          <button onClick={scrollLeft} className="absolute left-4 z-10 p-2 bg-yellow-400 rounded-full hover:bg-yellow-500 transition">
            <FaArrowLeft className="text-blue-900" />
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth space-x-6 pb-4 snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
          >
            {/* Course Card 1 */}
            <div className="min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden snap-start">
              <img src={courseImage1} alt="Course 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Web Development</h3>
                <p className="text-blue-900">Learn to build modern web applications with React and Node.js.</p>
                <a href="/courses/web-development" className="mt-4 inline-block text-yellow-400 hover:text-yellow-500 transition">
                  Learn More <FaArrowRightIcon className="inline ml-1" />
                </a>
              </div>
            </div>
            {/* Course Card 2 */}
            <div className="min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden snap-start">
              <img src={courseImage2} alt="Course 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Data Science</h3>
                <p className="text-blue-900">Master data analysis and machine learning with Python.</p>
                <a href="/courses/data-science" className="mt-4 inline-block text-yellow-400 hover:text-yellow-500 transition">
                  Learn More <FaArrowRightIcon className="inline ml-1" />
                </a>
              </div>
            </div>
            {/* Course Card 3 */}
            <div className="min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden snap-start">
              <img src={courseImage3} alt="Course 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Cybersecurity</h3>
                <p className="text-blue-900">Protect systems and networks from cyber threats.</p>
                <a href="/courses/cybersecurity" className="mt-4 inline-block text-yellow-400 hover:text-yellow-500 transition">
                  Learn More <FaArrowRightIcon className="inline ml-1" />
                </a>
              </div>
            </div>
            {/* Add more course cards as needed */}
          </div>
          <button onClick={scrollRight} className="absolute right-4 z-10 p-2 bg-yellow-400 rounded-full hover:bg-yellow-500 transition">
            <FaArrowRight className="text-blue-900" />
          </button>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default App;