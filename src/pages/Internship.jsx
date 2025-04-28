import React from 'react';
import { 
  FaRocket, 
  FaInfoCircle, 
  FaCheckCircle, 
  FaClock, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaInstagram, 
  FaLinkedin, 
  FaFacebook, 
  FaWhatsapp, 
  FaCode, 
  FaLanguage, 
  FaLaptopCode 
} from 'react-icons/fa';
import internshipHeroImage from "/itinfo3.jpg"; // Adjust path based on your project structure
import Navbar from "../componunts/Navbar"

// Reusable Section component
const Section = ({ id, icon: Icon, title, children, bgClass = 'bg-white' }) => (
  <section id={id} className={`py-16 px-4 md:px-16 ${bgClass}`}>
    <div className="container mx-auto">
      <div className="text-center mb-8">
        <Icon className="text-yellow-400 text-4xl mx-auto animate-bounce" />
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

// Eligibility Criteria Card
const EligibilityCard = ({ criteria }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <FaCheckCircle className="text-yellow-400 text-2xl mb-2" />
    <p className="text-blue-900">{criteria}</p>
  </div>
);

// Program Detail Card
const ProgramDetailCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <Icon className="text-yellow-400 text-4xl mb-4" />
    <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
    <p className="text-blue-900">{description}</p>
  </div>
);

// Social Media Link
const SocialLink = ({ icon: Icon, href }) => (
  <a href={href} className="text-blue-900 hover:text-yellow-400 transition transform hover:scale-110">
    <Icon size={32} />
  </a>
);

const Internship = () => {
  return (
    <div className="bg-white">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white h-[50vh] md:h-[80vh]">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${internshipHeroImage})` }}></div>
        <div className="relative flex items-center justify-center h-full text-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
              Improve your Skills with ITINFO
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8">
              Create industry-grade projects in an industrial environment.
            </p>
           
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" icon={FaInfoCircle} title="About ITINFO Academy">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-full flex justify-center
          ">
            <p className="text-blue-900 text-lg leading-relaxed">
              ITINFO Academy is a leader in IT training and professional development, committed to nurturing talent and driving innovation in the information technology industry. With a strong commitment to quality education and hands-on experience, we offer a wide range of courses designed to prepare students for the demands of the technology industry.
            </p>
          </div>
          
        </div>
      </Section>

      {/* Internship Program Overview */}
      <Section id="program-overview" icon={FaRocket} title="Internship Program Overview" bgClass="bg-blue-50">
        <p className="text-blueerms of use900 text-lg max-w-4xl mx-auto text-center">
          ITINFO Academy is pleased to offer a comprehensive internship program aimed at providing students and recent graduates with work experience, industry knowledge, and professional growth opportunities. Our internships are designed to bridge the gap between classroom learning and real-world application, ensuring participants are well prepared for a successful career in the IT field.
        </p>
      </Section>

      {/* Eligibility Criteria */}
      <Section id="eligibility" icon={FaCheckCircle} title="Eligibility Criteria">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <EligibilityCard criteria="Currently enrolled in or a recent graduate of a relevant degree program (Computer Science, Information Technology, Engineering, etc.)." />
          <EligibilityCard criteria="Strong academic performance and a demonstrated interest in IT." />
          <EligibilityCard criteria="Basic knowledge of programming languages, software development or other appropriate skills." />
          <EligibilityCard criteria="Great abilities to solve problems and a preemptive attitude." />
          <EligibilityCard criteria="Good communication skills and ability to work in a team." />
        </div>
      </Section>

      {/* Program Details */}
      <Section id="program-details" icon={FaClock} title="Program Details" bgClass="bg-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProgramDetailCard
            icon={FaClock}
            title="Duration"
            description="1 Month, 3 Months & 6 Months (Online Mode Available)"
          />
          <ProgramDetailCard
            icon={FaMapMarkerAlt}
            title="Location"
            description="Near Kranti Hotel Blue Sapphire Building Second Floor Sangli-Miraj Road Sangli."
          />
        </div>
      </Section>

      {/* Student Care Center */}
      <Section id="student-care" icon={FaPhone} title="Student Care Center">
        <div className="text-center">
          <p className="text-blue-900 text-lg mb-4">For any queries or support, contact us at:</p>
          <p className="text-blue-900 text-xl font-semibold">8830257210 | 8007633732</p>
        </div>
      </Section>

      {/* Career Courses */}
      <Section id="career-courses" icon={FaLaptopCode} title="Career Courses" bgClass="bg-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <FaCode className="text-yellow-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Job Role Courses</h3>
            <p className="text-blue-900">Prepare for specific IT job roles with targeted training.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <FaLanguage className="text-yellow-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Language Courses</h3>
            <p className="text-blue-900">Master programming languages essential for IT careers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <FaLaptopCode className="text-yellow-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Other Tech Courses</h3>
            <p className="text-blue-900">Explore additional technology courses to broaden your skills.</p>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-16 bg-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">Let's Build Together</h2>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8">
            Empowering the Next Generation of IT Professionals
          </p>
          <div className="flex justify-center space-x-6">
            <SocialLink icon={FaInstagram} href="#" />
            <SocialLink icon={FaLinkedin} href="#" />
            <SocialLink icon={FaFacebook} href="#" />
            <SocialLink icon={FaWhatsapp} href="#" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;