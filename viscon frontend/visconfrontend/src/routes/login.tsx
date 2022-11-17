import "./login.css"
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="loginmenu">

            <h1 className="heading"> Welcome to Viscon support</h1><br />
            <img className="logo-1" src="/viscon-logo.jpeg" alt="image" />
            
            <div className='loginbutton'>
            <h4 className = 'hh'>Log in</h4>
            
                Username: <br />
                <input className="Lbtn" type='text'></input><br />
                Password:<br/>
                <input className="Lbtn" type='password'></input> <br />
            
                <Link to = '/machines'>
                    <input className="Lbtn" type='submit'></input> 
                </Link>

                <Link to='/admin'>
                    <input className="Lbtn" type='submit'></input> <br />
                </Link>
            </div>

            wachtwoord vergeten?
           
        </div>
    );
}

export default Login;