import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { FaEye } from 'react-icons/fa'; // Import the view iconimport chatbuddy from '../../app..'; // Import the project image
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


export const projectImages = {
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

import Image from 'next/image';
 // Import the project image

const ProjectLayout = ({ name, description, demoLink, sourceLink, videoLink ,technologies}) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleModal = () => setIsOpen(!isOpen);
  const image = projectImages[name];



  return (
    <div
      
      className="relative w-80 h-52 cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform duration-300 "
    >
      <Image
        src={projectImages[name]}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end p-4 bg-gradient-to-t from-cyan-500/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-cyan-950 font-bold text-xl">{name}</h2>
        <div
          onClick={toggleModal}
          className="mt-2 text-cyan-950 hover:text-cyan-600 cursor-pointer"
        >
          <FaEye className="text-3xl" />
        </div>
      </div>

      {/* Popup modal */}
      {isOpen && (
        <ProjectModal
          project={{
            name,
            description,
            demoLink,
            sourceLink,
            videoLink,
            image,
            technologies,
          }}
          onClose={toggleModal}
        />
      )}
    </div>
  );
};

export default ProjectLayout;
