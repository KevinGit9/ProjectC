import "./login.css";
import { Link } from "react-router-dom";
import "./UserMenu.css";
import React from 'react'; 

class Login extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = { Username:"", Password:"" };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.Username + this.state.Password);
        //fetch post request komt hier



        event.preventDefault();
    }

    render() {
        return (
            <div className="loginmenu">
                <img className="logo-1" src="/small-viscon-logo.png" alt="image" />
                <h1 className="heading"> Welcome to Viscon support</h1>
                <div className='loginbutton'>
                    <h4 className='hh'>Log in</h4>
                    <form onSubmit={this.handleSubmit}>
                        <input name="Username" placeholder='Username' value={this.state.Username} onChange={this.handleInputChange} className="Lbtn" type='text'></input><br />
                        <input name="Password" placeholder='Password' value={this.state.Password} onChange={this.handleInputChange} className="Lbtn" type='password' ></input> <br />
                        <button type="submit">Log in</button>
                    </form>
                <a href=''>wachtwoord vergeten?</a>
            </div>
        </div>
        );
    }
}

//const Login = () => {
//    const [Username, setUsername] = React.useState('');
//    const [Password, setPassword] = React.useState('');

//    const loginSubmit = event => {
//        console.log('handleSubmit ran');
//        event.preventDefault(); //  prevent page refresh

//        //  access input values here
//        console.log('firstName ', Username);
//        console.log('lastName ', Password);

//        //  clear all input values in the form
//        setUsername('');
//        setPassword('');
//    };

//    return (
//        <div className="loginmenu">
//            <img className="logo-1" src="/small-viscon-logo.png" alt="image" />
//            <h1 className="heading"> Welcome to Viscon support</h1>
//            <div className='loginbutton'>
//                <h4 className='hh'>Log in</h4>


//                <form onSubmit={loginSubmit}>
//                    <input id="Username" placeholder='Username' className="Lbtn" type='text'></input><br />
//                    <input id="Password" placeholder='Password' className="Lbtn" type='password' ></input> <br />
//                    <button type="submit">Log in</button>
//                </form>

//                <a href=''>wachtwoord vergeten?</a>
//            </div>
//        </div>
//    )
//}


export default Login;