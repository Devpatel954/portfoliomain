import React, { useEffect, useState } from 'react';
import './Projects.css';
import h from '../assets/h2.jpg';
import p from '../assets/p2.jpg';
import T from '../assets/t2.jpg';
import c from '../assets/c1.jpg';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        setIsVisible(true);
    }, []);

    const myprojects = [
        {
            titles: 'SmartChurn',
            images: <img src={c} alt="SmartChurn" className='imgp' />,
            links1: 'Demo',
            links2: 'Github',
            links1Url: 'https://customer-churn-prediction-model-kmab3vph4dsajmceqk2apn.streamlit.app/',
            links2Url: 'https://github.com/Devpatel954/Customer-churn-prediction-model-using-ANN',
        },
        {
            titles: 'Tomato',
            images: <img src={T} alt="Tomato" className='imgp' />,
            links1: 'Demo',
            links2: 'Github',
            links1Url: 'https://food-delievery-app-yr6o.onrender.com/',
            links2Url: 'https://github.com/Devpatel954/Food-Delievery-app',
        },
        {
            titles: 'PostPulse',
            images: <img src={p} alt="PostPulse" className='imgp' />,
            links1: 'Demo',
            links2: 'Github',
            links1Url: 'https://postspulse.onrender.com/login',
            links2Url: 'https://github.com/Devpatel954/flask-app',
        },
        {
            titles: 'Heartbeats',
            images: <img src={h} alt="Heartbeats" className='imgp' />,
            links1: 'Demo',
            links2: 'Github',
            links1Url: 'https://heart-disease-prediction-model-edenagbrbbdwb5ojfxked3.streamlit.app/',
            links2Url: 'https://github.com/Devpatel954/Heart-disease-prediction-model',
        },
    ];

    return (
        <div className="projects">
            {myprojects.map((item, index) => (
                <motion.div
                    key={index}
                    className="card"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{
                        duration: 0.8,
                        delay: index * 0.2,
                    }}
                >
                    <h3 className="titles">{item.titles}</h3>
                    <motion.div
                        className="image"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        {item.images}
                    </motion.div>
                    <div className="links">
                        <a href={item.links1Url} className="link">
                            <FaExternalLinkAlt className="icon" /> {item.links1}
                        </a>
                        <a href={item.links2Url} className="link">
                            <FaGithub className="icon" /> {item.links2}
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Projects;


