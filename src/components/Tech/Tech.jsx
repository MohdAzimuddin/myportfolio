import React from "react";
import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiReactrouter,SiTypescript } from "react-icons/si";
 
import { motion } from "framer-motion"; // Importing motion for animations
import "./tech.css"; // Import the CSS file for styling
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";

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
          <div className="tech-deatils">
            <BiLogoReact className="tech-icon react-icon" />
            <span className="stack-name">React (v19) </span>
          </div>
        </IconAnimation>
      
        <IconAnimation>
          <div className="tech-deatils">
            <BiLogoJavascript className="tech-icon js-icon" />
            <span className="stack-name">JavaScript (ES6+)</span>
          </div>
        </IconAnimation>

        <IconAnimation>
          <div className="tech-deatils">
            <BiLogoHtml5 className="tech-icon html-icon" />
            <span className="stack-name">HTML5</span>
          </div>
        </IconAnimation>

        <IconAnimation>
          <div className="tech-deatils">
            <BiLogoCss3 className="tech-icon css-icon" />
            <span className="stack-name">CSS3</span>
          </div>
        </IconAnimation>

        <IconAnimation>
          <div className="tech-deatils">
            <BiLogoTailwindCss className="tech-icon css-icon" />
            <span className="stack-name">Tailwind CSS</span>
          </div>
        </IconAnimation>

        <IconAnimation>
          <div className="tech-deatils">
            <SiReactrouter className="tech-icon router-icon" />
            <span className="stack-name">React-Router</span>
          </div>
        </IconAnimation>

        <IconAnimation>
          <div className="tech-deatils">
            <TbBrandFramerMotion className="tech-icon framer-icon" />
            <span className="stack-name">Framer Motion</span>
          </div>
        </IconAnimation>

        <IconAnimation>
          <div className="tech-deatils">
            <BiLogoGit className="tech-icon git-icon" />
            <span className="stack-name">Git</span>
          </div>
        </IconAnimation>
    
        <IconAnimation>
          <div className="tech-deatils">
            <SiTypescript className="tech-icon next-icon" />
            <span className="stack-name">TypeScript</span>
{/*             <span className="stack-name">Acquiring skills in</span> */}
          </div>
        </IconAnimation>

        {/*         <IconAnimation>
          <div className="tech-deatils">
            <SiTypescript className="tech-icon next-icon" />
            <span className="stack-name">TypeScript</span>
            <span className="stack-name">Acquiring skills in</span>
          </div>
        </IconAnimation> */}
        
      </div>
    </div>
  );
};

export default Tech;
