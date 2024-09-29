// FloatingContactButton.js
import React from 'react';
import './FloatingContactButton.css'; 
const FloatingContactButton = () => {
    const handleClick = () => {
        window.location.href = '/contact'; 
    };

    return (
        <button className="floating-contact-btn" onClick={handleClick} aria-label="Contact Me">
            <span>📩 </span> 
        </button>
    );
};

export default FloatingContactButton;
