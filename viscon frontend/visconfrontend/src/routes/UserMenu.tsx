import React from 'react';
import "./UserMenu.css";

function UserMenu() {
  return (
    <body>
    <div className="hero">
      <nav>
        <img src="/visconlogo.png" className ="logo-nav" />
        <img src="/profile-icon.png" className ="icon-profile" />
      </nav>
    </div>
    <div className="container">
      <img className = "logo-1" src="/small-viscon-logo.png" alt="image"/>
      <button className="btn-1"> Melding Maken </button>
      <button className="btn-2"> Mijn Meldingen </button>
    </div>
    </body>
  );
}
  
export default UserMenu;