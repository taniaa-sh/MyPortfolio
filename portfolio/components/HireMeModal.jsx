"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const HireMeModal = (props) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    props.setShowModal(false);
    setIsClosing(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
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
      <div className="bg-gradient-to-br z-50 from-purple-600 via-purple-800 to-black text-white p-6 rounded-lg max-w-sm w-full flex flex-col gap-4">
        <h2 className="text-2xl !mb-4">Contact Information</h2>
        <Link
          href="mailto:taniashafiee78@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email: taniashafiee78@gmail.com
        </Link>

        <Link
          target="_blank"
          href={"tel:100063"}
          onClick={() => window.open("tel:100063")}
        >
          Phone: 09332080083
        </Link>
        <Link
          target="_blank"
          href={"https://linkedin.com/in/tania-shafiee"}
          onClick={() => window.open("https://linkedin.com/in/tania-shafiee")}
        >
          LinkedIn: linkedin.com/in/tania-shafiee
        </Link>
        <button
          className="cursor-pointer !mt-4 w-full sm:w-fit px-4 py-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HireMeModal;
