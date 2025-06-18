import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Features = () => {
  // Separate animation controls for each card
  const controls = [useAnimation(), useAnimation()];

  // Animation variants for characters
  const getVariants = {
    initial: { y: "100%" },
    animate: { y: "0%" },
    exit: { y: "100%" }
  };

  // Handle hover in and out for each card
  const handleHover = (index) => {
    controls[index].start("animate");
  };

  const handleHoverEnd = (index) => {
    controls[index].start("exit");
  };

  return (
    <div className='w-full py-20 font-["Neue_Montreal"]'>
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='w-full text-8xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full gap-10 flex mt-10">

          {/* Card 1 */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[75vh]"
          >
            <h1 className='absolute flex text-[#CDEA68] overflow-hidden text-8xl leading-none z-40 font-["Neue_Montreal"] tracking-tight left-full top-1/2 -translate-y-1/2 text-center -translate-x-1/2 font-semibold -mb-10'>
              {"Salience Labs".split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={getVariants}
                  initial="initial"
                  animate={controls[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: index * 0.03 }}
                  className='inline-block'
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full bg-green-400 rounded-xl overflow-hidden">
              <img
                className='w-full h-full object-cover'
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
                alt="Salience Labs"
              />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[75vh]"
          >
            <h1 className='absolute flex overflow-hidden text-[#CDEA68] text-8xl leading-none z-40 font-["Neue_Montreal"] tracking-tight right-full top-1/2 -translate-y-1/2 text-center translate-x-1/2 font-semibold -mb-10'>
              {"Cardboard Spaceship".split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={getVariants}
                  initial="initial"
                  animate={controls[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6, delay: index * 0.03 }}
                  className='inline-block'
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full bg-green-400 rounded-xl overflow-hidden">
              <img
                className='w-full h-full object-cover'
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt="Cardboard Spaceship"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Features;
    