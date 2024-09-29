// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import CSS for styling

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Admin Dashboard</h2>
            <ul>
                <li>
                    <Link to="/manage-projects">Manage Projects</Link>
                </li>
                <li>
                    <Link to="/manage-skills">Manage Skills</Link>
                </li>
                <li>
                    <Link to="/manage-experience">Manage Experience</Link>
                </li>
            </ul>
        </div>
    );
};

export default Dashboard;
