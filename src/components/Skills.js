import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Skills.css'; // Import CSS for styling

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [error, setError] = useState(''); // State for error handling

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/skills`);
                setSkills(response.data);
            } catch (error) {
                console.error('Error fetching skills:', error);
                setError('Failed to load skills. Please try again later.');
            }
        };
        fetchSkills();
    }, []);

    return (
        <div className="skills">
            <h2 className="fade-in">My Skills</h2>
            {error && <p className="error-message">{error}</p>} {/* Display error if any */}
            <ul className="skills-list">
                {skills.length > 0 ? (
                    skills.map((skill, index) => (
                        <li key={index} className="skill-item fade-in">
                            <span className="skill-name">{skill.name}</span> - <span className="skill-level">{skill.level}</span>
                        </li>
                    ))
                ) : (
                    <p>No skills data available.</p> // Fallback message if no data
                )}
            </ul>
        </div>
    );
};

export default Skills;
