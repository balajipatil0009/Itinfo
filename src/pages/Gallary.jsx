import Navbar from "../componunts/Navbar";
import Footer from "../componunts/Footer";
import GalCard from "../componunts/GalCard";

const Gallary = () => {
  return (
    <div className="w-[99vw] overflow-hidden">
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

      <div className=" relative h-auto ">
      <GalCard img1={"url('/itinfo/info1.jpeg')"} img2={"url('/itinfo/info2.jpeg')"} img3={"url('/itinfo/info4.jpeg')"} />

      <GalCard img1={"url('/itinfo/info6.jpeg')"} img2={"url('/itinfo/info8.jpeg')"} img3={"url('/itinfo/info12.jpeg')"} />
      <GalCard img1={"url('/itinfo/info5.jpeg')"} img2={"url('/itinfo/info10.jpeg')"} img3={"url('/itinfo/info16.jpeg')"} />
      <GalCard img1={"url('/itinfo/info13.jpeg')"} img2={"url('/itinfo/info12.jpeg')"} img3={"url('/itinfo/info15.jpeg')"} />
          <GalCard img1={"url('/itinfo/info18.jpeg')"} img2={"url('/itinfo/info19.jpeg')"} img3={"url('/itinfo/info20.jpeg')"} />
          <GalCard img1={"url('/itinfo/info21.jpeg')"} img2={"url('/itinfo/info22.jpeg')"} img3={"url('/itinfo/info23.jpeg')"} />
          <GalCard img1={"url('/itinfo/info25.jpeg')"} img2={"url('/itinfo/info26.jpeg')"} img3={"url('/itinfo/info27.jpeg')"} />
          <GalCard img1={"url('/itinfo/info28.jpeg')"} img2={"url('/itinfo/info29.jpeg')"} img3={"url('/itinfo/info30.jpeg')"} />
          <GalCard img1={"url('/itinfo/info31.jpeg')"} img2={"url('/itinfo/info32.jpeg')"} img3={"url('/itinfo/info33.jpeg')"} />
          <GalCard img1={"url('/itinfo/info34.jpeg')"} img2={"url('/itinfo/info35.jpeg')"} img3={"url('/itinfo/info36.jpeg')"} />
      </div>
    

 

      <Footer />
    </div>
  );
};

export default Gallary;
