
import React from 'react';
import './Aboutus.css';

export default function Aboutus() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <h2 className="section-title">About Us</h2>
        <div className="accordion" id="aboutUsAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Our Mission
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#aboutUsAccordion"
            >
              <div className="accordion-body">
                Our mission is to connect job seekers with employers through a seamless, user-friendly platform. We aim to empower individuals by providing them access to job opportunities, career resources, and skill development tools.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Our Vision
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#aboutUsAccordion"
            >
              <div className="accordion-body">
                Our vision is to become the leading job search and career platform globally, empowering individuals and organizations alike to succeed in the evolving job market.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Our Values
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#aboutUsAccordion"
            >
              <div className="accordion-body">
                We believe in transparency, diversity, integrity, and continuous improvement. We strive to foster an inclusive culture where individuals are valued and empowered to contribute to the success of their careers and organizations.
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
          </div>
          <div className="footer-contact">
            <ul className="contact-list">
              <li>Ayan Abdullah: 123-456-7890</li>
              <br />
              <li>Umar khan: 987-654-3210</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
