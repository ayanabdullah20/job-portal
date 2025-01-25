import React from 'react';
import './OurServices.css';

export default function OurServices() {
  return (
    <div className="our-services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <h3>Job Search</h3>
          <p>Find a wide range of job listings in various industries and roles, tailored to your preferences.</p>
        </div>
        <div className="service-card">
          <div className="icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <h3>Career Resources</h3>
          <p>Access expert advice, resume-building tips, interview strategies, and much more.</p>
        </div>
        <div className="service-card">
          <div className="icon">
            <i className="fas fa-users"></i>
          </div>
          <h3>Networking Opportunities</h3>
          <p>Connect with potential employers and professionals from various fields for networking and opportunities.</p>
        </div>
        <div className="service-card">
          <div className="icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <h3>Skill Development</h3>
          <p>Enhance your skills through online courses, certifications, and learning resources available through our platform.</p>
        </div>
      </div>
    </div>
  );
}
