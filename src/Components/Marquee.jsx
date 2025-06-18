import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  const marqueeText = "We are ochi";

  return (
    <div 
      data-scroll 
      data-scroll-speed=".1" 
      className='w-full md:py-20 py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.h1
            key={i}
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className='pr-10 text-[10vw] md:text-[20vw] leading-none font-["Founders_Grotesk_X_Condensed"] font-semibold md:-mb-[7vw] uppercase pt-5'
          >
            {marqueeText}
          </motion.h1>
        ))}
      </div>
    </div>
  )
}

export default Marquee
