"use client"
import Image 
from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const Tab_Data = [
    {
        title: "skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>React</li>
                <li>Tailwind</li>
                <li>Next js</li>
                <li>java script</li>
                <li>Type script</li>
            </ul>
        )
    },
    {
        title: "education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>React</li>
                <li>kkkk</li>
                <li>Next js</li>
                <li>java script</li>
                <li>Type script</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "Experience",
        content: (
            <ul className="list-disc pl-2">
                <li>React</li>
                <li>Tailwind</li>
                <li>Next js</li>
                <li>java script</li>
                <li>Type script</li>
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
        <section className="text-white">
            <div className="flex flex-col md:flex-row gap-8 items-center py-8 px-4 xl:gap-16 sm:py-14 xl:px-16">
                <Image
                src={"/images/front-enddev1.png"}
                width={500}
                height={500}
                alt=""
                className="rounded-full"
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                    <p className="text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus ipsa deleniti, quia dolores et ab exercitationem, quidem suscipit quos vel voluptatibus voluptates perspiciatis quae voluptatem magni saepe molestias reprehenderit?</p>
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