import React from 'react';
import "./UserMenu.css";
function UserMenu() {
    return (
      <div className="container">
        <img className = "logo-1" src="/viscon-logo.jpeg" alt="image"/>
        <button className="btn-1"> Melding Maken</button>
        <button className="btn-2"> Mijn Meldingen</button>
      </div>
    );
  }
  
  export default UserMenu;