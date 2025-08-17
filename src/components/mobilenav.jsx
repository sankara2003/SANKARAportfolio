import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import ThemeToggle from './themetoggle';

const MobileNav = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className="mobile-menu-button"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <div className="logo">SS</div>
            <ThemeToggle />
          </div>
          
          <nav className="mobile-nav-links">
            <a href="#home" onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}>
              Home
            </a>
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}>
              About
            </a>
            <a href="#skills" onClick={(e) => {
              e.preventDefault();
              handleNavClick('skills');
            }}>
              Skills
            </a>
            <a href="#experience" onClick={(e) => {
              e.preventDefault();
              handleNavClick('experience');
            }}>
              Experience
            </a>
            <a href="#projects" onClick={(e) => {
              e.preventDefault();
              handleNavClick('projects');
            }}>
              Projects
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
