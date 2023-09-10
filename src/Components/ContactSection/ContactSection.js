import React from 'react';
import './ContactSection.css'; 
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2>Join the Digital Transformation</h2>
      <p>Partner with Alfagan to Revolutionize Your Industry Today</p>
      <p>Explore how our software solutions are transforming industries worldwide...</p>
      <Link to="/contact"> 
          <button className="contact-button">Contact Us for a Consultation</button>
      </Link>
    </section>
  );
};

export default ContactSection;
