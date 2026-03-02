import React from 'react';
import './Home.css';
import heroImage from '../assets/home.png'; // ensure this path matches your project
import { Link } from 'react-router-dom';

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
            <Link to="/projects" className="btn btn-secondary">
              View Projects
            </Link>
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
