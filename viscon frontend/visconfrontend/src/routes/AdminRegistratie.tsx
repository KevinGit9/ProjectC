import React from 'react';
import './AdminRegistratie.css';
const RegistrationLayout = () => {
  return (
    <div className="registration-layout">
      <div className="reg-title">
        <h1>Create an Account</h1>
      </div>
      <div className="reg-form">
        <form>
          <label>
            Name:
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Last Name:
            <input type="text" placeholder="Enter your last name" />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Password:
            <input type="password" placeholder="Enter password" />
          </label>
          <label>
            Confirm Password:
            <input type="password" placeholder="Confirm password" />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
export default RegistrationLayout;



