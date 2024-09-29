// ManageProjects.js
import React, { useState, useEffect } from 'react';
import api from '../axiosConfig'; // Use the configured Axios instance
import './ManageProjects.css'; // Import CSS for styling

const ManageProjects = () => {
    const [projects, setProjects] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        setLoading(true); // Set loading to true
        try {
            const response = await api.get('/projects/');
            setProjects(response.data);
        } catch (err) {
            setError('Failed to fetch projects.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    const handleAddProject = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true
        try {
            await api.post('/projects/', { title, description, technologies });
            setTitle('');
            setDescription('');
            setTechnologies('');
            fetchProjects(); // Refresh projects
        } catch (err) {
            setError('Failed to add project.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    const handleDeleteProject = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            setLoading(true); // Set loading to true
            try {
                await api.delete(`/projects/${id}`);
                fetchProjects(); // Refresh projects
            } catch (err) {
                setError('Failed to delete project.');
            } finally {
                setLoading(false); // Reset loading state
            }
        }
    };

    return (
        <div className="manage-projects">
            <h2>Manage Projects</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleAddProject}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Project Title"
                    required
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Project Description"
                    required
                />
                <input
                    type="text"
                    value={technologies}
                    onChange={(e) => setTechnologies(e.target.value)}
                    placeholder="Technologies Used"
                    required
                />
                <button type="submit" disabled={loading}>
                    Add Project
                </button>
            </form>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        {project.title} - {project.description}
                        <div>
                            <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            {loading && <p>Loading...</p>} {/* Loading indicator */}
        </div>
    );
};

export default ManageProjects;
