"use client"

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  return (
    <section>
       <div className='flex flex-col md:flex-row gap-4 sm:gap-8'>
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
       <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur atque cumque esse doloremque quibusdam vel suscipit, nemo quaerat magni optio consectetur, architecto exercitationem accusantium pariatur in possimus veniam ad?</p>
       <div className='mt-6'>
        <button className='w-full bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500 sm:w-fit px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-white'>Hire Me</button>
        <button className='w-full sm:w-fit px-1 py-1 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500 hover:bg-slate-800 text-white mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
        </button>
       </div>
       </div>     
       <div className='place-self-center !rounded-full'>
        <Image
        src="/images/IMG_0637.jpg"
        alt="hero"
        width={800}
        height={800}
        className="w-[600px] h-[500px] lg:w-[1600px] lg:h-[400px] xl:w-[900px] xl:h-[400px]  md:w-[1500px] md:h-[300px] !rounded-full mt-24 border-6 border-pink-200"
      />
       </div>
       </div>
    </section>
  )
}

export default HeroSection