import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex gap-5 items-center justify-center  px-20 bg-zinc-100'>
      <div className="CardContainer w-1/2 h-[50vh]">
        <div className="relative card w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-32' alt="" />
          <button className='absolute left-5 bottom-5 text-white z-10 border-[1px] border-white px-3  rounded-full'>&copy; 2019-2022</button>
        </div>
      </div>
      <div className="CardContainer flex gap-5 w-1/2 h-[50vh]">
        <div className="relative flex items-center justify-center card w-1/2 rounded-xl h-full bg-[#212121]">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='w-32' alt="" />
          <button className='absolute left-5 bottom-5 text-white z-10 border-[1px] border-white px-3  rounded-full'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className="card w-1/2 rounded-xl h-full bg-[#212121] relative flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-32' alt="" />
          <button className='absolute left-5 bottom-5 text-white z-10 border-[1px] border-white px-3  rounded-full'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
