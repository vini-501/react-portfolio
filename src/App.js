import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="hearts">
          {[...Array(20)].map((_, i) => (
            <FaHeart key={i} className="floating-heart" style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }} />
          ))}
        </div>
        <h1>Hello, I'm <span className="highlight">Vini</span></h1>
        <p className="tagline">Crafting digital experiences with love <FaHeart className="pulse" /></p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>I'm a passionate developer who loves creating beautiful and functional web experiences. When I'm not coding, you can find me enjoying my other passions and spreading love through technology.</p>
      </section>

      <section className="skills">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Git'].map((skill, index) => (
            <div key={index} className="skill-item">
              <FaHeart className="skill-icon" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
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
      </section>

      <footer>
        <p>Made with <FaHeart className="heart-beat" /> for you</p>
      </footer>
    </div>
  );
}

export default App;
