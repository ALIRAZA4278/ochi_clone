import React from 'react'

const Features = () => {
    return (
        <div className='w-full py-20 font-["Neue_Montreal"]'>
            <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
                <h1 className='w-full text-8xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
            </div>

            <div className="px-20">
                <div className="cards w-full gap-10 flex mt-10">

                    <div className="cardContainer relative   w-1/2 h-[75vh]  ">
                        <h1 className='absolute text-[#CDEA68] z-40 text-8xl leading-none font-["Neue_Montreal"] tracking-tight left-full top-1/2 -translate-y-1/2 text-center -translate-x-1/2 font-semibold -mb-10'>
                           {"Salience Labs".split('').map((item, index)=><span>{item}</span>)}</h1>
                        <div className="card w-full h-full bg-green-400 rounded-xl overflow-hidden">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="" />
                        </div>
                    </div>

                    <div className="cardContainer relative  w-1/2 h-[75vh]  ">
                        <h1 className='absolute text-[#CDEA68] z-40 text-8xl leading-none font-["Neue_Montreal"] tracking-tight right-full top-1/2 -translate-y-1/2 text-center translate-x-1/2 font-semibold -mb-10'>
                           {"Cardboard Spaceship".split('').map((item, index)=><span>{item}</span>)}</h1>
                        <div className="card w-full h-full bg-green-400 rounded-xl overflow-hidden">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Features
