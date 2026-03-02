import React, { useRef } from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const sliderRef = useRef(null);

  // Scroll left/right functions
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h1>Projects</h1>
        <p>Selected work showcasing my development skills</p>
      </div>

      {/* Slider Controls */}
      <div className="projects-slider-wrapper">
        <button className="slider-btn left" onClick={scrollLeft}>
          &#8592;
        </button>

        <div className="projects-slider" ref={sliderRef}>
          {/* Project 01 – Video */}
          <ProjectCard
            index="01"
            title="Unite Campus"
            description="A campus networking platform to connect students and resources."
            video="/videos/project1.mp4"
            link="https://unitecampus.vercel.app"
          />

          {/* Project 02 – Image */}
          <ProjectCard
            index="02"
            title="Sentiment-analyser"
            description="A tool to analyze sentiment in text."
            video="/videos/video1.mp4"
            link="https://sentiment-frontent.onrender.com/"
          />

          {/* Project 03 – Image */}
          <ProjectCard
            index="03"
            title="Book Shelf"
            description="A simple file management extension."
            image="/project2.png"
            link="https://github.com/rainasebastian57-design/book_shelf.git"
          />
        </div>

        <button className="slider-btn right" onClick={scrollRight}>
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Projects;

