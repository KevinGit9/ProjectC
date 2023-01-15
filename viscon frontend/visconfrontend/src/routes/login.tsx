import React, { useState } from 'react'
import './login.css';
import { useNavigate } from 'react-router';
import { Login } from '../services/UserServices';

const LoginLayout = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        if (email === "") return (setError("Email has not been filled in."));
        if (password === "") return (setError("Password has not been filled in."));
        await Login(email, password)
            .then(response => {
                navigate("/home");
            })
            .catch(error => {
                setError(`Email or Password is incorrect.`);
            });
    }

    const handleChange = (e, setter) => {
        setter(e.target.value);
    }

    return (
        <div className="login-layout">
            <h1>Login</h1>
            <div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={(e) => handleChange(e, setEmail)} value={email} placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={(e) => handleChange(e, setPassword)} value={password} placeholder="Enter your password" onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleLogin();
                        }
                    }} />
                </div>
                <div className="form-group">
                    <a href="#">Forget password?</a>
                    <p> {error} </p>
                </div>
                <button className="loginButton" onClick={handleLogin}> Login </button>
            </div>
        </div>
    );
};

export default LoginLayout;








