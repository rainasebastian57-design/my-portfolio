import React from 'react';
import './Home.css';
import heroImage from '../assets/home.png'; // ensure this path matches your project

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">

        {/* Text Section */}
        <div className="hero-text">
          <h1>
            Hi There! <span className="wave">👋🏻</span> <br />
            I’M <span>RAINA SEBASTIAN</span>
          </h1>
          
          <p>
            I build modern, responsive web applications and clean, professional interfaces.
          </p>
          
          <div className="hero-buttons">
            <a href="/CV.pdf" download className="btn btn-primary">
              Download CV
            </a>
            <a href="/projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>
        </div>

        {/* Static Image Section */}
        <div className="hero-image">
          <img src={heroImage} alt="Developer Illustration" />
        </div>

      </div>
    </section>
  );
}

export default Home;
