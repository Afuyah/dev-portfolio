// ManageSkills.js
import React, { useState, useEffect } from 'react';
import api from '../axiosConfig'; // Import the configured Axios instance
import './ManageSkills.css'; // Import CSS for styling

const ManageSkills = () => {
    const [skills, setSkills] = useState([]);
    const [skillName, setSkillName] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = async () => {
        setLoading(true); // Set loading to true
        try {
            const response = await api.get(`/skills/`);
            setSkills(response.data);
        } catch (err) {
            setError('Failed to fetch skills.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    const handleAddSkill = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true
        try {
            await api.post(`/skills/`, { name: skillName, level: skillLevel });
            setSkillName('');
            setSkillLevel('');
            fetchSkills(); // Refresh skills
        } catch (err) {
            setError('Failed to add skill.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    const handleDeleteSkill = async (id) => {
        if (window.confirm('Are you sure you want to delete this skill?')) {
            setLoading(true); // Set loading to true
            try {
                await api.delete(`/skills/${id}`);
                fetchSkills(); // Refresh skills
            } catch (err) {
                setError('Failed to delete skill.');
            } finally {
                setLoading(false); // Reset loading state
            }
        }
    };

    return (
        <div className="manage-skills">
            <h2>Manage Skills</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleAddSkill}>
                <input
                    type="text"
                    value={skillName}
                    onChange={(e) => setSkillName(e.target.value)}
                    placeholder="Skill Name"
                    required
                />
                <input
                    type="text"
                    value={skillLevel}
                    onChange={(e) => setSkillLevel(e.target.value)}
                    placeholder="Skill Level (e.g., Beginner, Intermediate, Expert)"
                    required
                />
                <button type="submit" disabled={loading}>
                    Add Skill
                </button>
            </form>
            {loading && <p className="loading">Loading...</p>} {/* Loading indicator */}
            <ul>
                {skills.map(skill => (
                    <li key={skill.id}>
                        {skill.name} - {skill.level}
                        <div>
                            <button onClick={() => handleDeleteSkill(skill.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageSkills;
