import React from 'react';
import './AboutMe.css'; // Import CSS for styling
import resume from '../assets/resume.pdf'; 

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="fade-in title">About Me</h2>
      <div className="bio fade-in">
        <p>
          I am a dedicated software developer with a strong background in Python, Flask, FastAPI, JavaScript, React, and database management. 
          My passion for web development drives me to create robust, scalable, and user-friendly applications that deliver exceptional user experiences. 
          I have honed my skills across various domains, focusing on:
        </p>
        <ul>
          <li><b>API Development:</b> Crafting efficient and secure RESTful APIs for seamless interactions between front-end and back-end systems.</li>
          <li><b>Web Development:</b> Building dynamic and responsive web applications using modern frameworks, ensuring optimal performance across devices.</li>
          <li><b>Database Management:</b> Designing and optimizing database schemas with SQL and NoSQL databases to ensure data integrity and performance.</li>
          <li><b>User Experience (UX):</b> Prioritizing user-centric design principles to create intuitive interfaces that enhance usability and engagement.</li>
          <li><b>Security Best Practices:</b> Implementing robust measures to safeguard user data and maintain compliance with industry standards.</li>
        </ul>
        <p>
          My recent projects, including an e-commerce system for Nourisha Groceries Ltd, a betting platform for Brilliant Bets, a live auction system, a tech market web service, and an Airbnb clone application, showcase my ability to deliver high-quality software solutions. 
          I emphasize clean, polished layouts, robust security features, and real-time functionalities where applicable.
        </p>
        <p>
          Passionate about staying updated with the latest technologies and trends, I continuously seek opportunities to enhance my skills. 
          My goal is to create impactful applications that meet technical requirements and exceed user expectations. 
          With a deep understanding of the latest technologies and best practices, I am excited to tackle new challenges in full-stack development, database design, and cloud deployment, helping businesses grow through technology.
        </p>
      </div>
      <a href={resume} download className="resume-button fade-in">Download Resume</a>
      <h3 className="fade-in contact-title">Contact Me</h3>
      <p className="fade-in">
        Feel free to reach out to me on LinkedIn or through my email for collaboration or networking opportunities!
      </p>
    </div>
  );
};

export default AboutMe;
