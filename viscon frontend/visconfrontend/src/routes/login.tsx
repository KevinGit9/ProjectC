import React from 'react'
import { getUserId } from '../services/LocalStorageManager';
import { Login } from '../services/UserServices';
import './login.css';
const LoginLayout = () => {
  //User for testing purposes.  
  Login("admin@gmail.com", "admin");
  console.log(getUserId());

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
      </div>
  );
};

export default LoginLayout;








