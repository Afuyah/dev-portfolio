import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Experience.css'; // Import CSS for styling

const Experience = () => {
    const [experiences, setExperiences] = useState([]); // Initialize as an empty array
    const [error, setError] = useState(''); // State for error handling

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/experience`);
                setExperiences(response.data); // Ensure response.data is an array
            } catch (error) {
                console.error("Error fetching experiences:", error);
                setError("Failed to load experiences. Please try again later.");
            }
        };
        fetchExperiences();
    }, []);

    return (
        <div className="experience">
            <h2 className="fade-in">Experience</h2>
            {error && <p className="error-message">{error}</p>} {/* Display error if any */}
            <ul className="experience-list">
                {experiences.length > 0 ? ( // Check if experiences is not empty
                    experiences.map((exp, index) => (
                        <li key={index} className="experience-item fade-in">
                            <strong>{exp.role}</strong> at <span>{exp.company_name}</span>
                            <div className="details">
                                <span className="duration">{exp.duration}</span>
                                <p>{exp.description}</p>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No experience data available.</p> // Fallback message if no data
                )}
            </ul>
        </div>
    );
};

export default Experience;
