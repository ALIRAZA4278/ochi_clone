import React, { useState } from 'react';

const clientsData = [
  {
    company: 'Karman Ventures',
    services: ['INVESTOR DECK', 'SALE DECK'],
    person: 'William Barnes',
    image: 'https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png',
    testimonial:
      'They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5',
  },
  {
    company: 'Planetly',
    services: [
      'AGENCY',
      'BIG NEWS DECK',
      'BRANDED TEMPLATE',
      'INVESTOR DECK',
      'PRODUCTION PRESENTATION',
      'SALE DECK',
      'STARTUP PITCH',
    ],
    person: 'Nina Walloch',
    image: 'https://ochi.design/wp-content/uploads/2022/05/Nina.jpg.png',
    testimonial:
      'Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.',
  },
  {
    company: 'Workiz Easy',
    services: [
      'COMPANY PRESENTATION',
      'ONBOARDING PRESENTAION',
      'POLICY DECK & PLAYBOOK',
      'REDESIGN',
      'SALE DECK',
    ],
    person: 'Tomer Levy',
    image: 'https://ochi.design/wp-content/uploads/2022/05/Tomer.png',
    testimonial:
      'OCHI brought a certain level of professionalism into our presentations that we were lacking before. When I showed our management and HR teams the presentations OCHI developed, they were amazed — the final product was exactly what we needed to create a better experience for new employees and our clients.',
  },
  {
    company: 'Premium Blend',
    services: [
      'BRANDED TEMPLATE',
      'ILLUSTRATIONS',
    ],
    person: 'Ellen Kim',
    image: 'https://ochi.design/wp-content/uploads/2022/12/image-677-300x298.png',
    testimonial:
      'They are truly changing the landscape of presentations!! Fast, effective, and nice humans that listened to every detail of our needs. Creating a deck with their template brings so much joy and ease. We proudly showcase their design in our calls and presentations.',
  },
  {
    company: 'Hypercare Systems',
    services: [
      'INVESTOR DECK',
      'STARTUP PITCH',

    ],
    person: 'Brendan Goss',
    image: 'https://ochi.design/wp-content/uploads/2022/05/1627398835558-11.png',
    testimonial:
      'The service received from OCHI was absolutely first-class. Their close attention to detail, and deep thought in terms of narrative, flow, and aesthetics, completely exceeded my expectations, which were very high from the outset. Especially loved and appreciated the creation of visuals, animation, and advice around the look and feel that we are after. We will definitely continue working with Ihor and his team. I cannot recommend them highly enough.  ',
  },
  {
    company: 'Officevibe',
    services: [
      'BRANDED TEMPLATE',

    ],
    person: 'Raff Labrie',
    image: 'https://ochi.design/wp-content/uploads/2023/10/Photo-300x300.png',
    testimonial:
      'Ochi has an impressive understanding of what’s needed to do an effective presentation. The stakeholders at work said it’s the best most complete PP template they’ve ever seen. Ochi delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Ochi design again for sure!',
  },
  {
    company: 'Orderlion',
    services: [
      'AGENCY',
      'INVESTOR DECK',  
      'PRODUCTION PRESENTATION',
      'REVIEW',
      'SALE DECK',

    ],
    person: 'Stefan Strohmer',
    image: 'https://ochi.design/wp-content/uploads/2022/05/Stefan-300x300.jpg',
    testimonial:
      'The result was just amazing! For me, a designer is exceptional when you are so satisfied with the result that you want to look at it the whole day like a kid with a new toy. Ihor and his team delivered exactly that! They are very talented designers who understand the real business problem we are trying to solve and iterate over many drafts to achieve the best possible outcome. We are looking for a long-lasting working relationship!',
  },
  {
    company: 'Black Book',
    services: [
      'AGENCY',
      'INVESTOR DECK',  
      'PRODUCTION PRESENTATION',
      'REVIEW',
      'SALE DECK',

    ],
    person: 'Jaci Smith',
    image: 'https://ochi.design/wp-content/uploads/2022/05/Jaci.jpg.png',
    testimonial:
      'They nailed what our product was all about. We found their ability to workshop all the angles and take on feedback was great and it shows in the final product. Everything moved with a milestone dynamic brief via Notion which was handy to track progress. We’re very happy with the process and the final product. All was handled well and professionally.',
  },
  {
    company: 'Trawa Energy',
    services: [
      'BRANDING',
      'INVESTOR DECK',
      'STARTUP PITCH',
    ],
    person: 'David Budde',
    image: 'https://ochi.design/wp-content/uploads/2023/02/David-Budde-1-300x300.png',
    testimonial:
      'We were surprised by the accuracy with which Ochi Design nailed the overall design language that perfectly aligned with our personal preferences and the vision that we have for our young company.',
  },
];

