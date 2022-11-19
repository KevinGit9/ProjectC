import React from 'react';
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';
import "./UserMenu.css";


function UserMenu() {
  const navigate = useNavigate();

  return (
    <body>
      <div className="container-1">
        <img className="logo-1" src="/small-viscon-logo.png" alt="image" />
        <button className="btn-1" onClick={() => navigate("/machines")}> Melding Maken </button>
        <button className="btn-2"> Mijn Meldingen </button>
      </div>
    </body>
  );


}

export default UserMenu;