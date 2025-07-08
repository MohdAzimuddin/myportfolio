
import { motion } from 'framer-motion';
import { 
    FaBriefcase, 
    FaCalendarAlt, 
    FaMapMarkerAlt, 
    FaCode, 
    FaGraduationCap, 
    FaUsers,
    FaLaptopCode,
    FaChevronRight,
    FaBuilding,
    FaUserTie
} from 'react-icons/fa';
import { 
    MdWork, 
    MdSchool, 
    MdDesktopWindows 
} from 'react-icons/md';
import { 
    HiOutlineOfficeBuilding 
} from 'react-icons/hi';
import './Experience.css';

const Experience = () => {
    // Component for applying scroll animations using Framer Motion
    const ScrollReveal = ({ children, delay = 0 }) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        );
    };

    // Function to get icon based on job type
    const getJobIcon = (title) => {
        if (title.includes('Intern')) return <MdWork />;
        if (title.includes('Freelance')) return <FaLaptopCode />;
        if (title.includes('Tutor')) return <FaGraduationCap />;
        return <FaBriefcase />;
    };

    const workExperience = [
        {
            id: 1,
            title: "Frontend Developer Intern",
            company: "Bharat Biz Tech",
            duration: "Apr 2025 – Present",
            location: "Remote",
            type: "internship",
            responsibilities: [
                "Developed the official Bharat Biz Tech website, enhancing the company's digital presence",
                "Built a comprehensive School Management System software User Interface from scratch with an interactive functionalities",
                "Implemented responsive design principles ensuring cross-device compatibility and optimal user experience"
            ]
        },
        {
            id: 2,
            title: "Freelance Frontend Developer",
            company: "Self-Employed",
            duration: "Aug 2024 – Mar 2025",
            location: "Mumbai, Maharashtra",
            type: "freelance",
            responsibilities: [
                "Developed optimized web solutions for 5+ clients, boosting site performance by 30%",
                "Designed and implemented reusable React.js components, improving development efficiency",
                "Collaborated closely with clients to define project goals and deliver tailored solutions",
                "Created pixel-perfect, mobile-friendly UIs ensuring a seamless user experience"
            ]
        },
        {
            id: 3,
            title: "Programming Tutor",
            company: "volunteering  Tutoring",
            duration: "Sep 2023 – July 2024",
            location: "Mumbai, Maharashtra",
            type: "education",
            responsibilities: [
                "Provided personalized programming instruction to students in  HTML, CSS, and JavaScript fundamentals",
                "Mentored students through project-based learning, helping them build basic User Interface",
                "Achieved 92% student satisfaction rate with improved coding skills and confidence in basic programming concepts"
            ]
        }
    ];

    return (
        <div id="experience" className="experience-container">
            <ScrollReveal>
                <div className="experience-header">
                    <div className="header-icon">
                        <FaBriefcase />
                    </div>
                    <h2 className="experience-main-heading">Work Experience</h2>
                    <p className="experience-subtitle">My professional journey</p>
                </div>
            </ScrollReveal>
            
            <div className="experience-timeline">
                {workExperience.map((job, index) => (
                    <ScrollReveal key={job.id} delay={index * 0.2}>
                        <div className={`experience-card ${job.type}`}>
                            <div className="card-icon">
                                {getJobIcon(job.title)}
                            </div>
                            
                            <div className="experience-header-section">
                                <div className="experience-title-section">
                                    <h3 className="experience-job-title">
                                        {job.title}
                                    </h3>
                                    <div className="experience-company">
                                        <HiOutlineOfficeBuilding className="company-icon" />
                                        <span>{job.company}</span>
                                    </div>
                                </div>
                                <div className="experience-details">
                                    <div className="detail-item">
                                        <FaCalendarAlt className="detail-icon" />
                                        <span className="experience-duration">{job.duration}</span>
                                    </div>
                                    <div className="detail-item">
                                        <FaMapMarkerAlt className="detail-icon" />
                                        <span className="experience-location">{job.location}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="experience-content">
                                <h4 className="responsibilities-title">
                                    <FaCode className="section-icon" />
                                    Key Responsibilities
                                </h4>
                                <ul className="experience-responsibilities">
                                    {job.responsibilities.map((responsibility, idx) => (
                                        <li key={idx} className="experience-responsibility">
                                            <FaChevronRight className="bullet-icon" />
                                            <span>{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
            
            <ScrollReveal delay={0.6}>
                <div className="experience-footer">
                    <div className="footer-content">
                        <FaUsers className="footer-icon" />
                        <p className="footer-text">
                            Ready to bring my expertise to your next project
                        </p>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
};

export default Experience;