"use client";

import Image from "next/image";
import { useState } from "react";
import HireMeModal from "./HireMeModal";

function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section>
      {isModalOpen && <HireMeModal setShowModal={handleCloseModal} />}
      <div className="flex flex-col md:flex-row gap-10 sm:gap-8">
        <div className="place-self-center text-center sm:text-left !mt-10">
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl !my-6 !text-wrap text-justify">
            I'm a passionate and creative web developer with a strong foundation
            in modern front-end technologies. I specialize in building
            responsive, user-friendly websites with <strong>React</strong>,{" "}
            <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>. I love
            bringing ideas to life through code and am always eager to learn new
            skills to improve my craft.
          </p>
          <div className="!mt-6">
            <button
              onClick={handleOpenModal}
              className="cursor-pointer w-60 bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500 sm:w-fit px-6 py-3 rounded-full !mr-4 bg-white hover:bg-slate-200 text-white"
            >
              Hire Me
            </button>
            <button
              onClick={() => {
                const fileUrl = "/MyResume.pdf";
                const link = document.createElement("a");
                link.href = fileUrl;
                link.download = "Tania_Shafiee_CV.pdf";
                link.click();
              }}
              className="cursor-pointer w-60 sm:w-fit px-1 py-1 rounded-full !mr-4 bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500 hover:bg-slate-800 text-white !mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 cursor-pointer">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="place-self-center !rounded-full">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-6 border-pink-200 mt-8 md:!mt-20">
            <Image
              src="/images/IMG_0637.jpg"
              alt="hero"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
