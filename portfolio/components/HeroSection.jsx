"use client"

import Image from 'next/image'
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-gradient-to-br z-50 from-purple-600 via-purple-800 to-black text-white p-6 rounded-lg max-w-sm w-full">
            <h2 className="text-2xl mb-4">Contact Information</h2>
            <p>Email: taniashafiee78@gmail.com</p>
            <p>Phone: 09332080083</p>
            <p>LinkedIn: linkedin.com/in/tania-shafiee</p>
            <button
              className="cursor-pointer mt-4 w-full sm:w-fit px-4 py-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
       <div className='flex flex-col md:flex-row gap-10 sm:gap-8'>
       <div className='place-self-center text-center sm:text-left mt-10'>
       <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold !mb-7">
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm </span>
        <br />
        <TypeAnimation
      sequence={[
        'Tania',
        1000,
        'web developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
        </h1>
       <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 !text-wrap'>
       I'm a passionate and creative web developer with a strong foundation in modern front-end technologies. I specialize in building responsive, user-friendly websites with <strong>React</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>. I love bringing ideas to life through code and am always eager to learn new skills to improve my craft.
      </p>
       <div className='mt-6'>
        <button
        onClick={handleOpenModal}
        className='cursor-pointer w-full bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500 sm:w-fit px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-white'
        >
          Hire Me
        </button>
        <button className='w-full sm:w-fit px-1 py-1 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500 hover:bg-slate-800 text-white mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
        </button>
       </div>
       </div>     
       <div className='place-self-center !rounded-full'>
        <div>
        <Image
        src="/images/IMG_0637.jpg"
        alt="hero"
        width={800}
        height={800}
        className="w-[600px] h-[500px] lg:w-[1600px] lg:h-[300px] xl:w-[900px] xl:h-[370px]  md:w-[1500px] md:h-[250px] !rounded-full mt-24 border-6 border-pink-200"
      />
       </div>
       </div>
       </div>
    </section>
  )
}

export default HeroSection