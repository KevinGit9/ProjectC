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
        </div>
    );
}

export default Home;