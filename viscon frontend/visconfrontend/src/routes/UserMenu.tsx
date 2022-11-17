import React from 'react';
import TopBar from "../components/TopBar";
import { useNavigate } from 'react-router-dom';
import "./UserMenu.css";


function UserMenu() {
  const navigate = useNavigate();

  return (
    <body>
      <TopBar /> {/* van links naar rechts werken met div boxes*/}
      <div className="circle"></div>
        <div className="masterContainer">
          <div className="mainButtonContainer">
            <img className="logo-1" src="/small-viscon-logo.png" alt="image" />
            <button className="btn-1" onClick={() => navigate("/machines")}> Create Ticket </button>
            <button className="btn-2"> My Tickets </button>
          </div>
        </div>
    </body>
  );


}

export default UserMenu;