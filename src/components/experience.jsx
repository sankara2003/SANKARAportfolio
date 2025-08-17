import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Project Associate",
      company: "The Zigma Technologies",
      date: "Dec 2023 – Present",
      points: [
        "Designed and implemented a mobile app for employee management, available on both iOS and Android",
        "Created multiple web pages and an admin dashboard for efficient data management",
        "Developed a comprehensive website for the company",
        "Customized Moodle platform, modifying the login and user functionality to meet specific organizational needs"
      ]
    },
    {
      title: "Frontend Developer (Intern)",
      company: "The Zigma Technologies",
      date: "Oct 2023 – Dec 2023",
      points: [
        "Developed an Admin Dashboard website using React JS for the frontend",
        "Gained experience with CRUD operations, implementing them efficiently for seamless data handling and management",
        "Implemented responsive design to ensure the dashboard was optimized for various devices and screen sizes"
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item animate-on-scroll">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-date">{exp.date}</span>
              </div>
              <ul className="experience-points">
                {exp.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
