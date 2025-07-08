import React from "react";
import image from "/public/my_pic.png"; // Importing the image to be displayed
import { motion } from "framer-motion"; // Importing Framer Motion for animation effects
import "./hero.css"; // Import the CSS file
 
const Hero = () => {
  return (
    <div id="home" className="hero-container">
      <div className="hero-content">
        {/* Image Container with Animation */}
        <motion.div
          initial={{ y: -50, opacity: 0 }} // Starting position: Moves up and invisible
          animate={{ y: 0, opacity: 1 }} // Ending position: Moves to its original position and visible
          transition={{ duration: 0.8, delay: 0.4 }} // Animation duration and delay
        >
          <img
            src={image}
            alt="my_image"
            className="hero-image"
          />
        </motion.div>

        {/* Text Section with Animation */}
        <motion.div
          initial={{ y: 50, opacity: 0 }} // Starting position: Moves down and invisible
          animate={{ y: 0, opacity: 1 }} // Ending position: Moves up and visible
          transition={{ duration: 0.8, delay: 0.2 }} // Animation duration and delay
          className="hero-text-container"
        >
          <h1 className="hero-heading">Mohammed Azeemuddin</h1>
          <h3 className="hero-subheading">Frontend Developer</h3>
          <p className="hero-description">
<<<<<<< HEAD
         I’m a passionate Front-End Developer with expertise in HTML, CSS, JavaScript, and React.js. I specialize in building responsive, interactive web applications that deliver seamless and engaging user experiences. I enjoy transforming creative ideas into functional, visually appealing interfaces with clean, modern code. Always eager to take on new challenges, I’m committed to continuously learning and applying my skills to craft user-focused digital solutions that make an impact.
          </p>
          <div className="hero-resume">
          <a
            href="https://github.com/MohdAzimuddin/newresume/raw/main/Mohd_Azimuddin_Frontend_Developer_Resume.pdf"
            download="Mohd_Azimuddin_Frontend_Developer_resume.pdf"
=======
          I am a passionate Front-End Developer skilled in React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS. I specialize in building responsive, interactive, and high-performance web applications with a focus on user experience and modern design. Currently, I’m expanding my expertise in Next.js to create even more scalable and SEO-friendly solutions. Driven by innovation and continuous learning, I strive to deliver efficient, visually appealing, and user-centric digital experiences.

🚀 Let’s build something amazing!
          </p>
          <div className="hero-resume">
          <a
            // href="https://github.com/MohdAzimuddin/myUpdatedResume/raw/main/Mohd_Azimuddin_Frontend_resume.pdf"
            // download="Mohd_Azimuddin_Frontend_resume.pdf"
>>>>>>> 35f5a5e2fc946ab19e5cbc5ee0fefa41a4f0e9c7
            >
              <button className="resume-button">
            Download Resume
              </button>
          </a>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
