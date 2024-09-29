import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; // Ensure you have a CSS file for styling

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage('');
        setSuccess(false);

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/contact`, {
                name,
                email,
                message,
            });
            setResponseMessage(response.data.message);
            setSuccess(true);
            // Clear form fields
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Failed to send the message. Please try again later.";
            setResponseMessage(errorMessage);
            setSuccess(false);
            console.error('Error submitting contact form:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Me</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    aria-required="true"
                    aria-label="Your Name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-required="true"
                    aria-label="Your Email Address"
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    aria-required="true"
                    aria-label="Your Message"
                ></textarea>
            </div>
            <button type="submit" disabled={loading} className="submit-button">
                {loading ? 'Sending...' : 'Submit'}
            </button>
            {responseMessage && (
                <p className={`response-message ${success ? 'success' : 'error'}`} aria-live="polite">
                    {responseMessage}
                </p>
            )}
            {loading && <div className="loading-spinner">Loading...</div>}
        </form>
    );
};

export default Contact;
