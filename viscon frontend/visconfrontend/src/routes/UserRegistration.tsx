import { useEffect, useState } from 'react';
import { GetCompanyFromId } from '../services/CompanyServices';
import { getUserCompany } from '../services/LocalStorageManager';
import { RegisterUser } from '../services/UserServices';
import './AdminRegistratie.css';

const UserRegistration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [company, setCompany] = useState<any>("");
  const [error, setError] = useState("");

  const role = "user";
  const companyId = getUserCompany();

  useEffect(() => {
    async function fetchData() {
      setCompany(await GetCompanyFromId(companyId));
    }
    fetchData();
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
    if (password !== confirmPassword) return (setError("Passwords do not match."));
    RegisterUser(firstName, lastName, email, password, company.name, role);
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
          <button type="submit" onClick={handleSubmit}>Register</button>
        </div>
        {error}
      </div>
    </div>
  );
};

export default UserRegistration;