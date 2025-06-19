import React from 'react'

const About = () => {
    return (
        <>
            <div 
         data-scroll 
         data-scroll-section
         data-scroll-speed="0"

       className='w-full      p-[6vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black font-["Neue_Montreal"]' >
                <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>

                {/* 1 */}
                <div className="border-b-[1px] border-zinc-800 w-full my-[2vw] p-0 gap-6"></div>
                <div className="flex max-[850px]:flex-col text-[1.2vw]">
                    <div className="sm:w-2/4 w-1/3 text-[10px] sm:text-[1.2vw]">
                        <p>What you can expect:</p>
                    </div>
                    <div className=" md:w-1/3 sm:px-[2.5vw] p-0 text-[10px] sm:text-[1.2vw]">
                        <ul>
                            <li>
                                We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
                                <br />
                                <br />
                                We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</li>
                        </ul>
                    </div>
                    <div className=" md:w-1/3 flex flex-col max-[850px]:mt-3 text-[10px] sm:text-[1.2vw]">
                        <a href="">Instagram</a>
                        <a href="">Behance</a>
                        <a href="">Facebook</a>
                        <a href="">Linkedin</a>
                    </div>
                </div>

                {/* 2 */}
                <div className="border-b-[1px] border-zinc-800 w-full my-[3vw] p-0"></div>
                <div className="flex max-[850px]:flex-col max-[850px]:text-[1.2vw] max-[850px]:gap-6">
                    <div className="md:w-1/2 w-full ">
                        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw]'>Our approach:</h1>
                        <button className='font-["Neue_Montreal"] px-[2vw] py-[1.5vw] uppercase bg-zinc-900 items-center rounded-full text-white mt-[1vw] flex gap-8 sm:text-[1.2vw] text-[2.2vw]'>Read More
                            <div className="w-[.6vw] h-[.6vw] rounded-full bg-white "></div>
                        </button>
                    </div>
                    <div className="md:w-1/2 w-full h-[40vh] md:h-[70vh]  rounded-3xl">
                        <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className='w-full h-full rounded-3xl' alt="" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default About
1.15    