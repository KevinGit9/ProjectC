import React from 'react';
import TopBar from "../components/TopBar";
import { useNavigate } from 'react-router-dom';
import "./UserMenu.css";


function UserMenu() {
  const navigate = useNavigate();

  return (
    <div>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </head>
          <body>
            <TopBar /> {/* van links naar rechts werken met div boxes*/}
            <div className="circle"/>
            <div className="circle-2"/>
            <div className="circle-3"/>
            <div className="circle-4"/>

            <div className="masterContainer">
              <div className="textBox">
                  <h2>Let's Solve<br/><span>Together</span></h2>
               </div>
              <div className="mainButtonContainer">
                {/* <img className="logo-1" src="/small-viscon-logo.png" alt="image" /> */}
                <button className="btn-1" onClick={() => navigate("/machines")}> Create Ticket </button>
                <button className="btn-2"> My Tickets </button>
              </div>
            </div>
          </body>
        </div>
        );
}

        export default UserMenu;