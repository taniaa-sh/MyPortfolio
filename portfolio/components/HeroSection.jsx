"use client"

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  return (
    <section>
       <div className='grid grid-cols-1 sm:grid-cols-12'>
       <div className='col-span-7 place-self-center text-center sm:text-left'>
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
       <div>
        <button className='w-full bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500 sm:w-fit px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-white'>Hire Me</button>
        <button className='w-full sm:w-fit px-1 py-1 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500 hover:bg-slate-800 text-white mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
        </button>
       </div>
       </div>     
       <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
        <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
        <Image
        src="/images/20240326_144547.jpg"
        alt="hero"
        width={300}
        height={300}
        className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-9 left-12"
      />
        </div>
       </div>
       </div>
    </section>
  )
}

export default HeroSection