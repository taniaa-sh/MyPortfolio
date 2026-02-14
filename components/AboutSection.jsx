"use client";

import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import LottieComponent from "./LottieComponent";

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
        {/* <li>HTML5 & CSS3</li> */}
        <li>Responsive Design & Mobile-First Development</li>
        <li>Version Control with Git & GitHub</li>
        {/* <li>API Integration (RESTful APIs, GraphQL)</li> */}
        <li>State Management (Redux, Context API)</li>
        {/* <li>UI/UX Design Principles</li> */}
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Master of Technology and Information Management</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Front-End Developer at Hoshmand Sepehr</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [pending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white !mt-20" id="about">
      <motion.h2
        className="w-full text-2xl md:text-4xl font-bold !text-center text-pink-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About me
      </motion.h2>

      <motion.div
        className="flex flex-col lg:flex-row items-center px-4 xl:gap-16 lg:py-14 xl:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <LottieComponent />
        </motion.div>

        <motion.div
          className="text-left flex flex-col h-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-base lg:text-lg text-justify">
            I am a passionate Front-End Developer with a strong focus on
            building responsive, user-friendly web applications. Currently
            working as a Junior Developer at Hoshmand Sepehr, I specialize in
            using React, Next.js, and Tailwind CSS to create modern and scalable
            web solutions. I have a deep understanding of JavaScript and
            TypeScript, and I enjoy working with Redux and React Context API for
            state management. With a keen interest in UI/UX design principles, I
            strive to create visually appealing and intuitive interfaces that
            enhance user experiences. As a constant learner, I am always eager
            to stay updated with the latest front-end technologies and best
            practices. I am passionate about problem-solving and collaborating
            with teams to bring innovative ideas to life. Currently, I am
            preparing to take the next step in my career by transitioning from a
            junior to a mid-level
          </p>

          <motion.div
            className="flex flex-row !mt-8 !cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experience")}
              active={tab === "Experience"}
            >
              Experience
            </TabButton>
          </motion.div>

          <motion.div
            className="!mt-8"
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {Tab_Data.find((t) => t.id === tab).content}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
