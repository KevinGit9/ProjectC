import React from 'react';
import TopBar from "../components/TopBar";
import { useNavigate } from 'react-router-dom';
import "./UserMenu.css";

function UserMenu() {
  const navigate = useNavigate();

  return (
    <div>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet" />
      </head>
      <body>
        <TopBar /> {/* van links naar rechts werken met div boxes*/}
        <div className="circle" />
        <div className="masterContainer">
          <div className="textBox">
            <div className = "motto">
              <h2>Together<br /><span>We Solve</span></h2>
              <h2 className='exclamationMark'>!</h2>
            </div>
            <p>Help us find a solution to the problem of your device. <br />Get <span>started</span> with us</p>
            <div className="mainButtonContainer">
              <button className="btn-1" onClick={() => navigate("/machines")}> Create Ticket </button>
              <button className="btn-2"> View My Tickets </button>
            </div>
            <div className="VectorArt"></div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default UserMenu;