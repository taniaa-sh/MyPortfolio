"use client";
import Navbar from "@/components/Navbar";
import Support from "@/components/Support";
import TabButton from "@/components/TabButton";
import React, { useState, useTransition } from "react";

export default function Page() {
  const Tab_Data = [
    {
      title: "skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-4 space-y-1 text-gray-300">
          <li>
            <strong>React / Next.js:</strong> Building fast and modern web apps with routing, SSR, and component-based architecture.
          </li>
          <li>
            <strong>JavaScript / TypeScript:</strong> Writing clean, typed, and maintainable logic using modern ES6+ features.
          </li>
          <li>
            <strong>Tailwind CSS:</strong> Designing responsive and beautiful UI with utility-first approach.
          </li>
          <li>
            <strong>Responsive Design:</strong> Mobile-first design and layout optimizations across screen sizes.
          </li>
          <li>
            <strong>Git & GitHub:</strong> Version control, branching strategies, and collaborative development.
          </li>
          <li>
            <strong>State Management:</strong> Using Redux and React Context API for efficient app-wide state handling.
          </li>
        </ul>
      ),
    },
    {
      title: "education",
      id: "education",
      content: (
        <ul className="list-disc pl-4 space-y-1 text-gray-300">
          <li>Master of Technology and Information Management</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "Experience",
      content: (
        <ul className="list-disc pl-4 space-y-1 text-gray-300">
          <li>Front-End Developer at Hoshmand Sepehr</li>
        </ul>
      ),
    },
  ];

  const [tab, setTab] = useState("skills");
  const [pending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#121212] text-white px-4 md:px-8 xl:px-16 py-10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-2/3 space-y-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-4">
              About Me
            </h1>
            <p className="text-base sm:text-lg text-justify leading-relaxed text-gray-300">
              I am a passionate Front-End Developer with a strong focus on
              building responsive, user-friendly web applications. Currently
              working as a Junior Developer at Hoshmand Sepehr, I specialize in
              using React, Next.js, and Tailwind CSS to create modern and scalable
              web solutions. I have a deep understanding of JavaScript and
              TypeScript, and I enjoy working with Redux and React Context API for
              state management. With a keen interest in UI/UX design principles, I
              strive to create visually appealing and intuitive interfaces that
              enhance user experiences. I am always eager to stay updated with the
              latest front-end technologies and best practices. I am passionate
              about problem-solving and collaborating with teams to bring
              innovative ideas to life. Currently, I am preparing to take the next
              step in my career by transitioning from a junior to a mid-level.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {Tab_Data.map((tabItem) => (
                <TabButton
                  key={tabItem.id}
                  selectTab={() => handleTabChange(tabItem.id)}
                  active={tab === tabItem.id}
                >
                  {tabItem.title}
                </TabButton>
              ))}
            </div>

            <div key={tab} className="transition-all duration-300">
              {Tab_Data.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="rounded-xl shadow-md p-6 flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-purple-300 mb-4">Need Help?</h2>
            <Support />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
