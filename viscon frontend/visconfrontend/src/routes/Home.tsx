import React from 'react';
import { Link } from "react-router-dom";
import NavigationBar from '../components/NavigationBar';
import './Home.css';

function Home() {
    return(
        <div className="Home">
            <NavigationBar></NavigationBar>
        </div>
    );
}

export default Home;