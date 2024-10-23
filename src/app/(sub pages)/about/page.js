"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import bg from "../../../../public/background/about-bg.png";
import profile from "../../../app/images/profile1.jpg";
import {motion} from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaDownload,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaClipboardList,
} from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/24/solid"; // Import your desired icon
import { BriefcaseIcon } from "@heroicons/react/24/solid"; // Import an appropriate icon
import { AcademicCapIcon } from "@heroicons/react/24/solid"; // Import a relevant icon for education


 const experienceData = [
   {
     title: "Full Stack Developer Intern",
     company: "Brainovision Solutions India Pvt. Ltd",
     location: "Hyderabad, India", // Location of the experience
     duration: "Aug 2024 - Present", // Duration of the experience
     description:
       "Working on building real-time applications using Java, Spring Boot, and MERN stack.",
     website: "https://brainovision.org/", // External link for this experience
   },
   {
     title: "Web Development Intern",
     company: "InternPe",
     location: "Remote",
     duration: "Nov 2023 - Dec 2023",
     description:
       "Worked on web projects and successfully delivered projects and tasks, demonstrating strong problem-solving and collaboration skills.",
     website: "https://internpe.in/", // External link for this experience
   },
 ];


 const educationData = [
   {
     education: "Fellow at NxtWave's CCBP 4.0 Academy ",
     college: "NxtWave",
     location: "Hyderabad, India",
     description: "Industry Ready Certification in Full Stack and DSA",
     moreLink: "https://www.ccbp.in/", // Link for more details
   },
   {
     education: "B.Tech in Computer Science & Engineering",
     college: "GMR Institute of Technology",
     location: "Rajam, India",
     score: "CGPA: 9/10", // Academic Score
     description:
       "Focused on software development, data structures, and web technologies. Participated in coding competitions and worked on various projects involving full-stack development.",
     moreLink: "https://gmrit.edu.in", // Link for more details
   },
   {
     education: "Intermediate in MPC",
     college: "Sasi Junior College",
     location: "Rajamahendravaram, India",
     score: "Percentage: 96%",
     description:
       "Studied mathematics, physics, and chemistry, and developed a strong foundation in problem-solving and analytical thinking.",
     moreLink: "https://www.sasi.edu.in/", // Link for more details
   },
   {
     education: "SSC State Board",
     college: "Surya Deep E.M School",
     location: "Rajamahendravaram, India",
     score: "CGPA: 9.8/10",
     description:
       "Completed my secondary education with a focus on mathematics, science, and English language skills.",
     moreLink: "https://www.facebook.com/runbymanagement/", // Link for more details
   },
 ];





