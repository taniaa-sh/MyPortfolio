"use client";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  imgUrl?: string;
  gitUrl?: string;
  previewUrl?: string;
  hasVideo?: boolean;
  videoSrc?: string;
  previewModal?: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Cartable set",
    description:
      "A digital cartable system for Hoshmand Sepehr, managing documents efficiently.",
    image: "/images/cartable.png",
    tag: ["all", "web"],
    previewModal: true,
    imgUrl: "/images/cartable.png",
  },
  {
    id: 2,
    title: "HooshmandSepehr",
    description:
      "Official website for Hoshmand Sepehr, showcasing company services and portfolio.",
    image: "/images/hoshmandSepehr.png",
    tag: ["All", "Web"],
    previewUrl: "https://stsepehr.ir/",
  },
  {
    id: 3,
    title: "Admin panel",
    description:
      "Admin panel for internal management at Hoshmand Sepehr with user-friendly interface.",
    image: "/images/panel.png",
    tag: ["all", "web"],
    imgUrl: "/images/panel.png",
  },
  {
    id: 4,
    title: "Set",
    description:
      "A responsive web platform featuring multimedia content and integrated video support.",
    image: "/images/set.png",
    tag: ["all", "web"],
    gitUrl: "",
    previewUrl: "https://set.bsi.ir/",
  },
  {
    id: 5,
    title: "Movie",
    description:
      "An online movie platform with browsing, streaming, and user-friendly navigation features.",
    image: "/images/movie.png",
    tag: ["all", "web"],
    gitUrl: "https://github.com/taniaa-sh/HyperMovie",
  },
  {
    id: 6,
    title: "Ministry of Economy",
    description:
      "Administrative panel for the Ministry of Economy, designed for efficient workflow management.",
    image: "/images/eghtesad.png",
    tag: ["all", "web"],
    previewModal: true,
    imgUrl: "/images/eghtesad.png",
  },
  {
    id: 7,
    title: "Weather App",
    description:
      "Real-time weather application providing forecasts and conditions with interactive UI.",
    image: "/images/weather.png",
    tag: ["all", "web"],
    imgUrl: "/images/weather.png",
    gitUrl: "https://github.com/taniaa-sh/weather-conditions",
    previewUrl: "https://weather-conditions.vercel.app/",
  },
  {
    id: 9,
    title: "library",
    description:
      "An intuitive web platform for managing library resources, tracking books, and providing seamless.",
    image: "/images/library.png",
    tag: ["all", "web"],
    imgUrl: "/images/library.png",
    gitUrl: "https://github.com/taniaa-sh/library",
    previewUrl: "https://tani-library.vercel.app/",
  },
];

const ProjectSection = () => {
  return (
    <div id="projects">
      <h4 className="!mb-10 !mt-20 lg:!mt-0 font-semibold text-2xl md:text-4xl !text-center text-pink-400">
        My Projects
      </h4>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              hasVideo={project.hasVideo}
              videoSrc={project.videoSrc}
              previewModal={project.previewModal}
              id={project.id}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;