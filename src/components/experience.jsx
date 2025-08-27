import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const experiences = [
    {
      title: "Frontend Developer",
      company: "The Zigma Technologies",
      date: "Dec 2023 – Present",
      duration: "1.5+ months",
      status: "Current",
    points: [
  "Designed and implemented a mobile app for employee management, available on both iOS and Android",
  "Created multiple web pages and an admin dashboard for efficient data management",
  "Developed a comprehensive website for the company",
  "Customized Moodle platform, modifying the login and user functionality to meet specific organizational needs",
  "Improved user experience by 40% through design and performance optimizations",
  "Implemented cookie-based authentication in React for secure login and session management",
  "Architected and developed mobile applications using Flutter, and deployed to Google Play Store (AAB bundle) and Apple App Store (IPA build)",
  "Customized Moodle LMS platform for authentication and user management",
  "Integrated Razorpay payment gateway in a React web app for online transactions, including secure checkout and payment verification",
  "Managed multiple projects and collaborated with clients to streamline workflows, boosting overall productivity",
  "Communicated with back-end developers for any front-end problematic issues",
  "Led code reviews for 2+ projects, improving code quality and consistency throughout the team"
],

      skills: ["React Native", "iOS", "Android", "Moodle", "Full Stack"]
    },
    {
      title: "Frontend Developer (Intern)",
      company: "The Zigma Technologies", 
      date: "Oct 2023 – Dec 2023",
      duration: "3 months",
      status: "Completed",
     points: [
  "Developed an Admin Dashboard website using React JS for the frontend",
  "Gained experience with CRUD operations, implementing them efficiently for seamless data handling and management",
  "Implemented responsive design to ensure the dashboard was optimized for various devices and screen sizes"
],

      skills: ["React JS", "CRUD Operations", "Responsive Design", "Dashboard"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [experiences.length]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="experience" className="experience-wrapper">
      {/* Animated Background Elements */}
      <div className="background-overlay">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <section ref={sectionRef} className="experience-section">
        <div className="experience-container">
          {/* Section Header */}
          <div className={`experience-header ${isVisible ? 'visible' : ''}`}>
            <div className="header-content">
              <h2 className="section-title1">
                Experience
              </h2>
            </div>
        
          </div>

          {/* Timeline Navigation */}
          <div className="timeline-nav">
            <div className="nav-container">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`nav-dot ${activeIndex === index ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Experience Cards */}
          <div className="cards-wrapper">
            <div className="cards-container">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`experience-card ${
                    activeIndex === index
                      ? 'active'
                      : index < activeIndex
                      ? 'prev'
                      : 'next'
                  }`}
                >
                  <div className="card-inner">
                    {/* Card Header */}
                    <div className="card-header">
                      <div className="status-badge">
                        <div className={`status-indicator ${exp.status === 'Current' ? 'current' : 'completed'}`}>
                          {exp.status}
                        </div>
                      </div>
                      
                      <div className="header-main">
                        <div className="title-section">
                          <h3 className="job-title">{exp.title}</h3>
                          <p className="company-name">{exp.company}</p>
                        </div>
                        <div className="date-section">
                          <p className="job-date">{exp.date}</p>
                          <p className="job-duration">{exp.duration}</p>
                        </div>
                      </div>

                      {/* Skills Tags */}
                      <div className="skills-container">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="skill-tag"
                            style={{ animationDelay: `${skillIndex * 0.1}s` }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="card-content">
                      <div className="points-container">
                        {exp.points.map((point, pointIndex) => (
                          <div
                            key={pointIndex}
                            className="point-item"
                            style={{
                              animationDelay: `${pointIndex * 0.2 + 0.5}s`
                            }}
                          >
                            <div className="point-dot"></div>
                            <p className="point-text">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="hover-border"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Manual Navigation */}
          
        </div>
      </section>
    </div>
  );
};

export default Experience;