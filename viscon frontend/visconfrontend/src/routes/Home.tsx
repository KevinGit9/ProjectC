import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return(
        <div className="Home">
            <h1> Home </h1>
            <Link to="machines"> Click to view machines page </Link>
            <Link to="checklist"> Click to view checklist page </Link>
        </div>
    );
}

export default Home;