import React from 'react'

const Cards = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1"   className='w-full xl:flex   gap-5 items-center justify-center  md:px-20 px-10 bg-zinc-900 my-10'>
      <div className="CardContainer w-full block h-[50vh] xl:w-1/2 xl:flex xl:my-0 my-10  ">
        <div className="relative card w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-32' alt="" />
          <button className='absolute left-5 bottom-5 text-white z-10 border-[1px] border-white px-3  rounded-full text-sm  max-[1300px]:text-xs'>&copy; 2019-2022</button>
        </div>
      </div>
      <div className="CardContainer  gap-5 w-full xl:w-1/2 xl:h-[50vh] h-[50vh] max-[700px]:h-[1000px] flex max-[700px]:flex-col max-[700px]:w-full">
        <div className="relative w-full  flex items-center justify-center card max-[700px]:h-[350px]  min-[700px]:w-1/2 rounded-xl h-full bg-[#212121] ">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='w-32' alt="" />
          <button className='absolute left-5 bottom-5 text-white z-10 border-[1px] border-white px-3  rounded-full text-sm  max-[1300px]:text-xs'>RATING 5.0 ON CLUTCH</button>
        </div>

        <div className="card min-[700px]:w-1/2 w-full max-[700px]:h-[350px]  rounded-xl h-full bg-[#212121] relative flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-32' alt="" />
          <button className='absolute left-5 bottom-5 text-white z-10 border-[1px] border-white px-3  text-sm rounded-full max-[1300px]:text-xs'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
