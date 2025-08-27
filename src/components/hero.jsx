import React, { useState, useEffect } from "react";

const skillIcons = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
];

// Custom typing animation component
const TypingAnimation = ({ texts, speed = 100 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("SANKARA SUBRAMANIAN S");

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentCharIndex < currentText.length) {
            setDisplayText(currentText.substring(0, currentCharIndex + 1));
            setCurrentCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentCharIndex > 0) {
            setDisplayText(currentText.substring(0, currentCharIndex - 1));
            setCurrentCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timer);
  }, [currentCharIndex, currentTextIndex, isDeleting, texts, speed]);

  return (
    <span className="typing-text">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

const Hero = ({ scrollToSection }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const typingTexts = [
    "Sankara Subramanian S",
    "Frontend Developer",
    "MERN Stack Expert",
    "UI/UX Designer",
  ];

  const handleScrollToSection = () => {
    if (scrollToSection) {
      scrollToSection("about");
    } else {
      // Fallback scroll behavior
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div id="home" className={`hero-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      <style jsx>{`
        .skill-icon-container1 {
          position: relative;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          overflow: hidden;
        }

        .skill-icon-container1:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.2);
        }

       
        .hero-content h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          margin-bottom: 1rem;
          font-weight: 700;
          min-height: 1.2em;
          color: white;
        }
        .hero-wrapper {
          min-height: 100vh;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .light-mode {
          background: linear-gradient(135deg, #8E0E00 0%, #1F1C18 100%);
          color: #333;
        }

        .dark-mode {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
        }

        .hero-wrapper::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          
          pointer-events: none;
        }

        .hero-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem 1rem;
          position: relative;
          z-index: 1;
        }

       

        

     

        .hero-content {
          text-align: center;
          max-width: 800px;
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : 30}px);
          transition: all 0.8s ease;
        }

        .hero-content h1 {
          font-size: clamp(1.5rem, 5vw, 3.5rem);
          margin-bottom: 1rem;
          font-weight: 700;
          line-height: 1.2;
          word-break: break-word;
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .typing-text {
          position: relative;
        }

        .cursor {
          animation: blink 1s infinite;
          color: #fff;
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .subtitle {
        color: white;
          font-size: 1.4rem;
          margin-bottom: 2rem;
          opacity: 0.8;
          font-weight: 300;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .light-mode .social-icon {
          background: rgba(255, 255, 255, 0.2);
          color: #333;
        }

        .dark-mode .social-icon {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .social-icon:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .social-icon:nth-child(1):hover {
          background: linear-gradient(45deg, #333, #666);
          color: white;
        }

        .social-icon:nth-child(2):hover {
          background: linear-gradient(45deg, #0077b5, #00a0dc);
          color: white;
        }

        .skills-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          margin: 3rem 0;
          padding: 2rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .light-mode .skills-bar {
          background: rgba(255, 255, 255, 0.1);
        }

        .dark-mode .skills-bar {
          background: rgba(255, 255, 255, 0.05);
        }

        .skill-icon-container {
          position: relative;
          padding: 0.8rem;
          border-radius: 15px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .light-mode .skill-icon-container {
          background: rgba(255, 255, 255, 0.2);
        }

        .dark-mode .skill-icon-container {
          background: rgba(255, 255, 255, 0.1);
        }

        .skill-icon-container:hover {
          transform: translateY(-10px) rotate(5deg);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .skill-icon {
          width: 50px;
          height: 50px;
          transition: all 0.3s ease;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }

        .skill-tooltip {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.8rem;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .skill-icon-container:hover .skill-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(-5px);
        }

        .cta-button {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #cc90dbff, #4a064dff);
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: all 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .status-banner {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #4ade80, #22d3ee);
          color: white;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: pulse-glow 2s ease infinite;
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
              0 0 20px rgba(74, 222, 128, 0.3);
          }
          50% {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
              0 0 30px rgba(74, 222, 128, 0.5);
          }
        }

        @media (max-width: 768px) {
          

          .skills-bar {
            gap: 1rem;
            padding: 1.5rem;
          }

          .skill-icon-container {
            padding: 0.6rem;
          }

          .skill-icon {
            width: 40px;
            height: 40px;
          }

          .cta-button {
            padding: 0.8rem 2rem;
            font-size: 1rem;
          }

          .status-banner {
            bottom: 1rem;
            padding: 0.6rem 1.5rem;
            font-size: 0.9rem;
          }
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-element {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: float 20s linear infinite;
        }

        .floating-element:nth-child(1) {
          left: 10%;
          animation-delay: 0s;
        }
        .floating-element:nth-child(2) {
          left: 20%;
          animation-delay: 2s;
        }
        .floating-element:nth-child(3) {
          left: 30%;
          animation-delay: 4s;
        }
        .floating-element:nth-child(4) {
          left: 40%;
          animation-delay: 6s;
        }
        .floating-element:nth-child(5) {
          left: 50%;
          animation-delay: 8s;
        }
        .floating-element:nth-child(6) {
          left: 60%;
          animation-delay: 10s;
        }
        .floating-element:nth-child(7) {
          left: 70%;
          animation-delay: 12s;
        }
        .floating-element:nth-child(8) {
          left: 80%;
          animation-delay: 14s;
        }
        .floating-element:nth-child(9) {
          left: 90%;
          animation-delay: 16s;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      <section className="hero-section">
        {/* Floating background elements */}
        <div className="floating-elements">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="floating-element" />
          ))}
        </div>

        {/* Theme toggle */}
       <br/>
       <br/>
       <br/>

        <div className="hero-content">
          <h1>
            <TypingAnimation texts={typingTexts} speed={100} />
          </h1>
          <p className="subtitle">
            இணையம் – எல்லை கடந்த கனவுகளுக்கு விதிவிலக்கு
          </p>

          <div className="social-icons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub Profile"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn Profile"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          <div className="skills-bar">
            {skillIcons.map((skill) => (
              <div key={skill.name} className="skill-icon-container">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-icon"
                  loading="lazy"
                />
                <div className="skill-tooltip">{skill.name}</div>
              </div>
            ))}
          </div>

          <button
            className="skill-icon-container1"
            onClick={handleScrollToSection}
          >
            Explore My Work
          </button>
        </div>

        {/* <div className="status-banner">✨ Available for Freelance</div> */}
      </section>
    </div>
  );
};

export default Hero;
