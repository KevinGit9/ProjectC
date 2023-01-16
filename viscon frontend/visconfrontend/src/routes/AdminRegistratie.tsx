import React, { useEffect, useState } from 'react';
import { GetCompanies } from '../services/CompanyServices';
import { RegisterUser } from '../services/UserServices';
import './AdminRegistratie.css';

const AdminRegistration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [company, setCompany] = useState("");
  const [companies, setCompanies] = useState<any>([]);
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setCompanies(await GetCompanies());
    }
    fetchData();
    console.log(companies);
  }, []);


  const handleChange = (e, setter) => {
    setter(e.target.value);
  }

  const handleSubmit = () => {
    if (firstName === "") return (setError("First Name has not been filled in."));
    if (lastName === "") return (setError("Last Name has not been filled in."));
    if (email === "") return (setError("Email has not been filled in."));
    if (password === "") return (setError("Password has not been filled in."));
    if (confirmPassword === "") return (setError("Password has not been filled in."));
    if (company === "") return (setError("Company has not been selected."));
    if (role === "") return (setError("Role has not been selected."));
    if (password !== confirmPassword) return (setError("Passwords do not match."));
    RegisterUser(firstName, lastName, email, password, company, role);
    return (setError("Account successfully created."));
  }

  return (
    <div className="registration-layout">
      <div className="reg-title">
        <h1> Register an Account</h1>
      </div>
      <div className="reg-form">
        <div>
          <label>
            Name:
            <input type="text" onChange={(e) => handleChange(e, setFirstName)} value={firstName} placeholder="Enter your name" />
          </label>
          <label>
            Last Name:
            <input type="text" onChange={(e) => handleChange(e, setLastName)} value={lastName} placeholder="Enter your last name" />
          </label>
          <label>
            Email:
            <input type="email" onChange={(e) => handleChange(e, setEmail)} value={email} placeholder="Enter your email" />
          </label>
          <label>
            Password:
            <input type="password" onChange={(e) => handleChange(e, setPassword)} value={password} placeholder="Enter password" />
          </label>
          <label>
            Confirm Password:
            <input type="password" onChange={(e) => handleChange(e, setConfirmPassword)} value={confirmPassword} placeholder="Confirm password" />
          </label>
          <label>
            Company:
            <select onChange={(e) => handleChange(e, setCompany)} value={company}>
              <option value=""> Select a company </option>
              {companies.map((company) => (
                <option key={company.id} value={company.name}>
                  {company.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Select a Role:
            <select onChange={(e) => handleChange(e, setRole)} value={role}>
              <option value=""> Select a role </option>
              <option value="admin"> Admin </option>
              <option value="key user"> Key User </option>
              <option value="user"> User </option>
            </select>
          </label>
          <button type="submit" onClick={handleSubmit}>Register</button>
        </div>
        {error}
      </div>
    </div>
  );
};

export default AdminRegistration;



