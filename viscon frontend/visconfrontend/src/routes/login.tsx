import "./login.css";
import { Link } from "react-router-dom";
import "./UserMenu.css";
import React from 'react'; 

function Login(){
    return (
        <div className="loginmenu">
            <img className="logo-1" src="/small-viscon-logo.png" alt="image" />
            <h1 className="heading"> Welcome to Viscon support</h1>
            <div className='loginbutton'>
                <h4 className='hh'>Log in</h4>

                <form onSubmit={loginsubmit}>
                    <input placeholder='Username' className="Lbtn" type='text'></input><br />
                    <input placeholder='Password' className="Lbtn" type='password' ></input> <br />
                </form>
                <a href=''>wachtwoord vergeten?</a>
            </div>
        </div>
    )
}

const loginsubmit = ( 
);

export default Login;