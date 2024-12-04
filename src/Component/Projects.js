import React from "react";
import "./Project.css";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A short description of the project goes here.",
    imageUrl: "https://via.placeholder.com/300x200",
    link: "https://example.com/project-one",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A short description of the project goes here.",
    imageUrl: "https://via.placeholder.com/300x200",
    link: "https://example.com/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A short description of the project goes here.",
    imageUrl: "https://via.placeholder.com/300x200",
    link: "https://example.com/project-three",
  },
  {
    id: 4,
    title: "Project Three",
    description: "A short description of the project goes here.",
    imageUrl: "https://via.placeholder.com/300x200",
    link: "https://example.com/project-three",
  },
];

function Projects() {
  return (
    <section id="project" className="project">
      <h2>Our Projects</h2>
      <p>Here are some of the projects we've worked on:</p>

      <div className="project-items">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img
              src={project.imageUrl}
              alt={`Screenshot of ${project.title}`}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
