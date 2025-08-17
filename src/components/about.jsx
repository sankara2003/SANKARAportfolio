
import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import profileImage from '../../public/mypic.jpg'; // adjust path as needed

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        <div className="about-content animate-on-scroll">
         <div className="about-image">
  <img src={profileImage} alt="Sankara Subramanian" className="profile-img" />
</div>

          <div>
            <div className="about-text">
              <p>
                I'm a passionate Frontend Developer and UI/UX Designer with a strong foundation in computer science. 
                Currently working as a Project Associate at The Zigma Technologies, where I design and implement 
                mobile applications and web solutions that make a real impact.
              </p>
              <p>
                With a CGPA of 8.2/10.0 from Guru Nanak College, I bring both technical expertise and creative 
                problem-solving skills to every project. My experience ranges from developing responsive web 
                applications to customizing complex platforms like Moodle.
              </p>
              <p>
                Beyond coding, I'm actively involved in theatre arts and have served as NSS Cultural Secretary, 
                which has enhanced my leadership and creative skills.
              </p>
            </div>
            <div className="contact-info">
              <a href="mailto:sivasankara21225@gmail.com" className="contact-item">
                <Mail size={20} />
                sivasankara21225@gmail.com
              </a>
              <a href="tel:+916374870684" className="contact-item">
                <Phone size={20} />
                +91 6374870684
              </a>
              <a href="https://linkedin.com/in/sankara-subramanian" className="contact-item" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                LinkedIn Profile
              </a>
              <div className="contact-item">
                <MapPin size={20} />
                Pammal, Chennai
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
