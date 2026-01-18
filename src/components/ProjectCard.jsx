import React from "react";

const ProjectCard = ({ index, title, description, image, video, link }) => {
  return (
    <div className="project-card">
      {/* Media Section */}
      <div className="project-media">
        {video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="project-video"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="project-image"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="project-content">
        <span className="project-index">{index}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        {link && (
          <a
            href={link}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;



