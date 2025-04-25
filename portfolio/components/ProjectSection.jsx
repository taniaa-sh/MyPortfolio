"use client"
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
    {
        id: 1,
        title: "React portfolio",
        description: "project1",
        image:"/images/front-enddev1.png",
        tag: ["all","web"],
        gitUrl:"/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "React portfolio",
        description: "project2",
        image:"/images/front-enddev1.png",
        tag: ["All","Web"],
        gitUrl:"/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "React portfolio",
        description: "project3",
        image:"/images/front-enddev1.png",
        tag: ["all","web"],
        gitUrl:"/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "React portfolio",
        description: "project4",
        image:"/images/front-enddev1.png",
        tag: ["all","web"],
        gitUrl:"/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "React portfolio",
        description: "project5",
        image:"/images/front-enddev1.png",
        tag: ["all","web"],
        gitUrl:"/",
        previewUrl: "/"
    },
]
const ProjectSection = () => {
    const[tag,setTag] = useState("All")

    const handleTagChange =(newTag) =>{
        setTag(newTag)
    }

    const filteredProject = projectsData.filter((project)=>{
        project.tag.includes(tag)
    })

    return (
        <>
        <h4 className="mb-10 font-semibold text-4xl text-center" id="projects">my projects</h4>
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
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">{projectsData.map((project) => 
            <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />
            )}
        </div>
        </>
    );
}

export default ProjectSection