import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Skills = () => {
  const sliderRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" }
      ]
    },
    {
      title: "UI/UX Design",
      skills: [
        { name: "UI Design" },
        { name: "UX Design" },
        { name: "Prototyping" },
        { name: "Wireframing" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
        { name: "NPM/Yarn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
      ]
    },
    {
      title: "API & Integration",
      skills: [
        { name: "RESTful APIs" },
        { name: "Axios" },
        { name: "Fetch API" }
      ]
    },
    {
      title: "Additional Tools",
      skills: [
        { name: "Moodle" },
        { name: "Nextcloud" },
        { name: "QGIS" },
        { name: "Appsmith" }
      ]
    },
    {
      title: "Familiar Technologies",
      skills: [
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
      ]
    }
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // mobile view
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  // Mouse scroll wheel handler
  useEffect(() => {
    const handleWheel = (event) => {
      if (!sliderRef.current) return;

      event.preventDefault();
      if (event.deltaY > 0) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    };

    const sliderElement = document.querySelector('.slick-slider');

    if (sliderElement) {
      sliderElement.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <section id="skills" className="section" aria-label="Skills and Technologies">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Skills & Technologies</h2>
        <Slider ref={sliderRef} {...settings}>
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-slide">
              <div className="skill-category" role="region" aria-labelledby={`category-${index}`}>
                <h4 id={`category-${index}`}>{category.title}</h4>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag" title={skill.name}>
                      {skill.icon && (
                        <img
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          className="skill-icon"
                          loading="lazy"
                          aria-hidden="true"
                        />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
