"use client";

import { getVideoProps } from "next-video";
import { createPortal } from "react-dom";

export default function VideoModal({ isOpen, onClose, videoSrc }) {
  if (!isOpen) return null;

  const videoProps = getVideoProps(videoSrc);

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="relative w-full max-w-3xl p-4 bg-black rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl hover:text-red-500"
        >
          &times;
        </button>
        <video {...videoProps} controls className="rounded w-full h-auto" />
      </div>
    </div>,
    document.body
  );
}
