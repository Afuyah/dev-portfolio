import React from 'react';
import './Projects.css'; // Import CSS for styling

const Projects = () => {
    return (
        <div className="projects">
            <h2 className="fade-in">My Projects</h2>
            <div className="project-item fade-in">
                <h3>Nourisha Groceries Company Ltd Application</h3>
                <p>
                    I developed a comprehensive application for Nourisha Groceries Company Ltd using Flask and PostgreSQL. 
                    The application focuses on secure payment integration, enhancing user experience, and features a polished design.
                </p>
                <p>
                    Key Features:
                    <ul>
                        <li>Secure payment integration</li>
                        <li>Secure messaging system</li>
                        <li>Product ratings</li>
                        <li>Product recommendation system using AI and ML</li>
                    </ul>
                </p>
                <p>
                    <strong>Technologies Used:</strong> Flask, PostgreSQL, AI, Machine Learning
                </p>
                <a 
                    className="project-link" 
                    href="https://your-project-link.com" // Replace with actual link if available
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    View Project
                </a>
            </div>
            {/* Add more projects in similar format here if needed */}
        </div>
    );
};

export default Projects;
