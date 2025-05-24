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

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  hasVideo,
  videoSrc,
  previewModal,
  id
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pictureModal,setPictureModal] = useState(false);
  const [pictureModal2,setPictureModal2] = useState(false);

  return (
    <>
      {hasVideo && videoSrc && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          videoSrc={videoSrc}
        />
      )}
      {
        pictureModal && (
          <PictureModal 
          onClose={() => setPictureModal(false)}
          isOpen={pictureModal}
          />
        )
      }
            {
        pictureModal2 && (
          <PictureModal 
          onClose={() => setPictureModal(false)}
          isOpen={pictureModal}
          isPanel
          />
        )
      }
      <div className="w-full overflow-hidden">
        <div className="relative h-60 md:h-80 group rounded-t-2xl !overflow-hidden">
          <img
            src={imgUrl}
            alt="project"
            className="w-full h-full object-fill"
          />
          <div
            className="items-center justify-center overlay absolute !top-0 !left-0 w-full h-full bg-[#181818]/40 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            {previewModal && (
              <div
                onClick={() => setPictureModal(true)}
                className="relative h-14 w-14 rounded-full border-3 border-white hover:border-pink-500 group/link cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center hover:text-pink-50">
                  <EyeIcon className="h-8 w-8 text-white group-hover/link:text-white hover:text-pink-500" />
                </div>
              </div>
            )}
            {id == 3 && (
                            <div
                            onClick={() => setPictureModal2(true)}
                            className="relative h-14 w-14 rounded-full border-3 border-white hover:border-pink-500 group/link cursor-pointer"
                          >
                            <div className="absolute inset-0 flex items-center justify-center hover:text-pink-50">
                              <EyeIcon className="h-8 w-8 text-white group-hover/link:text-white hover:text-pink-500" />
                            </div>
                          </div>
            )}
            {gitUrl && (
              <Link
                href={gitUrl ? gitUrl : ""}
                className="h-14 w-14 !mr-2 border-3 rounded-full border-white hover:border-pink-500 group/link flex items-center justify-center"
              >
                <CodeBracketIcon className="h-8 w-8 text-white hover:text-pink-500 group-hover/link:text-white" />
              </Link>
            )}
            {hasVideo && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="h-14 w-14 !mr-2 border-3 relative rounded-full border-white hover:border-pink-500 group/link"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayIcon className="h-8 w-8 text-white hover:text-pink-500 cursor-pointer group-hover/link:text-white" />
                </div>
              </button>
            )}
            {previewUrl && (
              <Link
                href={previewUrl}
                className="relative h-14 w-14 rounded-full border-3 border-white hover:border-pink-500 group/link"
              >
                <div className="absolute inset-0 flex items-center justify-center hover:text-pink-50">
                  <EyeIcon className="h-8 w-8 text-white group-hover/link:text-white hover:text-pink-500" />
                </div>
              </Link>
            )}
          </div>
        </div>
        <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
          <h5 className="font-xl font-semibold !mb-2 text-pink-400">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
