import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animation effects
import image1 from "/public/clothsKart.png"; // Importing the image for the first project
import image2 from "/public/news.png"; // Importing the image for the second project
<<<<<<< HEAD
import image3 from "/public/personaleditor.png"; // Importing the image for the third project
import image4 from "/public/supabse.png"; // Importing the image for the fourth project
=======
import image3 from "/public/Personaleditor.png"; // Importing the image for the third project
import image4 from "/public/portfolio.png"; // Importing the image for the fourth project
import image5 from "/public/Checklist.png"
>>>>>>> 35f5a5e2fc946ab19e5cbc5ee0fefa41a4f0e9c7
import "./project.css"; // Importing the CSS file for styling
import { BsGithub } from "react-icons/bs"; // Importing GitHub icon from React Icons
import { SiNetlify } from "react-icons/si"; // Importing Netlify icon from React Icons

// Defining an array of project data with detailed information for each project
const projectData = [
  {
    // First Project:Supabse Authentication System
    image: image4,
    title: "Supabase Authentication System",
    description:
<<<<<<< HEAD
      "A secure, responsive authentication system built with React, Supabase, and Tailwind CSS. Features email/password login, social OAuth (Google/GitHub), protected routes, session management, and a dynamic user dashboard with search functionality.it serves as a strong foundation for any web application requiring robust authentication, such as SaaS platforms, admin dashboards, or user portals.",
    technologies: ["React", "Supabase", "Tailwind CSS", "React Context"],
    source_code:
      "https://github.com/MohdAzimuddin/React_Supabse_Authentication",
    live_demo: "https://react-supabse-authentication.vercel.app",
  },
  {
    // First Project: ClothsKart - e-commerce application
    image: image1,
    title: "ClothsKart: e-commerce web Application",
    description:
      "ClothsKart front-end project, a responsive experience showcasing a curated selection of classic suits. Built with React.js, Vanilla CSS, React Router DOM, and React Icons, this project allows users to effortlessly add products to their cart, apply coupon codes and view their order total. animations by Framer Motion enhance the user interface.",
    technologies: ["React", "CSS", "React-Router-dom", "Framer-Motion"],
    source_code: "https://github.com/MohdAzimuddin/ClothsKart",
    live_demo: "https://azimuddin-clothskart.netlify.app/",
=======
      "ClothsKart front-end project, a responsive experience showcasing a curated selection of classic suits. Built with React.js, Vanilla CSS, React Router DOM, and React Icons, this project allows users to effortlessly add products to their cart, apply coupon codes and view their order total. animations by Framer Motion enhance the user interface.", 
    technologies: ["React", "CSS", "React-Router", "Framer-Motion"], 
    source_code: "https://github.com/MohdAzimuddin/ClothsKart", 
    live_demo: "https://azimuddin-clothskart.netlify.app/", 
>>>>>>> 35f5a5e2fc946ab19e5cbc5ee0fefa41a4f0e9c7
  },
  {
    // Second Project: Live News Web Application
    image: image2,
    title: "Live News web-Application",
    description:
      "AtoZ NewsWeb is a dynamic, responsive web application designed to deliver the latest news from around the globe. Powered by the NewsAPI, this application keeps you informed with breaking headlines, trending stories, and in-depth articles across various categories, including technology, business and more. Built with React and styled with modern CSS.",
    technologies: ["React", "CSS", "Framer-Motion"],
    source_code: "https://github.com/MohdAzimuddin/livenews",
    live_demo: "https://atozlive-news.netlify.app/",
  },
  {
    // Third Project: Personal Code Editor
    image: image3,
    title: "Personal Code Editor",
    description:
      "HTML,CSS,JavaScript Editor A lightweight online code editor for writing and testing HTML, CSS, and JavaScript with live preview. The editor updates the output in real-time and is fully responsive. Features include clear buttons for each section and the ability to reset the output area independently.",
    technologies: ["HTML", "CSS", "JavaScript"],
    source_code: "https://github.com/MohdAzimuddin/codeeditor",
    live_demo: "https://1codeeditor.netlify.app/",
  },
<<<<<<< HEAD
=======
  {
    // Fifth Project: Personal Portfolio Website
    image: image5, 
    title: "Simple Task Management Web App", 
    description:
      "A Check List App built with React & Tailwind CSS, featuring dark mode, local storage support, and task completion tracking Easily add, delete, and mark tasks as complete while enjoying a sleek and responsive UI. Hosted on Vercel for seamless deployment.", 
    technologies: ["React", "Tailwind CSS"], 
    source_code: "https://github.com/MohdAzimuddin/Checklist", 
    live_demo: "https://checklist-mohdazimuddin-chi.vercel.app/",
    },
  {
    // Fourth Project: Personal Portfolio Website
    image: image4, 
    title: "Personal Portfolio Web Site", 
    description:
      "Crafted a fully responsive personal portfolio website using React, CSS, Framer Motion, and React Icons. It features a sleek, modern design with smooth animations and an intuitive user experience to showcase my skills and projects effectively with a clean design.", 
    technologies: ["React", "CSS", "Framer-Motion"], 
    source_code: "https://github.com/MohdAzimuddin/myportfolio", 
    live_demo: "https://mohdazimuddinport.netlify.app",
    },
  
>>>>>>> 35f5a5e2fc946ab19e5cbc5ee0fefa41a4f0e9c7
];

// Component for applying scroll animations using Framer Motion
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "6.25rem" }} // Initial state: hidden and below the viewport
      whileInView={{ opacity: 1, y: 0 }} // Final state: visible and in position
      transition={{ duration: 0.8 }} // Duration of the animation
    >
      {children}
    </motion.div>
  );
};

// Component for displaying individual project cards
const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="project-card">
        {" "}
        {/* Card container for each project */}
        <img
          src={project.image} // Dynamic project image
          alt={`${project.title} image`} // Alt text for accessibility
          className="project-image" // CSS class for styling
        />
        <div className="project-details">
          {" "}
          {/* Container for project details */}
          <div className="project-text">
            {" "}
            {/* Text section of the project */}
            <div>
              <h3 className="project-title">{project.title}</h3>{" "}
              {/* Project title */}
              <p className="project-description">{project.description}</p>{" "}
              {/* Project description */}
            </div>
            <div className="project-technologies">
              {" "}
              {/* Technologies used */}
              {project.technologies.map((tech, index) => (
                <span key={index} className="project-tech">
                  {tech}
                </span>
              ))}
            </div>
            <div>
              <div className="Project-icon">
                {" "}
                {/* Section for links */}
                {/* Source Code Link */}
                <div className="icon-anchor">
                  <div className="icon-anchor-tag">
                    <a
                      href={project.source_code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-source-code icon"
                    >
                      <BsGithub className="project-github-icon" />{" "}
                      <span>Source Code</span>
                    </a>
                  </div>
                  {/* Live Demo Link */}
                  <div className="icon-anchor-tag">
                    <a
                      href={project.live_demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-Live-Demo icon"
                    >
                      <SiNetlify className="project-netlify-icon" />{" "}
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

// Main Projects component displaying all project cards
const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      {" "}
      {/* Container for the projects section */}
      <ScrollReveal>
        <h1 className="projects-heading">Selected Projects</h1>{" "}
        {/* Section heading */}
      </ScrollReveal>
      <div className="projects-list">
        {" "}
        {/* List of project cards */}
        {projectData.map((currProject, index) => (
          <ProjectCard key={index} project={currProject} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