export default function AboutMe() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);
  const roles = ["Full Stack Developer", "Competitive Programmer"];

  // Typing Effect Logic
  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const isEnd = !isDeleting && typedText === currentRole;
      const isStart = isDeleting && typedText === "";

      if (isEnd) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isStart) {
        setIsDeleting(false);
        setLoopNum((prevLoop) => prevLoop + 1);
      }

      const nextText = isDeleting
        ? currentRole.substring(0, typedText.length - 1)
        : currentRole.substring(0, typedText.length + 1);

      setTypedText(nextText);
      setTypingSpeed(isDeleting ? 100 : 200);
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [typedText, isDeleting, loopNum]);

  return (
    <div className="w-full min-h-screen relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="z-0 fixed w-full top-0 left-0 h-full object-cover object-center opacity-35"
      />
      {/* Centered Introduction Section */}
      <div className="w-full h-[80vh] flex items-center justify-center text-white text-center">
        <div className="h-[80%] flex flex-col justify-around xs:items-start md:items-center space-x-10  sm:flex-row">
          {/* Introduction Text */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:text-center sm:text-left "
          >
            <h1 className="text-4xl  md:text-5xl font-bold mb-4">
              Hi all👋, I'm <span className="text-blue-400">Deepika</span>
            </h1>
            <p className=" text-2xl  md:text-3xl">
              I am a{" "}
              <span className="text-green-400 font-semibold ">{typedText}</span>
              <span className="blinking-cursor">|</span>
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/DeepikaBadiganti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white text-3xl hover:text-blue-500 transition-transform transform hover:scale-110" />
              </a>
              <a
                href="https://www.linkedin.com/in/deepikabadiganti/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white text-3xl hover:text-blue-500 transition-transform transform hover:scale-110" />
              </a>
              <a
                href="https://www.instagram.com/miss_deepika_1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white text-3xl hover:text-blue-500 transition-transform transform hover:scale-110" />
              </a>
              <a href="mailto:deepikabadiganti@gmail.com">
                <FaEnvelope className="text-white text-3xl hover:text-blue-500 transition-transform transform hover:scale-110" />
              </a>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="profile-picture-container relative inline-block sm:text-center"
          >
            <Image
              src={profile}
              alt="profile-picture"
              className="rounded-full w-64 h-64 sm:w-72 sm:h-72   object-cover shadow-lg"
            />
            <div className="glowing-ring absolute inset-0 rounded-full z-[-1] animate-glow"></div>
          </motion.div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="relative z-20 w-full  md:py-16 md:px-8  text-white flex flex-col items-center">
        <div className="flex items-center justify-center space-x-3 mb-4 text-teal-500">
          <InformationCircleIcon className="w-8 h-8 " /> {/* Icon */}
          <h2 className="text-4xl font-bold text-center">About Me</h2>
        </div>{" "}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <p className="text-lg mb-8 text-center md:text-justify">
            "I am a passionate web developer with a strong foundation in the
            MERN stack, dedicated to bringing creative visions to life through
            dynamic web applications. My journey in technology began with a deep
            curiosity for coding, and I have since honed my skills in
            programming languages such as C++, Python, and Java. I take pride in
            solving complex problems and have successfully completed numerous
            projects that showcase my ability to create user-centered websites.
            Always eager to learn and grow, I actively seek opportunities to
            enhance my skills and explore new tools and frameworks. My goal is
            to leverage my expertise to build websites that not only meet client
            expectations but also provide exceptional user experiences."
          </p>
          <p className="text-lg mb-4">
            Get my <span className="text-green-500 font-bold">Resume</span>{" "}
            here!
          </p>
          {/* Big Download Icon */}
          <motion.a
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 rounded-full p-6 shadow-lg transition-transform transform hover:bg-green-600 hover:scale-110 hover:shadow-xl"
          >
            <FaDownload className="text-white text-5xl transition-transform transform hover:scale-125" />
          </motion.a>
        </motion.div>
      </div>

      {/* Experience Section */}
      <div className="relative z-20 w-full py-16 md:px-8 sm:px-16 text-white">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <BriefcaseIcon className="w-8 h-8 text-teal-500" />{" "}
          {/* Icon beside the heading */}
          <h2 className="text-4xl font-bold text-center text-teal-500">
            Experience
          </h2>
        </div>
        <div className="max-w-screen-md mx-auto space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              key={index}
              className="relative group"
            >
              <div className="border-l-4 border-blue-500 pl-8 transition-transform group-hover:translate-x-2">
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <p className="text-gray-400">{exp.company}</p>
                {/* Location with Icon */}
                <div className="flex items-center text-gray-400 mt-2">
                  <FaMapMarkerAlt className="mr-2" />
                  {exp.location}
                </div>

                {/* Duration with Icon */}
                <div className="flex items-center text-gray-400 mt-2">
                  <FaCalendarAlt className="mr-2" />
                  {exp.duration}
                </div>
                <p className="mt-2">{exp.description}</p>

                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-4 text-blue-400 hover:text-blue-600 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Section (Timeline-Like) */}
      <div className="relative z-20 w-full py-16 md:px-8 sm:px-16 text-white">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <AcademicCapIcon className="w-8 h-8 text-teal-500" />{" "}
          {/* Icon beside the heading */}
          <h2 className="text-4xl font-bold text-center text-teal-500">
            Education
          </h2>
        </div>

        {/* Education Entries */}
        <div className="space-y-12 max-w-screen-lg mx-auto ">
          {educationData.map((edu, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-8 p-6 shadow-glass-inset 
       hover:shadow-glass-sm rounded-lg transition-shadow"
            >
              {/* Left Section: Education Info */}
              <div className="flex-shrink-0 sm:w-1/3 ">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  <FaGraduationCap className="inline-block mr-2" />
                  {edu.education}
                </h3>
                <p className="text-lg text-gray-400 mb-2">
                  <FaClipboardList className="inline-block mr-2" />
                  {edu.college}
                </p>

                {/* Location and Score */}
                <div className="text-gray-400 mb-4">
                  <FaMapMarkerAlt className="inline-block mr-2" />
                  {edu.location}
                </div>
                <div className="font-semibold text-blue-300">{edu.score}</div>
              </div>

              {/* Right Section: Description */}
              <div className="flex-grow">
                <p className="text-gray-300 mb-4">{edu.description}</p>

                {/* View More Button */}
                <a
                  href={edu.moreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-600 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  View More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
