import React from 'react'

const About = () => {
    return (
        <>
            <div className='w-full p-[6vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black font-["Neue_Montreal"]' >
                <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>

                {/* 1 */}
                <div className="border-b-[1px] border-zinc-800 w-full my-[2vw] p-0"></div>
                <div className="flex text-[1.2vw]">
                    <div className="sm:w-2/4 w-1/3 text-[10px] sm:text-[1.2vw]">
                        <p>What you can expect:</p>
                    </div>
                    <div className="sm:w-1/4 w-1/3 sm:px-[2.5vw] p-0 text-[10px] sm:text-[1.2vw]">
                        <ul>
                            <li>
                                We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
                                <br />
                                <br />
                                We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</li>
                        </ul>
                    </div>
                    <div className="sm:w-1/4 w-1/3 flex flex-col items-center justify-center text-[10px] sm:text-[1.2vw]">
                        <a href="">Instagram</a>
                        <a href="">Behance</a>
                        <a href="">Facebook</a>
                        <a href="">Linkedin</a>
                    </div>
                </div>

                {/* 2 */}
                <div className="border-b-[1px] border-zinc-800 w-full my-[2vw] p-0"></div>
                <div className="flex">
                    <div className="w-1/2">
                        <h1 className='font-["Neue_Montreal"] text-[3.5vw] leading-[4.5vw]'>Our approach:</h1>
                        <button className='font-["Neue_Montreal"] px-[1.5vw] py-[1.2vw] uppercase bg-zinc-900 items-center rounded-full text-white mt-[1vw] flex gap-8 sm:text-[1.2vw] text-[2.2vw]'>Read More
                            <div className="w-[.6vw] h-[.6vw] rounded-full bg-white "></div>
                        </button>
                    </div>
                    <div className="w-1/2 h-[40vh] md:h-[70vh] bg-[#71803c] rounded-3xl">

                    </div>
                </div>
            </div>


        </>
    )
}

export default About
1.15    