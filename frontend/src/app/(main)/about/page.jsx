import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        This is a simple about page for a React application. You can customize
        this content to provide information about your website, team, or project.
      </p>
      <p>
        Feel free to add more sections like:
      </p>
      <ul>
        <li>Our Mission</li>
        <li>Our Team</li>
        <li>Contact Information</li>
      </ul>
    </div>
  );
}

export default About;
