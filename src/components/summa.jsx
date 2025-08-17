import React, { useState, useEffect } from "react";

const skillIcons = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
];

// ✅ Mobile-Responsive Typing Animation
const TypingAnimation = ({ texts, speed = 100 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const timer = setTimeout(() => {
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
    }, isDeleting ? speed / 2 : speed);

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
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`hero-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      <style jsx>{`
        .hero-wrapper {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* Theme Toggle ✅ Mobile Friendly */
        .theme-toggle {
          position: fixed;
          top: 1rem;
          right: 1rem;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.4rem;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          z-index: 100;
        }

        .light-mode .theme-toggle {
          background: rgba(255, 255, 255, 0.2);
          color: #333;
        }
        .dark-mode .theme-toggle {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }

        /* Hero Content */
        .hero-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 100vh;
          padding: 2rem 1rem;
        }

        .hero-content {
          max-width: 90%;
          margin: 0 auto;
        }

        .hero-content h1 {
          font-size: clamp(1.8rem, 5vw, 3.5rem);
          margin-bottom: 1rem;
          font-weight: 700;
          line-height: 1.2;
          background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite;
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .typing-text {
          display: inline-block;
          font-size: inherit;
          color: white;
        }

        .cursor {
          color: #ff6b6b;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .subtitle {
          font-size: 1rem;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        /* Skills - Mobile Wrap ✅ */
        .skills-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
        }

        .skill-icon-container {
          padding: 0.6rem;
          border-radius: 12px;
          backdrop-filter: blur(6px);
        }

        .skill-icon {
          width: 40px;
          height: 40px;
        }

        /* Button */
        .cta-button {
          padding: 0.8rem 1.5rem;
          font-size: 1rem;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          background: linear-gradient(135deg, #cc90dbff, #4a064dff);
          color: white;
          font-weight: 600;
        }

        /* ✅ Mobile Fixes */
        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 1.6rem;
          }
          .subtitle {
            font-size: 0.9rem;
          }
          .skill-icon {
            width: 32px;
            height: 32px;
          }
          .cta-button {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <section className="hero-section">
        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <div className="hero-content">
          <h1>
            <TypingAnimation texts={typingTexts} speed={100} />
          </h1>
          <p className="subtitle">இணையம் – எல்லை கடந்த கனவுகளுக்கு விதிவிலக்கு</p>

          {/* Skills */}
          <div className="skills-bar">
            {skillIcons.map((skill) => (
              <div key={skill.name} className="skill-icon-container">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="cta-button" onClick={handleScrollToSection}>
            Explore My Work
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;





