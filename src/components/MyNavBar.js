import React, { useState } from 'react';
import './Home.css';
import SignInForm from './SignInform';
import {Link} from 'react-router-dom';
export default function MyNavBar() {
  const [showForm, setShowForm] = useState(false); 

  const handleApplyNowClick = () => {
    setShowForm(true); // Show the form when 'Apply Now' is clicked
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form
  };



    const [showServices, setShowServices] = useState(false);
  
    const handleServicesClick = () => {
      setShowServices(!showServices);
    };


  return (
    <div>
   
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Job Search Portal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
              <li className="nav-item">
              <Link className="nav-link" to="/services">Our Services</Link>
                </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item"><Link to="/aboutus" className="nav-link">About Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>

       <div className="homepage">
        <section className="search-section">
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search for jobs..." />
            <button className="search-btn">Search</button>
          </div>
        </section>

        <section className="job-cards-section">
          <h2 className="section-title">Popular Job Listings</h2>
          <div className="job-cards">
            <div className="job-card">
              <h3>Software Engineer</h3>
              <p>Google - Remote</p>
              <button className="apply-btn" onClick={handleApplyNowClick}>Apply Now</button>
            </div>

            <div className="job-card">
              <h3>Data Scientist</h3>
              <p>Facebook - On-site</p>
              <button className="apply-btn" onClick={handleApplyNowClick}>Apply Now</button>
            </div>

            <div className="job-card">
              <h3>UI/UX Designer</h3>
              <p>Amazon - Hybrid</p>
              <button className="apply-btn" onClick={handleApplyNowClick}>Apply Now</button>
            </div>

            <div className="job-card">
              <h3>Product Manager</h3>
              <p>Microsoft - Remote</p>
              <button className="apply-btn" onClick={handleApplyNowClick}>Apply Now</button>
            </div>

            <div className="job-card">
              <h3>Frontend Developer</h3>
              <p>Apple - On-site</p>
              <button className="apply-btn" onClick={handleApplyNowClick}>Apply Now</button>
            </div>
            <div className="job-card">
              <h3>Backend Developer</h3>
              <p>Netflix - Hybrid</p>
              <button className="apply-btn" onClick={handleApplyNowClick}>Apply Now</button>
            </div>
            <div className="job-card">
              <h3>Backend Developer</h3>
              <p>Netflix - Hybrid</p>
              <button className="apply-btn" onClick={handleApplyNowClick}>Apply Now</button>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Job Search Portal. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Terms of Service</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </footer>

      <SignInForm showForm={showForm} handleClose={handleCloseForm} />
    </div>




     
  );
}
