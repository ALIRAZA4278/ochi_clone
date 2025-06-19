import React, { useEffect, useState } from 'react'

const Eyesmain = () => {
    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY
            let deltaX = mouseX - window.innerWidth / 2
            let deltaY = mouseY - window.innerHeight / 2
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle - 180)
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.7" className='w-full flex justify-center items-center py-20'>
            <div className="flex justify-center gap-10">
                {/* Eye 1 */}
                <div className="w-[15vw] h-[15vw] max-[1120px]:w-[20vw] max-[1120px]:h-[20vw] max-[640px]:w-[25vw] max-[640px]:h-[25vw] bg-zinc-200 rounded-full flex justify-center items-center">
                    <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
                        <div
                            style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                            className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                        >
                            <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
                        </div>
                    </div>
                </div>
                {/* Eye 2 */}
                <div className="w-[15vw] h-[15vw] max-[1120px]:w-[20vw] max-[1120px]:h-[20vw] max-[640px]:w-[25vw] max-[640px]:h-[25vw] bg-zinc-200 rounded-full flex justify-center items-center">
                    <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
                        <div
                            style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                            className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                        >
                            <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyesmain
