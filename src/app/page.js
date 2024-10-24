"use client"
import Image from "next/image";
import bg from "../../public/background/home-bg.png";
import RenderModel from "@/components/RenderModel";
// import Mermaid from "@/components/models/Mermaid";
import Navigation from "@/components/navigation";
import { Environment } from "@react-three/drei";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Mermaid = dynamic(() => import("@/components/models/Mermaid"), {  ssr: false });

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between relative ">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="w-full h-full object-cover object-center opacity-35"
      />
      <motion.h1
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-base text-cyan-100 font-semi-bold text-center"
      >
        {`Hello👋, Welcome To Deepika's Portfolio`}
      </motion.h1>
      <div className="w-full h-screen">
        {/* navigation and 3d component goes here */}
        <Navigation />
        <RenderModel>
          <Mermaid />
          <Environment preset="night" />
          <ambientLight intensity={0.8} />
          <directionalLight intensity={2} position={[5, 10, 7]} />
        </RenderModel>
      </div>
    </main>
  );
}
