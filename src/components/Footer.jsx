import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="div">
          <h2>Dev Patel</h2>
        </div>

        <nav className="footer-nav">
          <ul>
            <li>
              <Link to="home" smooth={true} offset={-200} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} offset={-200} duration={500}>
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <div className="footer-icons">
          <a
            href="https://github.com/Devpatel954"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="mailto:dpate440@uic.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/devpatel117/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
