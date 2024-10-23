import React, { useEffect, useState } from "react";

import chatbuddy from '../../app/images/chatbuddy.png';
import civicwatch from '../../app/images/civicwatch.png';
import appstore from '../../app/images/appstore.png';
import blogs from '../../app/images/blogs.png';
import ecommerce from '../../app/images/ecommerce.png';
import foodmunch from '../../app/images/foodmunch.png';
import ipl from '../../app/images/ipl.png';
import matchgame from '../../app/images/matchgame.png';
import netflix from '../../app/images/netflix.png';
import nxttrendz from '../../app/images/nxttrendz.png';
import nxtwatch from '../../app/images/nxtwatch.png';
import rps from '../../app/images/rps.png';
import todo from '../../app/images/todo.png';
import Image from "next/image";

const projectImages = {
  "Chat-Buddy": chatbuddy,
  "Civic Watch": civicwatch,
  "Match Game": matchgame,
  "Nxt Watch": nxtwatch,
  "Nxt Trendz": nxttrendz,
  "Rock Paper Scissors": rps,
  "IPL Dash Board": ipl,
  "Netflix Clone": netflix,
  "Eccomerce website": ecommerce,
  "App Store": appstore,
  "Blogs website": blogs,
  "My Todo App": todo,
  "FoodMunch website": foodmunch,
};

const ProjectModal = ({ project, onClose  }) => {
  const [isVisible, setIsVisible] = useState(false);

  // This effect triggers the animation when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Delay the actual close until after the animation
  };

  const name = project.name;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-gray-800 bg-opacity-50 p-8 rounded-xl max-w-4xl  w-[90vw] h-[70vh] overflow-scroll lg:overflow-visible relative border border-cyan-400 shadow-lg transform transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-90"
        }`}
      >
        {/* Close Button (Replaced with an Icon) */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-cyan-400 hover:text-cyan-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Project Title */}
        <h2 className="text-4xl font-bold text-cyan-500 tracking-wide mb-4">
          {project.name}
        </h2>

        <div className="lg:grid lg:grid-cols-2 gap-8">
          {/* Project Description */}
          <div className="text-gray-300 " style={{ textAlign: "justify" }}>
            <h3 className="text-lg font-bold mb-2 gap-2">Description</h3>
            <p className="text-base leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Technologies Section */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3 mt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-white bg-cyan-500 py-1 px-3 rounded-full text-sm shadow-md hover:bg-cyan-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="mt-10 lg:mt-0 flex items-center justify-center flex-col">
            <Image
              src={projectImages[name]}
              alt={project.name}
              className="w-auto h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-5 space-x-4 mt-8">
              {project.videoLink && (
                <a
                  href={project.videoLink}
                  className="relative py-2 px-6 text-cyan-500 border-2 border-cyan-500 rounded-lg overflow-hidden group hover:text-white transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute left-0 top-0 w-full h-full bg-cyan-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative z-10">Watch Demo</span>
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  className="relative py-2 px-6 text-cyan-500 border-2 border-cyan-500 rounded-lg overflow-hidden group hover:text-white transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute left-0 top-0 w-full h-full bg-cyan-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative z-10">Deployment Link</span>
                </a>
              )}
              {project.sourceLink && (
                <a
                  href={project.sourceLink}
                  className="relative py-2 px-6 text-cyan-500 border-2 border-cyan-500 rounded-lg overflow-hidden group hover:text-white transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute left-0 top-0 w-full h-full bg-cyan-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative z-10">Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
