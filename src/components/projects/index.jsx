"use client";
import React from "react";
import ProjectLayout from "./ProjectLayout";

import {motion} from "framer-motion";

const ProjectList = ({ projects }) => {
  return (
    <div
   
      className="flex flex-col h-full  md:max-h-[65vh] overflow-y-auto"
    >
      <div className="w-full gap-10 flex flex-wrap justify-center items-center p-2">
        {projects.map((project, index) => (
          <ProjectLayout key={index} {...project} />
        ))}
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        /* Scrollbar styles for Webkit browsers */
        ::-webkit-scrollbar {
          width: 12px; /* Width of the scrollbar */
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1); /* Track color */
        }

        ::-webkit-scrollbar-thumb {
          background: cyan; /* Thumb color */
          border-radius: 10px; /* Rounded corners */
        }

        ::-webkit-scrollbar-thumb:hover {
          background: darkcyan; /* Thumb color on hover */
        }

        /* Scrollbar styles for Firefox */
        scrollbar-width: thin; /* Thin scrollbar */
        scrollbar-color: cyan rgba(255, 255, 255, 0.1); /* Thumb color and track color */
      `}</style>
    </div>
  );
};

export default ProjectList;
