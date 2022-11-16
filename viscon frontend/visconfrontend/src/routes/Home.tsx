import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return(
        <div className="Home">
            <h1> Home </h1>
            <img src="visconlogo.png" className="logo"></img>
            <Link to="machines"> Click to view machines page </Link>
            <Link to="checklist"> Click to view checklist page </Link>
            <Link to="usermenu"> Click to view usermenu page </Link>
            <Link to="problems"> Click to view problems page </Link>
            <Link to="submitform"> Click to view Submissionform page </Link>
            <Link to="login">Click to view login page</Link>
            <Link to="Admin">Click to go to adminpage</Link>
        </div>
    );
}

export default Home;