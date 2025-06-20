import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <header id="home" className="header">
        <div className="hearts">
          {[...Array(20)].map((_, i) => (
            <FaHeart 
              key={i} 
              className="floating-heart" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }} 
            />
          ))}
        </div>
        <div className="header-content">
          <h1>Hello, I'm <span className="highlight">Vini</span></h1>
          <p className="tagline">Crafting digital experiences with love <FaHeart className="pulse" /></p>
        </div>
      </header>

      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>I'm a passionate developer who loves creating beautiful and functional web experiences. When I'm not coding, you can find me enjoying my other passions and spreading love through technology.</p>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skills-grid">
            {['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Git'].map((skill, index) => (
              <div key={index} className="skill-item">
                <FaHeart className="skill-icon" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Let's Connect</h2>
          <div className="social-links">
            <a href="https://github.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:your.email@example.com" className="social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>Made with <FaHeart className="heart-beat" /> for you</p>
        </div>
      </footer>
    </div>
  );
}

export default App;