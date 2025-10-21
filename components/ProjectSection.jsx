"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Cartable",
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
    title: "Set Panel",
    description:
      "Admin panel for internal management at Hoshmand Sepehr with user-friendly interface.",
    image: "/images/panel.png",
    tag: ["all", "web"],
    imgUrl: "/images/panel.png",
  },
  {
    id: 4,
    title: "Set WebSite",
    description:
      "A responsive web platform featuring multimedia content and integrated video support.",
    image: "/images/set.png",
    tag: ["all", "web"],
    gitUrl: "",
    hasVideo: true,
    previewUrl: "https://set.bsi.ir/",
    videoSrc: "https://arashaltafi.ir/url_sample/mp4.mp4",
  },
  {
    id: 5,
    title: "Movie Site",
    description:
      "An online movie platform with browsing, streaming, and user-friendly navigation features.",
    image: "/images/movie.png",
    tag: ["all", "web"],
    gitUrl: "https://github.com/taniaa-sh/HyperMovie/tree/master",
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
    gitUrl: "https://github.com/taniaa-sh/weather-conditionsr/tree/master",
    previewUrl: "https://weather-conditions.vercel.app/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectsData.filter((project) => {
    project.tag.includes(tag);
  });

  return (
    <>
      <motion.h4
        whileInView={{ opacity: 1, x: -50 }}
        initial={{ opacity: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="!mb-10 font-semibold text-2xl md:text-4xl text-center text-pink-400"
        id="projects"
      >
        my projects
      </motion.h4>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
            />
            <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
            />
            <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
            />
        </div> */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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
    </>
  );
};

export default ProjectSection;
