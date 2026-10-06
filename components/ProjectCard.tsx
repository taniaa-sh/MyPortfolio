"use client";

import {
  CodeBracketIcon,
  EyeIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import VideoModal from "./VideoModal";
import PictureModal from "./PictureModal";
import Image from "next/image";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl?: string;
  previewUrl?: string;
  hasVideo?: boolean;
  videoSrc?: string;
  previewModal?: boolean;
  id: number;
}

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  hasVideo = false,
  videoSrc,
  previewModal,
  id,
}: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [pictureModal, setPictureModal] = useState<boolean>(false);
  const [pictureModal2, setPictureModal2] = useState<boolean>(false);
  const [pictureModal3, setPictureModal3] = useState<boolean>(false);

  const iconButtonClass =
    "relative flex items-center justify-center h-10 w-10 md:h-14 md:w-14 rounded-full border-3 border-white hover:border-pink-500 group/link cursor-pointer transition-colors duration-300";

  const iconClass =
    "h-6 w-6 md:h-8 md:w-8 text-white group-hover/link:text-pink-500 transition-colors duration-300";

  return (
    <>
      {hasVideo && videoSrc && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          videoSrc={videoSrc}
        />
      )}

      {pictureModal && (
        <PictureModal
          onClose={() => setPictureModal(false)}
          isOpen={pictureModal}
        />
      )}

      {pictureModal2 && (
        <PictureModal
          onClose={() => setPictureModal2(false)}
          isOpen={pictureModal2}
          isPanel
        />
      )}

      {pictureModal3 && (
        <PictureModal
          onClose={() => setPictureModal3(false)}
          isOpen={pictureModal3}
          isPanelEghtesad
        />
      )}

      <div className="w-full overflow-hidden">
        <div className="relative h-60 md:h-80 group rounded-t-2xl !overflow-hidden">
          <Image
            src={imgUrl}
            alt="project"
            className="!w-full !h-full object-fill"
            width={10}
            height={10}
          />

          <div
            className="items-center justify-center overlay absolute top-0 left-0 w-full h-full bg-[#181818]/40 flex md:hidden md:group-hover:flex transition-all duration-500"
            style={{ backdropFilter: "blur(2px)" }}
          >
            {id === 3 && (
              <button
                type="button"
                onClick={() => setPictureModal2(true)}
                className={iconButtonClass}
              >
                <EyeIcon className={iconClass} />
              </button>
            )}

            {id === 6 && (
              <button
                type="button"
                onClick={() => setPictureModal3(true)}
                className={iconButtonClass}
              >
                <EyeIcon className={iconClass} />
              </button>
            )}

            {id === 1 && (
              <button
                type="button"
                onClick={() => setPictureModal(true)}
                className={iconButtonClass}
              >
                <EyeIcon className={iconClass} />
              </button>
            )}

            {gitUrl && (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={gitUrl}
                className={`${iconButtonClass} !mr-2`}
              >
                <CodeBracketIcon className={iconClass} />
              </Link>
            )}

            {hasVideo && (
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className={`${iconButtonClass} !mr-2`}
              >
                <PlayIcon className={iconClass} />
              </button>
            )}

            {previewUrl && (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={previewUrl}
                className={iconButtonClass}
              >
                <EyeIcon className={iconClass} />
              </Link>
            )}
          </div>
        </div>

        <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
          <h5 className="font-xl font-semibold !mb-2 text-pink-400">
            {title}
          </h5>

          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;