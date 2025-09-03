import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Your Name</span>
          </h1>
          <h2 className="hero-subtitle">Full-Stack Developer</h2>
          <p className="hero-description">
            I'm a passionate developer who loves creating innovative web applications 
            and solving complex problems. With expertise in both frontend and backend 
            technologies, I build scalable solutions that make a difference.
          </p>
          <div className="hero-buttons">
            <a href=" projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <span>👨‍💻</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
