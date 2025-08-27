import React from "react";
import { motion } from "framer-motion";
import "./projects.css";
import logo from "./club_logo.png";
const Projects = () => {
  const projects = [
    {
      title: "Member Portal",
      subtitle: "Private Event Organization Platform",
      description:
        "Developed a comprehensive website for a private Event Organization with features for member registration and login, providing a seamless user experience.",
      technologies: [
        "HTML",
        "MUI",
        "CSS",
        "JavaScript",
        "ReactJS",
        "NodeJS",
        "MongoDB",
      ],
      image:logo,
      live: "https://your-member-portal-demo.com",
      github: "https://github.com/your-repo/member-portal",
    },
    {
      title: "Employee Management App",
      subtitle: "Cross-Platform Mobile Application",
      description:
        "Designed and implemented a mobile application for employee management, available on both iOS and Android platforms with comprehensive admin dashboard.",
      technologies: [
        "React Native",
        "JavaScript",
        "Mobile Development",
        "Admin Dashboard",
      ],
      image: "https://imgs.search.brave.com/CrSziZJYTClcSD3CUd7KH8_8g-UtFI0OiuVLDx_rdOk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/aGFuZC1kcmF3bi1m/bGF0LWRlc2lnbi1l/cnAtaWxsdXN0cmF0/aW9uXzIzLTIxNDkz/Nzk1MDQuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MCZxPTgw",
      live: "https://your-employee-app-demo.com",
      github: "https://github.com/your-repo/employee-management",
    },
    {
      title: "Moodle Customization",
      subtitle: "Platform Enhancement Project",
      description:
        "Customized Moodle platform by modifying login and user functionality to meet specific organizational requirements and improve user experience.",
      technologies: ["PHP", "Moodle", "MySQL", "Custom Development"],
      image: "https://imgs.search.brave.com/TfkUcEJss0ztzln8z84MFyzJOCTptZQ4jqaoLJhzNvw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQwLzEvbW9vZGxl/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTQwMTE5/My5wbmc",
      live: "https://your-moodle-demo.com",
      github: "https://github.com/your-repo/moodle-custom",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-header">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>

              <div className="project-content">
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                {/* <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
