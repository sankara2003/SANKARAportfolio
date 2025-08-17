
import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from './context/themecontext';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
import Footer from './components/footer';
import './styles/portfolio.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    // Observe all animate-on-scroll elements
    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observerRef.current.observe(el);
      });
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Header isScrolled={isScrolled} scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;