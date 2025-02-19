import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import my from "../assets/ab.jpeg";
import resume from "../assets/Dev.pdf";
import { Link } from "react-scroll";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="div-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div className="img-containe" whileHover={{ scale: 1.07 }}>
          <img src={my} className="my" alt="Profile" />
        </motion.div>
      </motion.div>

      <motion.div
        className="div-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div className="para" transition={{ staggerChildren: 0.2 }}>
          <motion.p
            className="p1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            My name is Dev Patel, and I’m a junior at the University of Illinois
            Chicago (UIC), majoring in Information Sciences. I’m deeply
            passionate about technology, software development, and artificial
            intelligence.
          </motion.p>
          <motion.p
            className="p2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            My goal is to become a Software Engineer, specializing in Full-Stack
            Development and Machine Learning. Throughout my journey, I have
            gained valuable hands-on experience through internships, hackathons,
            and research projects.
          </motion.p>
          <motion.p
            className="p3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            I thrive on developing AI-powered applications and building scalable
            web solutions that create a meaningful impact. I’m always eager to
            learn, innovate, and collaborate on exciting projects that push the
            boundaries of technology.
          </motion.p>
        </motion.div>

        <motion.div
          className="button-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.button
            className="btn"
            whileHover={{ scale: 1.1 }}
            onClick={() => window.open(resume, "_blank")}
          >
            Resume
          </motion.button>
          <Link to="contact" smooth={true} offset={-200} duration={500}>
            <motion.button className="btn" whileHover={{ scale: 1.1 }}>
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
