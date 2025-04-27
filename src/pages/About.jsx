import Navbar from "../componunts/Navbar";
import Footer from "../componunts/Footer";
import { GoGoal } from "react-icons/go";
import { GiStairsGoal } from "react-icons/gi";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="w-[99vw] overflow-hidden">
        <div className="h-[100vh] bg-[url('/itinfo/info17.jpeg')] bg-center bg-cover flex justify-center items-center ">
          <div className="h-full backdrop-blur-sm flex items-center">
            <h1 className="text-[10vw] font-Bank backdrop-blur-sm p-0 text-white">
              ITINFO ACADEMY
            </h1>
          </div>
        </div>
      </div>
    
      <div className="flex justify-center my-10">
        <div className="w-[80vw] p-2 md:p-20 rounded-lg border-[3px] border-gray-400">
          <h3 className=" text-4xl font-bold text-blue-600 m">
            COMPANY OVERVIEW
          </h3>
          <p>
            ITINFO Academy provides comprehensive training and services. Our
            academy is committed to creating a supportive learning environment
            that emphasizes quality education. We enable learning professionals
            to enhance their self-assurance, technical skills, critical thinking
            abilities, and career development. The academy aims to instill
            personal values such as self-confidence, accountability, and
            inspiration.
          </p>

          <div className="p-2 bg-blue-500 mt-6">
            <div className="flex items-center">
              <GiStairsGoal />
              <h1 className="text-xl font-sansMedium m-2">OUR VISION</h1>
            </div>
            <p className="p-0 md:p-0  text-justify">
              &nbsp;&nbsp;&nbsp;&nbsp;To become a globally recognized
              institution empowering individuals with comprehensive knowledge
              and expertise in cutting-edge information technology, fostering
              innovation, and preparing them for successful careers in a rapidly
              evolving digital landscape.
            </p>
          </div>

          <div className="p-2 bg-red-500 mt-6">
            <div className="flex items-center">
              <GoGoal />
              <h1 className="text-xl font-sansMedium m-2">OUR MISSION</h1>
            </div>
            <p className="p-0 md:p-0 text-justify">
              &nbsp;&nbsp;&nbsp;&nbsp; At ITINFO ACADEMY, our mission is to
              provide a dynamic learning environment that emphasizes hands-on
              experience, industry-aligned curriculum, and personalized learning
              paths. We aim to cultivate a community of learners guided by
              expert faculty and industry connections, fostering a supportive
              ecosystem that nurtures individual growth and encourages
              exploration of emerging technologies. Through mentorship,
              certifications, and accreditation, we aspire to equip our students
              with the skills and mindset needed to thrive in the ever-changing
              IT landscape.
            </p>
          </div>
          <h3 className=" text-blue-500 text-xl font-sansMedium m-4">
            Customised Tainning
          </h3>
          <p>
            We offer customized training programs, including one-on-one formats,
            at students homes or business locations. With the rapid advancement
            of technology and constant influx of new software applications and
            hardware devices, there is a continuous demand for training and
            skills upgrading. This ensures that individuals can maximize the
            benefits of their computer equipment and programs.
          </p>
          <h3 className=" text-blue-500 text-xl font-sansMedium m-4">
            Who we are:
          </h3>
          <p>
            We are an authorized training center for E-more India. We provide
            information resources, consulting services, and training in
            innovative and proven software applications. Our expertise lies in
            computer education and related sector placement services. We offer
            assistance and support in skill enhancement and career development.
            "We also provide services in malware analysis, software development,
            data recovery, open-source intelligence services, and college
            projects. IT INFO Academy is a journey of innovation and excellence.
          </p>
          <h3 className=" text-blue-500 text-xl font-sansMedium m-4">
            History:
          </h3>
          <p>
            IT INFO Academy was founded in 2012 by a group of passionate IT
            professionals and educators who recognized the increasing demand for
            high-quality, accessible education in information technology. Our
            mission from the outset has been to empower individuals and
            organizations with the knowledge and skills needed to succeed in the
            digital age."
          </p>
          <h3 className=" text-blue-500 text-xl font-sansMedium m-4">
            Growth & Expansion:
          </h3>
          <p>
            In its early years, IT INFO Academy focused on offering a few
            essential IT courses such as programming, networking, full-stack
            development, data science, and cybersecurity. Our commitment to
            quality education quickly gained attention, leading to a steady
            increase in enrollment. By 2022-2023, we expanded our curriculum to
            include advanced courses in data science, artificial intelligence,
            full-stack web development, and more.
          </p>
          <h3 className=" text-blue-500 text-xl font-sansMedium m-4">
            Partnerships & Collaborations Over the Years:
          </h3>
          <p>
            To strengthen IT INFO Academy, we have forged strong partnerships
            with leading tech companies, private colleges, universities, and
            industry organizations. These collaborations enable us to offer
            certification programs, internships, and job placement assistance,
            ensuring our students are well-prepared for the workforce.
          </p>
          <h3 className=" text-blue-500 text-xl font-sansMedium m-4">
            Innovation in Education:
          </h3>
          <p>
            Recognizing the rapid pace of technological advancement, IT INFO
            Academy has continuously innovated its teaching methods. We were
            among the first to adopt a blended learning approach, combining
            online and in-person classes to offer flexible learning options.
          </p>
          <h3 className=" text-blue-500 text-xl font-sansMedium m-4">
            Commitment to Excellence:
          </h3>
          <p>
            Our dedication to providing top-notch education has been recognized
            with numerous awards and accreditations. We are proud to be
            accredited by E-more Technology India, and our courses are regularly
            updated to meet industry standards. Our faculty, composed of
            experienced professionals and experts in their fields, are committed
            to mentoring students and helping them achieve their career goals.
          </p>
          <h3 className=" text-blue-500 text-xl font-sansMedium m-4">
            Looking Ahead:
          </h3>
          <p>
            As we look to the future, IT INFO Academy remains committed to its
            mission of empowering individuals through education. We are excited
            to explore new frontiers in technology education. Our goal is to
            continue leading in IT education, helping learners worldwide achieve
            their full potential in the ever-evolving digital landscape.
          </p>
        </div>
      </div>
      {/* <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.681282727234!2d74.60932207488369!3d16.842160218283528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc123d5641f129d%3A0xc48428c2379387d7!2sITINFO%20ACADEMY%20-%20Best%20IT%20institute!5e0!3m2!1sen!2sin!4v1719935382171!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
      <Footer />
    </>
  );
};

export default About;
