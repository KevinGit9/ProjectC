import React, { useState } from 'react'
import './login.css';
import { useNavigate } from 'react-router';
import { Login } from '../services/UserServices';
import { getUserRole } from '../services/LocalStorageManager';


const LoginLayout = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleLogin = async () => {
    await Login(email, password);
    if (getUserRole() == "admin") navigate("/admin");
   
    else navigate("/usermenu");
    console.log(email);
  }

  return (
    <div className="login-layout">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <a href="#">Forget password?</a>
        </div>
        <button onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginLayout;




