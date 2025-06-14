import { MdOutlineArrowOutward } from "react-icons/md";

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1 '>
      <div className='textstructure mt-52 px-20 '>
        {["We Create", "Eye-opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                   <div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-green-500"></div>
                )}
                <h1 key={index} className="pt-[2vw] -mb-[1vw] uppercase text-[9vw]  leading-[.75] font-['Founders_Grotesk_X_Condensed'] font-[500]">{item}</h1>
              </div>
            </div>
          )
        })}
      </div>  



      <div className="border-t-[1px]  border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">

        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <div className="masker  items-center">
            <h1 key={index} className="text-md font-light tracking-tight leading-none">{item}</h1>
          </div>
        ))}
        <div className='start flex gap-5  '>
          <div className="px-5 py-2 border-2 border-zinc-500 font-light text-md rounded-full uppercase">Start the project</div>
          <div className="w-fit h-fit rounded-full border-2 items-center flex justify-center py-2 px-2"> <MdOutlineArrowOutward /></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
