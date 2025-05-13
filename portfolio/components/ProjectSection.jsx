"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "project 1",
    description: "cartable site hoshmandSepehr",
    image: "/images/cartable.png",
    tag: ["all", "web"],
    gitUrl: "",
    hasVideo: true,
  },
  {
    id: 2,
    title: "project 2",
    description: "web site hoshmand sepehr",
    image: "/images/hoshmandSepehr.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://stsepehr.ir/",
  },
  {
    id: 3,
    title: "project 3",
    description: "panel hoshmand sepehr",
    image: "/images/panel.png",
    tag: ["all", "web"],
    gitUrl: "",
    hasVideo: true,
  },
  {
    id: 4,
    title: "project 4",
    description: "set webSite",
    image: "/images/set.png",
    tag: ["all", "web"],
    gitUrl: "",
    previewUrl: "https://set.bsi.ir/",
  },
  {
    id: 5,
    title: "project 5",
    description: "movie site",
    image: "/images/front-enddev1.png",
    tag: ["all", "web"],
    gitUrl: "/ت",
    hasVideo: true,
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
      <h4
        className="!mb-10 font-semibold text-4xl text-center text-pink-400"
        id="projects"
      >
        my projects
      </h4>
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
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            hasVideo={project.hasVideo}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
