
import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
            <li> <Link to="/myproject">My Project</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section follow-me-section">
          <h3>Follow Me</h3>
          <div className="social-icons">
        <a href="https://www.linkedin.com/in/koushik-mehta-7a4975285/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/KoushikMehta31" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Jharkhand, India</p>
          <p>Jamshedpur</p>
          <p>Email: koushikmehta07@gmail.com</p>
        </div>
      </div>
      <hr className="line"/>
      <div className="footer-bottom">
        <p>© 2025 {"</>"} Developed by Koushik Mehta</p>
      </div>
    </footer>
  );
};

export default Footer;

