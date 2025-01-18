"use client";
import { useEffect, useState } from "react";
import HomeBtn from "@/components/HomeBtn";
import Image from "next/image";
import bg from "../../../../public/background/project-bg.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
// import Robo from "@/components/models/Robo";
import { Environment } from "@react-three/drei";
import { Rocket } from "lucide-react";
import {motion} from "framer-motion";
import dynamic from "next/dynamic";

const Robo = dynamic(() => import("@/components/models/Robo"), { ssr: false });

const messages = [
  "Greetings, human! I’m Robo, your friendly guide in this digital ocean, led by Deepika!",
  "Let's explore some amazing projects together!",
  "Scroll down to see her projects and click on them to learn more.",
  "I am here to assist you with any questions you may have.",
  "Feel free to reach out to me via the Contact page.",
];

export default function Home() {
  const [dialogue, setDialogue] = useState(messages[0]);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setDialogue(messages[(messageIndex + 1) % messages.length]);
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [messageIndex]);

  return (
    <main className="relative flex w-full flex-col md:flex-row text-center">
      {/* Left side: Robo model and dialogue */}
      <div className="relative w-full md:w-1/3 flex  justify-center items-center z-10">
        {/* Bubble-shaped Dialogue Box Above Robo */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-10  lg:right-1/3 md:center-1/3  transform -translate-x-1/2 bg-cyan-950 p-4 rounded-lg shadow-lg w-64 md:w-72 text-center border border-cyan-800 after:content-[''] after:block after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:border-t-8 after:border-t-blue-300 after:border-l-8 after:border-l-transparent after:border-r-8 after:border-r-transparent animate-bounce"
        >
          <p className="text-sm text-slate-300">{dialogue}</p>
        </motion.div>

        {/* Robo Model */}
        <RenderModel>
          <Robo />
          <Environment preset="night" />
          <ambientLight intensity={3} />
        </RenderModel>
      </div>

      {/* Right side: Projects list with background image */}
      <div className="w-full h-full md:w-2/3 flex flex-col overflow-y-auto">
        {/* Background Image */}
        <Image
          priority
          sizes="100vw"
          src={bg}
          alt="background-image"
          className="w-full fixed top-0 left-0 h-full object-cover object-center opacity-35"
        />

        {/* Projects List */}
        <div className="w-full h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl text-center text-foreground font-bold mb-3">
              <Rocket size={40} className="inline-block mr-2" />
              My Projects
            </h1>
            <p className="text-md text-slate-100 text-center mb-5">
              A glimpse into my web development journey...
            </p>
          </motion.div>
          <div>
            <ProjectList projects={projectsData} />
          </div>
        </div>
      </div>
    </main>
  );
}
