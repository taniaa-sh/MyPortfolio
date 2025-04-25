"use client"
import Lottie from "lottie-react";
import animationData from "@/app/animation/Animation - 1745590936190.json";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const Tab_Data = [
    {
        title: "skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                 <li>React</li>
                 <li>Next.js</li>
                 <li>JavaScript (ES6+)</li>
                 <li>TypeScript</li>
                 <li>Tailwind CSS</li>
                 <li>HTML5 & CSS3</li>
                 <li>Responsive Design & Mobile-First Development</li>
                 <li>Version Control with Git & GitHub</li>
                 <li>API Integration (RESTful APIs, GraphQL)</li>
                 <li>State Management (Redux, Context API)</li>
                 <li>UI/UX Design Principles</li>
            </ul>
        )
    },
    {
        title: "education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>
                Master of Technology and Information Management</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "Experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Front-End Developer at Hoshmand Sepehr</li>
            </ul>
        )
    },
]

const AboutSection = () => {

    const [tab,setTab] = useState("skills")
    const [pending,startTransition] = useTransition()

    const handleTabChange =(id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className="text-white" id="about">
            <div className="flex flex-col md:flex-row gap-8 items-center py-8 px-4 xl:gap-16 sm:py-14 xl:px-16">
                {/* <Image
                src={"/images/front-enddev1.png"}
                width={500}
                height={500}
                alt=""
                className="rounded-full"
                /> */}
            <div className="flex-1 flex justify-center items-center">
              <Lottie 
                animationData={animationData} 
                className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] aspect-square rounded-full" 
              />
            </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                    <p className="text-base lg:text-lg">                   
                      I am a passionate Front-End Developer with a strong focus on building responsive, user-friendly web applications. Currently working as a Junior Developer at Hoshmand Sepehr, I specialize in using React, Next.js, and Tailwind CSS to create modern and scalable web solutions. I have a deep understanding of JavaScript and TypeScript, and I enjoy working with Redux and React Context API for state management.
                      
                      With a keen interest in UI/UX design principles, I strive to create visually appealing and intuitive interfaces that enhance user experiences. As a constant learner, I am always eager to stay updated with the latest front-end technologies and best practices.
                      
                      I am passionate about problem-solving and collaborating with teams to bring innovative ideas to life. Currently, I am preparing to take the next step in my career by transitioning from a junior to a mid-level 
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"} >skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"} >education</TabButton>
                        <TabButton selectTab={() => handleTabChange("Experience")} active={tab === "Experience"} >Experience</TabButton>
                    </div>
                    <div className="mt-8">{Tab_Data.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection