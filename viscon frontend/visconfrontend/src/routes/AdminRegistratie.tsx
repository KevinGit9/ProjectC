import React, { useState } from 'react';
import './AdminRegistratie.css';

const AdminRegistration = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  }

  return (
    <div className="registration-layout">
      <div className="reg-title">
        <h1>Create an Account</h1>
      </div>
      <div className="reg-form">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)}/>
          </label>
          <label>
            Last Name:
            <input type="text" placeholder="Enter your last name" value={lastName} onChange={e => setLastName(e.target.value)}/>
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}/>
          </label>
          <label>
            Password:
            <input type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)}/>
          </label>
          <label>
            Confirm Password:
            <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default AdminRegistration;
