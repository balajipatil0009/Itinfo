
import { 
  FaInfoCircle, 
  FaEye, 
  FaRocket, 
  FaChalkboardTeacher, 
  FaUsers, 
  FaHistory, 
  FaChartLine, 
  FaHandshake, 
  FaLightbulb, 
  FaAward, 
  FaBinoculars, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaQuoteLeft 
} from 'react-icons/fa';
import aboutHeroImage from '/itinfo/itiinfo020.jpg'; // Adjust path based on your project structure
import teamImage from '/itinfo/info5.jpeg'; // Replace with your team image path
import teamImage2 from '/itinfo/info6.jpeg'; // Replace with your team image path

import Navbar from '../componunts/Navbar';
// Reusable Section component
const Section = ({ id, icon: Icon, title, children, bgClass = 'bg-white', className = '' }) => (
  <section id={id} className={`py-16 px-4 md:px-16 ${bgClass} ${className}`}>
    <div className="container mx-auto">
      <div className="text-center mb-8">
        <Icon className="text-yellow-400 text-4xl mx-auto animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

// Timeline Item component
const TimelineItem = ({ year, content }) => (
  <div className="flex items-start mb-8 md:mb-12 group">
    <div className="bg-yellow-400 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center mr-4 md:mr-8 font-bold shrink-0">
      {year}
    </div>
    <div className="bg-white p-4 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
      <p className="text-blue-900 text-lg">{content}</p>
    </div>
  </div>
);

// Testimonial component
const Testimonial = () => {
  const testimonials = [
    {
      quote: "ITINFO ACADEMY transformed my career with their hands-on training and expert guidance.",
      author: "Jane Doe",
      role: "Web Developer",
    },
    {
      quote: "The personalized learning path helped me master data science in no time!",
      author: "John Smith",
      role: "Data Scientist",
    },
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
            <p className="text-blue-900 text-lg mb-4">{testimonial.quote}</p>
            <p className="text-blue-900 font-semibold">{testimonial.author}</p>
            <p className="text-blue-900 text-sm">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-white">
      <Navbar/>
      {/* Hero Section with Parallax Effect */}
      <section className="relative bg-blue-900 text-white h-[60vh] md:h-[80vh]">
        <div className="absolute inset-0 bg-fixed bg-cover bg-top opacity-50" style={{ backgroundImage: `url(${aboutHeroImage})` }}></div>
        <div className="relative flex items-center justify-center h-full text-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
              About ITINFO ACADEMY
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto">
              Discover our journey to empower individuals with cutting-edge IT education.
            </p>
          </div>
        </div>
      </section>

      {/* Anchor Links */}
      <div className="bg-blue-50 py-4 sticky hidden md:block top-0 md:top:10 z-10 shadow-md ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
            {[
              { id: 'company-overview', label: 'Company Overview' },
              { id: 'our-vision', label: 'Our Vision' },
              { id: 'our-mission', label: 'Our Mission' },
              { id: 'customized-training', label: 'Customized Training' },
              { id: 'who-we-are', label: 'Who We Are' },
              { id: 'history', label: 'History' },
              { id: 'growth-expansion', label: 'Growth & Expansion' },
              { id: 'partnerships', label: 'Partnerships' },
              { id: 'innovation', label: 'Innovation' },
              { id: 'commitment', label: 'Commitment' },
              { id: 'looking-ahead', label: 'Looking Ahead' },
            ].map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-blue-900 hover:text-yellow-400 transition font-semibold px-3 py-2 rounded-full hover:bg-blue-100"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <Section id="company-overview" icon={FaInfoCircle} title="Company Overview">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-blue-900 text-lg leading-relaxed">
              ITINFO ACADEMY provides comprehensive training and services. Our academy is committed to creating a supportive learning environment that emphasizes quality education. We enable learning professionals to enhance their self-assurance, technical skills, critical thinking abilities, and career development. The academy aims to instill personal values such as self-confidence, accountability, and inspiration.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={teamImage} alt="Our Team" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </Section>

      <Section id="our-vision" icon={FaEye} title="Our Vision" bgClass="bg-blue-50">
        <p className="text-blue-900 text-lg max-w-4xl mx-auto text-center">
          To become a globally recognized institution empowering individuals with comprehensive knowledge and expertise in cutting-edge information technology, fostering innovation, and preparing them for successful careers in a rapidly evolving digital landscape.
        </p>
      </Section>

      <Section id="our-mission" icon={FaRocket} title="Our Mission">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-blue-900 text-lg">
              At ITINFO ACADEMY, our mission is to provide a dynamic learning environment that emphasizes hands-on experience, industry-aligned curriculum, and personalized learning paths.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-blue-900 text-lg">
              We aim to cultivate a community of learners guided by expert faculty and industry connections, fostering a supportive ecosystem that nurtures individual growth and encourages exploration of emerging technologies.
            </p>
          </div>
        </div>
      </Section>

      <Section id="customized-training" icon={FaChalkboardTeacher} title="Customized Training" bgClass="bg-blue-50">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-blue-900 text-lg leading-relaxed">
              We offer customized training programs, including one-on-one formats, at students' homes or business locations. With the rapid advancement of technology and constant influx of new software applications and hardware devices, there is a continuous demand for training and skills upgrading. This ensures that individuals can maximize the benefits of their computer equipment and programs.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={teamImage2} alt="Training" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </Section>

      <Section id="who-we-are" icon={FaUsers} title="Who We Are">
        <p className="text-blue-900 text-lg max-w-4xl mx-auto text-center">
          We are an authorized training center for E-more India. We provide information resources, consulting services, and training in innovative and proven software applications. Our expertise lies in computer education and related sector placement services. We offer assistance and support in skill enhancement and career development. We also provide services in malware analysis, software development, data recovery, open-source intelligence services, and college projects. ITINFO ACADEMY is a journey of innovation and excellence.
        </p>
        <Testimonial />
      </Section>

      <Section id="history" icon={FaHistory} title="History" bgClass="bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <TimelineItem 
            year="2022" 
            content="IT INFO ACADEMY was founded by a group of passionate IT professionals and educators who recognized the increasing demand for high-quality, accessible education in information technology." 
          />
          <TimelineItem 
            year="2022-2023" 
            content="Expanded curriculum to include advanced courses in data science, artificial intelligence, full-stack web development, and more." 
          />
        </div>
      </Section>

      <Section id="growth-expansion" icon={FaChartLine} title="Growth & Expansion">
        <p className="text-blue-900 text-lg max-w-4xl mx-auto text-center">
          In its early years, IT INFO ACADEMY focused on offering a few essential IT courses such as programming, networking, full-stack development, data science, and cybersecurity. Our commitment to quality education quickly gained attention, leading to a smooth increase in enrollment. By 2022-2023, we expanded our curriculum to include advanced courses in data science, artificial intelligence, full-stack web development, and more.
        </p>
      </Section>

      <Section id="partnerships" icon={FaHandshake} title="Partnerships & Collaborations" bgClass="bg-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Tech Companies</h3>
            <p className="text-blue-900">Collaborations with leading tech firms for certifications.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Universities</h3>
            <p className="text-blue-900">Partnerships with academic institutions for curriculum development.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Industry Organizations</h3>
            <p className="text-blue-900">Connections for internships and job placements.</p>
          </div>
        </div>
      </Section>

      <Section id="innovation" icon={FaLightbulb} title="Innovation in Education">
        <p className="text-blue-900 text-lg max-w-4xl mx-auto text-center">
          Recognizing the rapid pace of technological advancement, ITINFO ACADEMY has continuously innovated its teaching methods. We were among the first to adopt a blended learning approach, combining online and in-person classes to offer flexible learning options.
        </p>
      </Section>

      <Section id="commitment" icon={FaAward} title="Commitment to Excellence" bgClass="bg-blue-50">
        <p className="text-blue-900 text-lg max-w-4xl mx-auto text-center">
          Our dedication to providing top-notch education has been recognized with numerous awards and accreditations. We are proud to be accredited by E-more Technology India, and our courses are regularly updated to meet industry standards. Our faculty, composed of experienced professionals and experts in their fields, are committed to mentoring students and helping them achieve their career goals.
        </p>
      </Section>

      <Section id="looking-ahead" icon={FaBinoculars} title="Looking Ahead">
        <p className="text-blue-900 text-lg max-w-4xl mx-auto text-center">
          As we look to the future, ITINFO ACADEMY remains committed to its mission of empowering individuals through education. We are excited to explore new frontiers in technology education. Our goal is to continue leading in IT education, helping learners worldwide achieve their full potential in the ever-evolving digital landscape.
        </p>
      </Section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-16 bg-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-lg font-semibold">Email</p>
              <p className="text-sm">Itinfoacademy@yahoo.com</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Phone</p>
              <p className="text-sm">8830257210 | 8007633732</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Address</p>
              <p className="text-sm">2nd floor blue sapphire building near KFC vijaynagar Sangli</p>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-yellow-400 hover:text-yellow-500 transition transform hover:scale-110">
              <FaFacebook size={32} />
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-500 transition transform hover:scale-110">
              <FaTwitter size={32} />
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-500 transition transform hover:scale-110">
              <FaInstagram size={32} />
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-500 transition transform hover:scale-110">
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;