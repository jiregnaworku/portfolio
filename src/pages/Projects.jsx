import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Online Coffee Shop (Afaan Oromoo)",
    description:
      "A responsive online coffee shop web app built for Afaan Oromoo speakers. Features product listings, cart, and order management. Available on GitHub.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/jiregnaworku/online-coffee-shop", // Replace with your actual link
    status: "Completed",
  },
  {
    title: "House Rental Management System",
    description:
      "A full-stack MERN web app for managing rental properties. Includes landlord/tenant login, rental forms, payments, and admin dashboards. Built during internship at OICT Solution.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "#", // Add link if available
    status: "Ongoing (Internship)",
  },
  {
    title: "Kids Learning Application",
    description:
      "A colorful and engaging app for kids to learn alphabets, numbers, colors, and more. Built with Flutter and includes dark mode, parent lock, and local storage features.",
    tech: ["Flutter", "Dart"],
    link: "#", // Add GitHub link if available
    status: "Nearly Done",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="Projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-tags">
              {proj.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            <p className="status">{proj.status}</p>
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                🔗 View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
