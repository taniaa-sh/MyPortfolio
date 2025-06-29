'use client';

import React from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      <Dialog.Panel className="relative z-50 w-[90vw] max-w-4xl bg-black rounded-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 z-10 cursor-pointer"
        >
          <X size={20} />
        </button>

        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full h-full rounded-2xl"
        />
      </Dialog.Panel>
    </Dialog>
  );
};

export default VideoModal;
