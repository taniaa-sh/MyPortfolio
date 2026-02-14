"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const PictureModal = ({
  setShowModal,
  isPanel,
  onClose,
  isPanelEghtesad,
  isOpen,
}) => {
  if (!isOpen) return null;
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
    : isPanelEghtesad
      ? [
          "/images/eghtesad.png",
          "/images/eghtesad1.png",
          "/images/eghtesad2.png",
          "/images/eghtesad3.png",
          "/images/eghtesad4.png",
          "/images/eghtesad5.png",
        ]
      : [
          "/images/cartable.png",
          "/images/cartable1.png",
          "/images/cartable2.png",
          "/images/cartable3.png",
        ];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      if (selectedImage) setSelectedImage(null);
      else setShowModal(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-purple-600 via-purple-800 to-black text-white p-4 rounded-xl w-full max-w-[700px] max-h-[90vh] flex flex-col"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex justify-between items-center mb-2">
              {selectedImage && (
                <button onClick={() => setSelectedImage(null)}>
                  <ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
                </button>
              )}
              <button onClick={onClose}>
                <XMarkIcon className="h-8 w-8 text-white cursor-pointer" />
              </button>
            </div>

            {!selectedImage ? (
              <div className="px-6 md:px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 overflow-y-auto custom-scrollbar max-h-[70vh] overflow-x-hidden">
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
                      height={200}
                      className="w-full h-[120px] md:h-[150px] object-cover rounded-xl cursor-pointer"
                      onClick={() => setSelectedImage(src)}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex-1 flex justify-center items-center !cursor-zoom-in">
                <TransformWrapper
                  wheel={{ step: 50 }}
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
                      className="w-full max-w-full max-h-[70vh] object-contain rounded-xl"
                    />
                  </TransformComponent>
                </TransformWrapper>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PictureModal;
