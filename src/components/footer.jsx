import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Decorative Background Elements */}
      <div className="background-elements">
        {/* Mountains */}
        <div className="mountain mountain-1"></div>
        <div className="mountain mountain-2"></div>

        {/* Stars */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
            }}
          />
        ))}
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        <p className="footer-title">
          &copy; 2025 Sankara Subramanian S. All rights reserved.
        </p>
        <p className="footer-subtitle">Built with React & Modern Web Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
