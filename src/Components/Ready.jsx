import React from 'react'
import Eyesmain from './Eyesmain'
 

const Ready = () => {
    return (
        <div data-scroll
            data-scroll-section
            data-scroll-speed=".09" className='w-full   p-[6vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black font-["Neue_Montreal"]'>
            <div className="text-[15vw] text-center w-full uppercase leading-none  font-semibold">
                <h1 className="font-['Founders_Grotesk_X_Condensed'] ">Ready</h1>
                <h1 className="font-['Founders_Grotesk_X_Condensed'] ">to start</h1>
                <h1 className="font-['Founders_Grotesk_X_Condensed'] ">the project?</h1>
            </div>
           <div className="relative z-40 items-center justify-center h-full">
    <Eyesmain />
</div>

        </div>
    )
}

export default Ready
