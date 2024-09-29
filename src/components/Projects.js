import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css'; // Import CSS for styling

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch data from the Flask backend
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/projects`);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setError('Failed to load projects. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <div className="loading-spinner">Loading projects...</div>;
    }

    return (
        <div className="projects">
            <h2 className="fade-in">My Projects</h2>
            {error && <p className="error-message">{error}</p>}
            <ul className="projects-list">
                {projects.map(project => (
                    <li key={project.id} className="project-item fade-in">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.technologies && (
                            <div className="technologies">
                                <strong>Technologies Used:</strong> {project.technologies}
                            </div>
                        )}
                        <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
