
const GalCard = ({img1,img2,img3}) => {
  return (
    <div className="h-[80vh] flex-col items-center md:flex-row flex  w-[99vw] overflow-hidden justify-center">
    <div className="w-[90vw] h-full relative flex flex-col gap-6">
      <div style={{backgroundImage: img1}} className=" bg-center bg-cover border-4 border-white rounded-xl h-[80%] w-full md:w-1/2 md:absolute hover:z-10 hover:shadow-lg"></div>
      <div className=" h-full w-full md:w-1/2">
        <div style={{backgroundImage: img2}} className="md:h-1/2  w-full md:w-[40vw] bg-center bg-cover border-4 border-white rounded-xl md:absolute right-7 hover:z-10 hover:drop-shadow-lg h-full"></div>
        <div style={{backgroundImage: img3}} className="md:h-3/5  w-full md:w-[40vw] bg-center bg-cover border-4 border-white md:absolute left-[35vw] bottom-5 rounded-xl h-full"></div>
      </div>
    </div>
  </div>
  )
}

export default GalCard