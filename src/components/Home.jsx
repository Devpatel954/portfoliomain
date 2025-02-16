import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import profileImg from '../assets/my.jpeg'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div>
        <Navbar/>

        <section className="home">
      <div className="home-container">
        <div className="home-left">
          <h1 className="home-heading">Hi, I'm <span>Dev Patel</span></h1>
          <h3 className="home-subheading">Software Engineer | AI & ML Enthusiast</h3>
          <p className="home-para">
            Crafting intelligent and scalable solutions with expertise in 
            full-stack development & AI. Passionate about leveraging cutting-edge 
            technologies to solve real-world problems.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/devpatel117/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Devpatel954" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="mailto:dpate440@uic.edu" className="social-icon">
              <FaEnvelope />
            </a>
          </div>
          <Link to='contact' smooth={true} offset={-200} duration={500}>
          <button className="home-btn">Let's Connect</button></Link>
        </div>

    
        <div className="home-right">
          <div className="img-container">
            <img src={profileImg} alt="Dev Patel" className="home-img" />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home