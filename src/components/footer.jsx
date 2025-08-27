import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 1500);
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="footer-left"
        >
          <h2 className="footer-title">Let's Build Something Great ✨</h2>
          <p className="footer-desc">
            Have an idea or project in mind? I’d love to hear about it.  
            Let’s connect and bring it to life.
          </p>

          <div className="footer-contact">
            <div>
              <Mail className="icon" />
              <span>sivasankara21225@gmail.com</span>
            </div>
            <div>
              <Phone className="icon" />
              <span>+91 63748 70684</span>
            </div>
            <div>
              <MapPin className="icon" />
              <span>Tamil Nadu, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="form-box"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="form">
              <h3 className="form-title">Send me a message 🚀</h3>

              <div className="form-group">
                <User className="form-icon" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <Mail className="form-icon" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group textarea">
                <MessageSquare className="form-icon" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="submit-btn"
              >
                {isSubmitting ? "Sending..." : <><Send /> Send Message</>}
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="success-box"
            >
              <h3>✅ Message Sent!</h3>
              <p>Thank you for reaching out 🙌</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Sankara Subramanian S. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
