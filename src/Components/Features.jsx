import { motion, useAnimation } from 'framer-motion';

const projects = [
  {
    title: "Salience Labs",
    image: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png",
    textPosition: "left"
  },
  {
    title: "Cardboard Spaceship",
    image: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
    textPosition: "right"
  },
  {
    title: "AH2 & Matt Horn",
    image: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
    textPosition: "left"
  },
  {
    title: "Fyde",
    image: "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png",
    textPosition: "right"
  },
  {
    title: "Vise",
    image: "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png",
    textPosition: "left"
  },
  {
    title: "All Things Go",
    image: "https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-663x551.png",
    textPosition: "right"
  },
  {
    title: "Trawa",
    image: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
    textPosition: "left"
  },
  {
    title: "Black Book",
    image: "https://ochi.design/wp-content/uploads/2022/06/Frame-3876-663x551.jpg",
    textPosition: "right"
  },
  {
    title: "Premium Blend",
    image: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
    textPosition: "left"
  },
  {
    title: "Softstart",
    image: "https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg",
    textPosition: "right"
  },
  {
    title: "Officevibe",
    image: "https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-663x551.jpg",
    textPosition: "left"
  },
];

const getVariants = {
  initial: { y: "100%" },
  animate: { y: "0%" },
  exit: { y: "100%" }
};

const Features = () => {
  const controls = projects.map(() => useAnimation());

  const handleHover = (index) => {
    controls[index].start("animate");
  };

  const handleHoverEnd = (index) => {
    controls[index].start("exit");
  };

  const chunkedProjects = [];
  for (let i = 0; i < projects.length; i += 2) {
    chunkedProjects.push(projects.slice(i, i + 2));
  }

  return (
    <div className='w-full py-10 lg:py-20 font-["Neue_Montreal"]'>
      {/* Title Section */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 border-b border-zinc-700 pb-20 text-center md:text-left">
        <h1 className='w-full xl:text-8xl sm:text-5xl text-3xl tracking-tight'>
          Featured projects
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        {chunkedProjects.map((row, rowIndex) => (
          <div key={rowIndex} className="w-full gap-10 md:flex md:flex-row flex-col mt-10">
            {row.map((project, index) => {
              const realIndex = rowIndex * 2 + index;
              return (
                <motion.div
                  key={realIndex}
                  onHoverStart={() => handleHover(realIndex)}
                  onHoverEnd={() => handleHoverEnd(realIndex)}
                  className="cardContainer relative md:w-1/2 w-full h-full xl:h-[75vh] lg:h-[50vh]"
                >
                  <ul className="text-2xl my-1">{project.title}</ul>

                  {/* Hover Title Animation */}
                  <h1
                    className={`absolute text-[#aec752] overflow-hidden xl:text-9xl lg:text-8xl md:text-7xl sm:flex hidden leading-none z-40 tracking-tight top-1/2 -translate-y-1/2 text-center font-extrabold -mb-10 ${
                      project.textPosition === "left"
                        ? "left-full -translate-x-1/2"
                        : "right-full translate-x-1/2"
                    }`}
                  >
                    {project.title.split('').map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        variants={getVariants}
                        initial="initial"
                        animate={controls[realIndex]}
                        transition={{
                          ease: [0.22, 1, 0.36, 1],
                          duration: 0.6,
                          delay: charIndex * 0.03
                        }}
                        className="inline-block uppercase font-extrabold font-['Neue_Montreal']"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </h1>

                  {/* Image Card */}
                  <div className="card w-full h-full flex items-center justify-center bg-green-400 rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
