import React from 'react'
import './login.css';
const LoginLayout = () => {
  //User for testing purposes.  
  const user = {
    Id: "3eac0239-0ad8-4a1d-bddf-7e26c731a119",
    Name: "admin",
  }  
  localStorage.setItem("currentUser", JSON.stringify(user))  
  console.log(localStorage.getItem("currentUser"));

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








