
import React from "react";
import "./Certifications.css";
import Footer from "./Footer";

const Certifications = () => {
  const certificates = [
    {
      image: "Images/WebDevApnaCollege.jpg", 
      title: "Full Stack Web Development",
      platform: "Apna College",
      date: "Jan 2025",
    },
    {
      image: "Images/LeetCode.jpg", 
      title: "Solving LeetCode's Top Interview Questions",
      platform: "Udemy",
      date: "Dec 2023",
    },
    {
      image: "Images/Git_Github.jpg",  
      title: "Git and Github - Beginners to Expert",
      platform: "Udemy",
      date: "Dec 2023",
    },
    {
      image: "Images/java.jpeg", 
      title: "Introduction To Java",
      platform: "LearnTube",
      date: "July 2023",
    },
    {
      image: "Images/oop.jpg",
      title: "Object Oriented Programming",
      platform: "Great Learning",
      date: "July 2023",
    },
  ];

  return (
    <div className="certifications-container">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <img
              src={certificate.image}
              alt={certificate.title}
              className="certificate-image"
            />
            <div className="certificate-details">
              <h3>{certificate.title}</h3>
              <p className="platform">{certificate.platform}</p>
              <p className="date">
                <span className="calendar-icon">📅</span> {certificate.date}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Certifications;
