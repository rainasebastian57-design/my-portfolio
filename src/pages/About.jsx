import React from 'react';
import './About.css';

function About() {
  const skills = [
    "React.js",
    "Python",
    "HTML",
    "CSS",
    "Firebase",
    "Git",
    "Tailwind"
  ];

  return (
    <section className="about-section">
      <div className="container">

        {/* Professional Bio Section */}
        <div className="about-content">
          <div className="about-card">
            <h1 className="about-heading">
              Know Who <span className="purple">I'M</span>
            </h1>

            <p className="about-para">
              Hi Everyone, I am <span className="purple">Raina Sebastian</span>, a first-year CSE B.Tech student at LBSITW, Trivandrum.
            </p>

            <p className="about-para">
              I am a passionate <span className="purple">Front-end Developer</span> and an <span className="purple">IEEE Member</span>. I enjoy solving complex problems through clean and efficient code.
            </p>

            <p className="activity-head">
              Beyond academics, I am actively involved in:
            </p>

            <div className="activity-item">⚡ Volunteering</div>
            <div className="activity-item">⚡ Hackathon Development</div>
            <div className="activity-item">⚡ Event Head (Prayag)</div>
          </div>
        </div>

        {/* Professional Skillset Section */}
        <div className="skills-section">
          <h1 className="about-heading">
            Professional <span className="purple">Skillset</span>
          </h1>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-box">
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
