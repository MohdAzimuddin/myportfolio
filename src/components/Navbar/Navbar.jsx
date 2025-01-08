import React from "react";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi"; // Importing menu icons for the mobile menu toggle
import { BsGithub, BsLinkedin } from "react-icons/bs"; // Importing social media icons
import "./navbar.css"; // Import the CSS file

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu toggle

  // Function to toggle the menu's open/close state
  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo/Name */}
      <a href="#home" className="navbar-logo">
        Mohd Azimuddin
      </a>

      {/* Desktop Navigation Links */}
      <ul className="navbar-links">
        <a href="#home" className="navbar-link">
          <li>Home</li>
        </a>
        <a href="#tech" className="navbar-link">
          <li>Tech Stack</li>
        </a>
        <a href="#projects" className="navbar-link">
          <li>Projects</li>
        </a>
        <a href="#contact" className="navbar-link">
          <li>Contacts</li>
        </a>
      </ul>

      {/* Social Media Links for Desktop */}
      <ul className="navbar-social-links">
        <a
          href="https://www.linkedin.com/in/mohd-azimuddin-shaikh-34284b202"
          target="_blank"
           rel="noopener noreferrer"
          className="navbar-social-link linkedin"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/MohdAzimuddin"
          target="_blank"
           rel="noopener noreferrer"
          className="navbar-social-link github"
        >
          <BsGithub />
        </a>
      </ul>

      {/* Mobile Menu Icon (BiMenu & BiX) */}
      {isOpen ? (
        <BiX className="menu-icon" onClick={menuOpen} /> // Close icon
      ) : (
        <BiMenu className="menu-icon" onClick={menuOpen} />
      )}

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          {/* Mobile Navigation Links */}
          <ul className="mobile-menu-links">
            <a href="#home" className="mobile-menu-link">
              <li>Home</li>
            </a>
            <a href="#tech" className="mobile-menu-link">
              <li>Tech Stack</li>
            </a>
            <a href="#projects" className="mobile-menu-link">
              <li>Projects</li>
            </a>
            <a href="#contact" className="mobile-menu-link">
              <li>Contacts</li>
            </a>
          </ul>

          {/* Social Links in Mobile Menu */}
          <ul className="mobile-menu-social-links">
            <a
              href="https://www.linkedin.com/in/mohd-azimuddin-shaikh-34284b202"
              target="_blank"
              className="mobile-menu-social-link linkedin"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/MohdAzimuddin"
              target="_blank"
              className="mobile-menu-social-link github"
            >
              <BsGithub />
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
