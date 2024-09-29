// ManageExperience.js
import React, { useState, useEffect } from 'react';
import api from '../axiosConfig'; 
import './ManageExperience.css'; // Import CSS for styling

const ManageExperience = () => {
    const [experience, setExperience] = useState([]);
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');
    const [editId, setEditId] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    useEffect(() => {
        fetchExperience();
    }, []);

    const fetchExperience = async () => {
        setLoading(true); // Set loading to true
        try {
            const response = await api.get('/experience/');
            setExperience(response.data);
        } catch (err) {
            setError('Failed to fetch experience.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    const handleAddOrUpdateExperience = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true
        try {
            if (editId) {
                await api.put(`/experience/${editId}/`, { 
                    company_name: company,
                    role,
                    duration,
                    description 
                });
            } else {
                await api.post('/experience/', { 
                    company_name: company,
                    role,
                    duration,
                    description 
                });
            }
            resetForm();
            fetchExperience();
        } catch (err) {
            setError('Failed to save experience.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    const handleDeleteExperience = async (id) => {
        if (window.confirm('Are you sure you want to delete this experience?')) {
            setLoading(true); // Set loading to true
            try {
                await api.delete(`/experience/${id}`);
                fetchExperience();
            } catch (err) {
                setError('Failed to delete experience.');
            } finally {
                setLoading(false); // Reset loading state
            }
        }
    };

    const handleEditExperience = (exp) => {
        setCompany(exp.company_name);
        setRole(exp.role);
        setDuration(exp.duration);
        setDescription(exp.description);
        setEditId(exp.id);
    };

    const resetForm = () => {
        setCompany('');
        setRole('');
        setDuration('');
        setDescription('');
        setEditId(null);
    };

    return (
        <div className="manage-experience">
            <h2>Manage Experience</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleAddOrUpdateExperience}>
                <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name"
                    required
                />
                <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Role"
                    required
                />
                <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Duration (e.g., 2021-2022)"
                    required
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />
                <button type="submit" disabled={loading}>
                    {editId ? 'Update Experience' : 'Add Experience'}
                </button>
            </form>
            <ul>
                {experience.map(exp => (
                    <li key={exp.id}>
                        {exp.company_name} - {exp.role} ({exp.duration})
                        <div>
                            <button onClick={() => handleEditExperience(exp)}>Edit</button>
                            <button onClick={() => handleDeleteExperience(exp.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            {loading && <p>Loading...</p>} {/* Loading indicator */}
        </div>
    );
};

export default ManageExperience;
