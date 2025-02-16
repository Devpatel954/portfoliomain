import React, { useState } from 'react';
import './GetInTouch.css';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }
        console.log('Form submitted with:', formData);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='contact'>
            <div className="contact-sec">
                <div className="left">
                    <h1>Let's talk</h1>
                    <p>I'm always open to collaborating on open-source projects and exploring new opportunities in tech. If you have an exciting idea, or if you'd like to connect, feel free to reach out!</p>
                    <div className="details">
                        <div className="indiv">
                            <FaPhoneAlt className='icon' />
                            <p>+1 224-877-4101</p>
                        </div>
                        <div className="indiv">
                            <MdEmail className='icon' />
                            <p>dpate440@uic.edu</p>
                        </div>
                        <div className="indiv">
                            <IoLocationSharp className='icon' />
                            <p>Chicago, IL</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            placeholder='Enter your name'
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="message">Write Your Message Here</label>
                        <textarea
                            name="message"
                            rows='8'
                            placeholder='Enter your message'
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <button className="btn" type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;




