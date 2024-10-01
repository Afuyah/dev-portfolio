import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);  // State to track the menu visibility
  const [scrolled, setScrolled] = useState(false);  // State to track if user has scrolled down

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu after a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Scroll effect to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <h1 className="header-title">H. Afuya</h1>
        <div
          className="hamburger"
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isOpen ? 'active' : ''}`}></div>
        </div>
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>About</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/experience" onClick={closeMenu}>Experience</Link></li>
          <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
