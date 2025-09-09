import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">George (Jiaxi) He</span>
          </h1>
          <h2 className="hero-subtitle">Computer Science Graduate</h2>
          <p className="hero-description">
            I'm a recent computer science graduate from the University of Auckland who loves creating web applications 
            and solving complex problems. With expertise in both frontend and backend 
            technologies. And this is my portfolio website. Welcome and feel free to look at my projects and skills 
            and if there is any questions,
             please feel free to contact me using the contact form below or by calling <b>+64 027 416 2440</b>.
          </p>
          <div className="hero-buttons">
            <a href="projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <img 
              src="/profile-photo.JPEG" 
              alt="George (Jiaxi) He" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
