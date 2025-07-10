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
       For professional inquiries or potential collaborations, feel free to reach out via email or phone — I’ll be happy to connect
        </p>
        <div className="contact-details">

        {/* <a href="mailto:sfsuper2020@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-button email-button">
        <MdEmail/> Email Me
        </a> */}
        <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sfsuper2020@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="contact-button email-button"
>
  <MdEmail /> Email Me
</a>
        {/* <a href="tel:+91 8291443947"  target="_blank"
         className="contact-button phone-button"> 
         <BsWhatsapp/> +91 8291443947 
        </a> */}
        <a 
  href="https://wa.me/918291443947" 
  target="_blank" 
  className="contact-button phone-button"
>
  <BsWhatsapp /> Connect on WhatsApp
</a>
       
        </div>
      </div>
    </div>
  );
};

export default Contact;
