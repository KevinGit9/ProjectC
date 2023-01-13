import React, { useState } from 'react'
import './login.css';
import { useNavigate } from 'react-router';
import { Login } from '../services/UserServices';
import { getUserRole } from '../services/LocalStorageManager';

const LoginLayout = () => {
    const [emailInput, setEmailInput]= useState<string>('')
    const [passwordInput, setPasswordInput]= useState('')
  let navigate = useNavigate();
  const handleLogin = async (email: string, password: string) => {
    console.log(`email: ${email}`)
    console.log(`password: ${password}`)
  }

  return (
      <div className="login-layout">
          <h1>Login</h1>
          <form>
              <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" onChange={e => setEmailInput(e.target.value)}/>
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="password" onChange={e => setPasswordInput(e.target.value)}/>
              </div>
              <div className="form-group">
                  <a href="#">Forget password?</a>
              </div>
          </form>
          <button className="login" onClick={() => handleLogin(emailInput, passwordInput)}>Log in</button>
      </div>
  );
};

export default LoginLayout;