const Clients = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='bg-zinc-900 w-full lg:px-20 py-20 px-10 font-["Neue_Montreal"] text-white'>
      <h1 className='w-full xl:text-8xl sm:text-5xl text-3xl tracking-tight mb-10 font-["Neue_Montreal"]'>
        Clients’ reviews
      </h1>

      {clientsData.map((client, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            {/* Border */}
            <div className='border-b-[1px] border-zinc-800 w-full '></div>

            {/* Basic Info Row */}
            <div className='CARDS w-full gap-5 flex text-xl justify-between my-2'>
              {/* Company */}
              <div className='w-full sm:w-1/3'>
                <h2 className='font-["Neue_Montreal"] max-[850px]:text-sm'>{client.company}</h2>
              </div>

              {/* Services */}
              <div className='w-full sm:w-1/3   hidden md:block'>
                <h3 className='font-["Neue_Montreal"] md:flex hidden'>Services</h3>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}
                >

                  <h3 className='  font-["Neue_Montreal"] md:hidden flex'>Services</h3>
                  <ul className='flex flex-wrap gap-3 '>
                    {client.services.map((service, idx) => (
                      <li
                        key={idx}
                        className='px-4 py-2 border-[1px] border-white rounded-full text-sm font-["Neue_Montreal"]'
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Person */}
              <div className='w-full sm:w-1/3 flex-col gap-2 hidden md:flex'>
                <h3 className='font-["Neue_Montreal"] md:flex hidden  '>{client.person}</h3>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out  ${isOpen ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className='flex flex-col gap-10 mt-4'>
                    <img
                      src={client.image}
                      alt={client.person}
                      className='w-32 h-32 rounded-3xl object-cover'
                    />
                    <p className='text-xl font-["Neue_Montreal"]'>{client.testimonial}</p>
                  </div>
                </div>
              </div>

              {/* READ Button */}
              <div className=''>
                <button
                  onClick={() => toggleDropdown(index)}
                  className='underline font-["Neue_Montreal"] max-[850px]:text-sm text-lg'
                >
                  {isOpen ? 'CLOSE' : 'READ'}
                </button>
              </div>
            </div>

            {/* Dropdown Section with Transition */}

            {/* md */}
            <div className="block md:hidden">
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}
              >

                <h3 className='font-["Neue_Montreal"] md:hidden flex mb-2'>Services</h3>
                <ul className='flex flex-wrap gap-3 '>
                  {client.services.map((service, idx) => (
                    <li
                      key={idx}
                      className='px-2 py-2 border-[1px] border-white rounded-full text-xs font-["Neue_Montreal"]'
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out  ${isOpen ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className='flex flex-col gap-10 mt-4'>
                  <img
                    src={client.image}
                    alt={client.person}
                    className='w-32 h-32 rounded-3xl object-cover'
                  />
                  <p className='text-xl font-["Neue_Montreal"]'>{client.testimonial}</p>
                </div>
              </div>
            </div>
          </div>


        );
      })}
    </div>
  );
};

export default Clients;
