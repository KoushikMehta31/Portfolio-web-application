
import React from "react";
import "./Skills.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaBootstrap, FaJava, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiMysql } from "react-icons/si";
import Footer from "./Footer";


const Skills = () => {
  return (
    <>
    <div className="skills-section">
      <h1 className="skills-title">Skills</h1>
      <p className="skills-subtitle">Technologies I use</p>
      <div className="skills-container">
        <div className="skill-card">
          <FaHtml5 className="skill-icon html-icon" />
          <p>HTML5</p>
        </div>
        <div className="skill-card">
          <FaCss3Alt className="skill-icon css-icon" />
          <p>CSS3</p>
        </div>
        <div className="skill-card">
          <FaJs className="skill-icon js-icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill-card">
          <FaBootstrap className="skill-icon bootstrap-icon" />
          <p>Bootstrap</p>
        </div>
        <div className="skill-card">
        <RiTailwindCssFill className="skill-icon tailwindcss-icon"/>
          <p>TailwindCss</p>
        </div>
        <div className="skill-card">
          <FaReact className="skill-icon react-icon" />
          <p>React</p>
        </div>
        <div className="skill-card">
          <FaNodeJs className="skill-icon node-icon" />
          <p>Node.js</p>
        </div>
        <div className="skill-card">
          <SiExpress className="skill-icon expressjs-icon" />
          <p>Express.js</p>
        </div>
        <div className="skill-card">
          <SiMongodb className="skill-icon mongodb-icon" />
          <p>MongoDB</p>
        </div>
        <div className="skill-card">
          <SiMysql className="skill-icon Mysql-icon" />
          <p>MySQL</p>
        </div>
        <div className="skill-card">
          <FaJava className="skill-icon Java-icon" />
          <p>Java</p>
        </div>
        <div className="skill-card">
          <FaPython className="skill-icon python-icon" />
          <p>Python</p>
        </div>
        
      </div>
      <Footer/>
    </div>
    
   
    
    </>
  );
};

export default Skills;
