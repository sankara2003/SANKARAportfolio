import React from 'react';
import ThemeToggle from './themetoggle';
import MobileNav from './mobilenav';
import './header.css';

const Header = ({ isScrolled, scrollToSection }) => {
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">

          {isScrolled ? (
            <div className="logo dynamic-logo">SS</div>
          ) : (
            <div className="logo dynamic-logo">Sankarasubramanian S</div>
          )}

          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
          </ul>

          <div className="nav-actions">
            <div className="desktop-theme-toggle"><ThemeToggle /></div>
            <div className="mobile-nav-container"><MobileNav scrollToSection={scrollToSection} /></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
