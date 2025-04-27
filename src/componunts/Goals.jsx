import "../App.css";
import { SiLeaderprice,SiTheodinproject  } from "react-icons/si";
import { MdOutlineCastForEducation,MdOutlineSupportAgent } from "react-icons/md";
import { BiSolidCertification   } from "react-icons/bi";



const Goals = () => {
  return (
    <div className="min-h-[80vh] w-[100vw] items-center bg-[#f7f7f7] md:bg-[url(/itinfo3.jpg)] bg-contain bg-no-repeat bg-center flex justify-center md:justify-normal md:grid md:pr-[10vw]">
      <div className="w-[80vw] md:w-[40vw] hidden md:grid justify-self-end">
        <h1 className=" font-bold text-[7vh]">ITINFO Advantages</h1>
        <div className="flex p-8">
          <ul className=" list-disc">
            <li className=" p-1 text-lg">
              Affordable pricing with premium quality.
            </li>
            <li className=" p-1 text-lg">Flexible learning options.</li>
            <li className=" p-1 text-lg">Real-world project Experience.</li>
            <li className=" p-1 text-lg">Globally recognized certification.</li>
            <li className=" p-1 text-lg">
              Comprehensive support from start to end.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[80vw] md:w-[40vw]  md:hidden justify-self-end">
        <h1 className=" font-bold text-2xl text-center">ITINFO Advantages</h1>
        <div className="">
      
            <div className=" bg-white shadow-md p-5 m-4 "><div className="flex justify-center"><SiLeaderprice size={60}/></div><p className=" p-1 text-lg text-center">
              Affordable pricing with premium quality.
            </p></div>
            <div className=" bg-white shadow-md p-5 m-4"><div className="flex justify-center"> <MdOutlineCastForEducation size={50}/> </div><p className=" p-1 text-lg text-center">Flexible learning options.</p></div>
            <div className=" bg-white shadow-md p-5 m-4"><div className="flex justify-center"><SiTheodinproject size={50} /></div><p className=" p-1 text-lg text-center">Real-world project Experience.</p></div>
            <div className=" bg-white shadow-md p-5 m-4"><div className="flex justify-center"><BiSolidCertification size={50} /></div><p className=" p-1 text-lg text-center">Globally recognized certification.</p></div>
            <div className=" bg-white shadow-md p-5 m-4"><div className="flex justify-center"><MdOutlineSupportAgent size={60} /></div><p className=" p-1 text-lg text-center">
              Comprehensive support from start to end.
            </p></div>

        </div>
      </div>
    </div>
  );
};

export default Goals;
