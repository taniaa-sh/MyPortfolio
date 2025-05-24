"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

const images = [
  "/images/cartable.png",
  "/images/cartable1.png",
  "/images/cartable2.png",
  "/images/cartable3.png",
];

const PictureModal = ({ setShowModal }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      if (selectedImage) {
        setSelectedImage(null);
      } else {
        setShowModal(false);
      }
    }
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-white/40 flex justify-center items-center z-10"
      onClick={handleBackdropClick}
    >
      <div className="bg-gradient-to-br z-50 from-purple-600 via-purple-800 to-black text-white p-4 rounded-lg relative">
        {!selectedImage ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <Image
                key={index}
                alt={`cartable-${index}`}
                src={src}
                width={200}
                height={400}
                className="!h-[150px] rounded-2xl cursor-pointer"
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-2 items-center">
            <button
              className="text-pink-300 cursor-pointer self-start"
              onClick={() => setSelectedImage(null)}
            >
              <ArrowLeftIcon className="h-8 w-8 text-pink-300" />
            </button>
            <Image
              alt="Selected"
              src={selectedImage}
              width={400}
              height={600}
              className="rounded-xl w-[600px] h-[350px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PictureModal;
