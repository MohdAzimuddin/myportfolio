import React from "react";
import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
} from "react-icons/bi";
import { SiReactrouter } from "react-icons/si";
 
import { motion } from "framer-motion"; // Importing motion for animations
import "./tech.css"; // Import the CSS file for styling
import { TbBrandFramerMotion } from "react-icons/tb";

const Tech = () => {
  // Variants for motion animations - defines the hidden and visible states
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: invisible and slightly shifted down
    visible: { opacity: 1, y: 0 }, // Final state: visible and in position
  };

  // Wrapper component for applying motion animations to each icon
  const IconAnimation = ({ children }) => {
    return (
      <motion.div
        variants={variants} // Applying animation states
        initial="hidden" // Setting initial state
        whileInView="visible" // Trigger visible state when in view
        transition={{ duration: 0.5 }} // Animation duration
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div id="tech" className="tech-container">
      {/* Animated heading for the tech section */}
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="tech-heading"
      >
        Tech Stack
      </motion.h1>

      {/* Container for technology icons */}
      <div className="tech-icons-container">
        {/* Each technology icon is wrapped with the IconAnimation for animation */}
        <IconAnimation>
          <div>
            <BiLogoHtml5 className="tech-icon html-icon" />
          </div>
        </IconAnimation>

        <IconAnimation>
          <div>
            <BiLogoCss3 className="tech-icon css-icon" />
          </div>
        </IconAnimation>

        <IconAnimation>
          <div>
            <BiLogoJavascript className="tech-icon js-icon" />
          </div>
        </IconAnimation>

        <IconAnimation>
          <div>
            <BiLogoReact className="tech-icon react-icon" />
          </div>
        </IconAnimation>

        <IconAnimation>
          <div>
            <SiReactrouter className="tech-icon router-icon" />
          </div>
        </IconAnimation>

        <IconAnimation>
          <div>
            <TbBrandFramerMotion className="tech-icon framer-icon" />
          </div>
        </IconAnimation>

        <IconAnimation>
          <div>
            <BiLogoGit className="tech-icon git-icon" />
          </div>
        </IconAnimation>
      </div>
    </div>
  );
};

export default Tech;
