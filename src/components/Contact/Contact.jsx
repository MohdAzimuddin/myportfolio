import React from "react";
import "./contact.css"; // Import the CSS file
import { MdEmail,} from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
 
const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-content">
        <h1 className="contact-heading">
          <span className="gradient-text">Contact Me</span>
        </h1>
        <p className="contact-description">
        For freelancing work, feel free to contact me via email or phone, and I'll be sure to respond!
        </p>
        <div className="contact-details">

        <a href="mailto:sfsuper2020@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-button email-button">
        <MdEmail/> Email Me
        </a>
        <a href="tel:+91 8291443947"  target="_blank"
         className="contact-button phone-button"> 
         <BsWhatsapp/> +91 8291443947 
        </a>
       
        </div>
      </div>
    </div>
  );
};

export default Contact;
