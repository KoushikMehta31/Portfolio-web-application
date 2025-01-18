
import React from "react";
import "./MyProject.css";
import Footer from "./Footer";


const projects = [
  {
    title: "Portfolio Web Application",
    description: " A responsive portfolio web application created with Reactjs and CSS.",
    image: "Images/portfolio.png", 
    github: "https://github.com/KoushikMehta31/Portfolio",
    linkedin: "#",
    Live: "https://portfolio-kzzr.vercel.app/",
  },
  {
    title: "E-Shopper",
    description: <span className="coming_soon">Coming soom.</span>,
    image: "Images/coming_soon.jpg",
    github: "#",
    linkedin: "#",
    Live: "#",
  },
  {
    title: "",
    description: <span className="coming_soon">Coming soom.</span>,
    image: "Images/coming_soon.jpg",
    github: "#",
    linkedin: "#",
    Live: "#",
  },
];

const MyProject = () => {
  return (
    <div className="app">
      <h1 className="title">PROJECT</h1>
      
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.github} className="button">GitHub</a>
              <a href={project.Live} className="button">Live</a>
              <a href={project.linkedin} className="button">LinkedIn</a>
            </div>
          </div>
        ))}
      </div>
     <Footer/>
    </div>
  );
};

export default MyProject;
