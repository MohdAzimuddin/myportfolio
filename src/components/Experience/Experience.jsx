import React from 'react';
import "./Experience.css";
import { motion } from "framer-motion";

const Experience = () => {
    // Component for applying scroll animations using Framer Motion
    const ScrollReveal = ({ children }) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: "6.25rem" }} // Initial state: hidden and below the viewport
                whileInView={{ opacity: 1, y: 0 }} // Final state: visible and in position
                transition={{ duration: 0.8 }} // Duration of the animation
                viewport={{ once: true }} // Ensures animation runs only once when in view
            >
                {children}
            </motion.div>
        );
    };

    return (
        <div id="experience" className='experience-container'>
            <ScrollReveal>
                <div className='experience-content'>
                    <h3 className='experience-heading'>Work Experience</h3>
                    <div className='experience-text-container'>
                    <p className='experience-text'>Optimized web solutions for over five clients, boosting performance by 30%.</p>
                        <p className='experience-text'>Developed scalable, reusable SPAs for efficient and maintainable codebases.</p>
                        <p className='experience-text'>Designed responsive, accessible UIs for enhanced user experience.</p>
                        <p className='experience-text'>Deployed and maintained applications on Netlify, Vercel, and AWS.</p>
                        <p className='experience-text'>Collaborated with Back-End Developer, Prashant Gaonkar, for backend support.</p>
                        <p className='experience-text'>Freelance Front-End Developer specializing in dynamic, user-centric web applications.</p>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
};

export default Experience;



