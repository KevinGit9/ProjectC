import React from 'react'
import './login.css';
import { useNavigate } from 'react-router';
import { Login } from '../services/UserServices';
import { getUserRole } from '../services/LocalStorageManager';

const LoginLayout = () => {
  let navigate = useNavigate();
  const handleLogin = async (email: string, password: string) => {
    await Login(email, password);
    if (getUserRole() == "admin") navigate("/admin");
    else navigate("/usermenu");
  }

  return (
      <div className="login-layout">
          <h1>Login</h1>
          <form>
              <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" />
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="password" />
              </div>
              <div className="form-group">
                  <a href="#">Forget password?</a>
              </div>
              <button type="submit">Login</button>
              <button type="button" className="back-button">Back</button>
          </form>
          <button onClick={() => handleLogin("visconadmin", "visconadmin")}> Temporary Log in button</button>
      </div>
  );
};

export default LoginLayout;








