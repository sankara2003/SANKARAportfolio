import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Member Portal",
      subtitle: "Private Event Organization Platform",
      description: "Developed a comprehensive website for a private Event Organization with features for member registration and login, providing a seamless user experience.",
      technologies: ["HTML", "MUI", "CSS", "JavaScript", "ReactJS", "NodeJS", "MongoDB"]
    },
    {
      title: "Employee Management App",
      subtitle: "Cross-Platform Mobile Application",
      description: "Designed and implemented a mobile application for employee management, available on both iOS and Android platforms with comprehensive admin dashboard.",
      technologies: ["React Native", "JavaScript", "Mobile Development", "Admin Dashboard"]
    },
    {
      title: "Moodle Customization",
      subtitle: "Platform Enhancement Project",
      description: "Customized Moodle platform by modifying login and user functionality to meet specific organizational requirements and improve user experience.",
      technologies: ["PHP", "Moodle", "MySQL", "Custom Development"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card animate-on-scroll">
              <div className="project-header">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
              <div className="project-content">
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
