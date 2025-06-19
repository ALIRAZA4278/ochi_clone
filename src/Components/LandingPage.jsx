import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

const LandingPage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1 '>
      <div className='textstructure mt-52 md:px-20 max-[850px]:px-5 max-[850px]:text-center max-[850px]:mt-32 '>
        {["We Create", "Eye-opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden ">
                {index === 1 && (
                  <motion.div initial={{ width: 0 }} animate={{ width: "11vw" }}  transition={{ ease: [0.76, 0, 0.24, 1], repeat: Infinity, duration: 1 }} className="mr-[1vw] w-[11vw]  bg-zinc-900 rounded-md h-[6.5vw] items-center justify-center -top-[1.8vw] relative ">
                    <img className="w-full h-full" src="OCHI.jpg" alt="" />
                  </motion.div>
                )}
                <h1 key={index} className="pt-[2vw] -mb-[1vw] uppercase text-[11vw]  leading-[.75] font-['Founders_Grotesk_X_Condensed'] font-[500]">{item}</h1>
              </div>
            </div>
          )
        })}
      </div>



      <div className="border-t-[1px] bg-zinc-900 w-full h-20  border-zinc-800 mt-20 flex justify-between  py-5 px-20 max-[850px]:px-5 max-[850px]:flex-col max-[850px]:gap-8 max-[850px]:my-28">

        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <div className="masker  items-center  max-[850px]:text-sm">
            <h1 key={index} className="text-md font-light tracking-tight leading-none">{item}</h1>
          </div>
        ))}
        <div className='start flex gap-5  max-[850px]:gap-2  max-[850px]:text-sm items-center '>
          <div className="px-5 py-2 border-2 border-zinc-500 font-light text-md rounded-full uppercase">Start the project</div>
          <div className="w-fit h-fit rounded-full border-2 items-center flex justify-center py-2 px-2 max-[850px]:hidden max-[850px]:text-sm"> <MdOutlineArrowOutward /></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
