import React, { useState } from 'react';
import './SignInForm.css'; // Import the CSS for styling

const SignInForm = ({ showForm, handleClose }) => {
  // Use state to manage form input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', { email, password });
    handleClose(); // Close form after submission
  };

  return (
    <div className={`form-popup ${showForm ? 'show' : ''}`}>
      <div className="form-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-close" onClick={handleClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
