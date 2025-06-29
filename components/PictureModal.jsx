"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const PictureModal = ({ setShowModal, isPanel, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = isPanel
    ? [
        "/images/setPanel1.png",
        "/images/setPanel2.png",
        "/images/setPanel3.png",
        "/images/setPanel4.png",
        "/images/setPanel5.png",
        "/images/setPanel6.png",
        "/images/setPanel7.png",
      ]
    : [
        "/images/cartable.png",
        "/images/cartable1.png",
        "/images/cartable2.png",
        "/images/cartable3.png",
      ];

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
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-white/40 flex justify-center items-center z-10"
        onClick={handleBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gradient-to-br z-50 from-purple-600 via-purple-800 to-black text-white p-4 rounded-lg relative"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {!selectedImage ? (
            <div className="flex flex-col gap-3 h-[380px] md:w-[700px] w-[230px]">
              <button
                className="text-pink-300 cursor-pointer self-start"
                onClick={onClose}
              >
                <div className="rounded border border-white">
                  <XMarkIcon className="h-8 w-8 text-white" />
                </div>
              </button>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-y-auto overflow-x-hidden custom-scrollbar">
                {images.map((src, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      alt={`modal-img-${index}`}
                      src={src}
                      width={200}
                      height={400}
                      className="!h-[150px] rounded-2xl cursor-pointer"
                      onClick={() => setSelectedImage(src)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <motion.div
              className="flex flex-col gap-2 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="text-pink-300 cursor-pointer self-start"
                onClick={() => setSelectedImage(null)}
              >
                <ArrowLeftIcon className="h-8 w-8 text-white" />
              </button>
              <TransformWrapper
                wheel={{ step: 80 }}
                doubleClick={{ disabled: false }}
                pinch={{ step: 5 }}
                zoomAnimation={{ animationTime: 300 }}
                panning={{ velocityDisabled: true }}
              >
                <TransformComponent>
                  <Image
                    alt="Selected"
                    src={selectedImage}
                    width={800}
                    height={800}
                    className="rounded-xl md:w-[600px] md:h-[350px] object-contain"
                  />
                </TransformComponent>
              </TransformWrapper>
            </motion.div>
          )}
        </motion.div>
        <div className="absolute inset-0" onClick={onClose} />
      </motion.div>
    </AnimatePresence>
  );
};

export default PictureModal;
