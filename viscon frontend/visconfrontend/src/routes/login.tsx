import "./login.css"
import { Link } from "react-router-dom";
import './UserMenu.css'
function Login() {
    return (
        <div className="loginmenu">

            <h1 className="heading"> Welcome to Viscon support</h1><br />
            <img className="logo-1" src="/viscon-logo.jpeg" alt="image" />
            <input className= "btn-1" type='text'></input>
            <input className="btn-1" type='password'></input> <br />
            <Link to = '/machines'>
            <input className="btn-1" type='submit'></input> <br />
            </Link>
            <Link to='/admin'>
                <input className="btn-1" type='submit'></input> <br />
            </Link>
            wachtwoord vergeten?
           
        </div>
    );
}

export default Login;