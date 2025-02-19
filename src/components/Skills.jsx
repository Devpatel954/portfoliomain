import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="skill-icon" /> },
      { name: "CSS", icon: <FaCss3Alt className="skill-icon" /> },
      { name: "JavaScript", icon: <FaJs className="skill-icon" /> },
      { name: "React.js", icon: <FaReact className="skill-icon" /> },
      { name: "Next.js", icon: <FaReact className="skill-icon" /> },
      { name: "Tailwind CSS", icon: <FaCss3Alt className="skill-icon" /> },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="skill-icon" /> },
      { name: "Express.js", icon: <SiExpress className="skill-icon" /> },
      { name: "MongoDB", icon: <SiMongodb className="skill-icon" /> },
      { name: "SQL", icon: <FaDatabase className="skill-icon" /> },
      { name: "REST APIs", icon: <FaNodeJs className="skill-icon" /> },
      { name: "GraphQL", icon: <FaNodeJs className="skill-icon" /> },
    ],
  },
  {
    title: (
      <>
        AI & Machine <br />
        Learning
      </>
    ),
    skills: [
      { name: "Python", icon: <FaPython className="skill-icon" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="skill-icon" /> },
      { name: "PyTorch", icon: <SiPytorch className="skill-icon" /> },
      { name: "Docker", icon: <SiDocker className="skill-icon" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="skill-icon" /> },
      { name: "Pandas", icon: <FaPython className="skill-icon" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="skill-title">{category.title}</h3>
            <div className="skill-icons">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
