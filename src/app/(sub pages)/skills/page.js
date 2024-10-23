"use client";

import Image from "next/image";
import bg from "../../../../public/background/skills-bg.png";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaBootstrap,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import { useState } from "react";
import { FaUbuntu } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import {
  SiSocketdotio,
  SiExpress,
  SiMongodb,
  SiChakraui,
  SiThreedotjs,
  SiPostman,
} from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import cplus from "../../images/c++.png";
import c from "../../images/c.png";
import { VscVscode } from "react-icons/vsc";
import {motion} from "framer-motion";


export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillsData = {
    codingLanguages: [
      {
        name: "Python",
        icon: <FaPython className="text-3xl text-yellow-500" />,
      },
      {
        name: "C++",
        icon: <Image src={cplus} alt="C" width={40} height={40} />,
      }, // Placeholder icon
      { name: "Java", icon: <FaJava className="text-3xl text-red-600" /> },
      { name: "C", icon: <Image src={c} alt="C" width={40} height={40} /> },
      {
        name: "ubuntu",
        icon: <FaUbuntu className="text-3xl text-orange-500" />,
      },
      { name: "linux", icon: <FcLinux className="text-3xl text-black" /> },
    ],
    frontend: [
      { name: "HTML", icon: <FaHtml5 className="text-3xl text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-3xl text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <FaJs className="text-3xl text-yellow-500" />,
      },
      {
        name: "React.js",
        icon: <FaReact className="text-3xl text-blue-400" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-3xl text-black" />,
      },
      {
        name: "Three.js",
        icon: <SiThreedotjs className="text-3xl text-black" />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-3xl text-violet-900" />,
      },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-3xl text-cyan-400" />,
      },
      {
        name: "Chakra UI",
        icon: <SiChakraui className="text-3xl text-blue-500" />,
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-3xl text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-3xl text-black" />,
      },
      {
        name: "Socket.io",
        icon: <SiSocketdotio className="text-3xl text-black" />,
      },
    ],
    database: [
      { name: "SQL", icon: <FaDatabase className="text-3xl text-blue-700" /> },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-3xl text-green-700" />,
      },
    ],
    tools: [
      {
        name: "Postman",
        icon: <SiPostman className="text-3xl text-orange-600" />,
      }, // Placeholder icon
      {
        name: "VS Code",
        icon: <VscVscode className="text-3xl text-blue-500" />,
      },
      { name: "Github", icon: <FaGithub className="text-3xl text-black" /> },
      { name: "NPM", icon: <FaNpm className="text-3xl text-red-500" /> },
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full min-h-[80vh] relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="z-0 fixed w-full top-0 left-0 h-full object-cover object-center opacity-35"
      />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-transparent text-white ">
        <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === tab
                  ? "bg-cyan-700 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="w-full lg:w-[60%] 2xl:w-[40%] gap-6 flex flex-wrap justify-center ">
          {skillsData[activeTab].map((skill, idx) => (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              key={idx}
              className="w-[35%] md:w-[30%] shadow-glass-inset hover:shadow-glass-sm flex flex-col items-center bg-transparent rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              {skill.icon}
              <h3 className="mt-3 text-lg font-medium text-center">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
