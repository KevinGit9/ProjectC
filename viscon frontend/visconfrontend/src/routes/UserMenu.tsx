import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./UserMenu.css";

function UserMenu() {
  const navigate = useNavigate();

  return (
    <body>
    <div className="hero">
      <nav>
        <img src="/visconlogo.png" className ="logo-nav" />
        <img src="/profile-icon.png" className ="icon-profile" /> {/*onClick = {toggleMenu()}*/} 

        <div className="sub-menu-wrap" id = "subMenu">
            <div className="sub-menu">
                <div className="user-info">
                  <img className = "icon-profile-sub" src = "/profile-icon.png"></img>
                  <h2> John Smith</h2>
                </div>
                <hr></hr>

                <a href = "#" className = "sub-menu-link">
                  <img src="images/profile.png"/>
                  <p>View Profile Info</p>
                  <span>{'>'}</span>
                </a>
                <a href = "#" className = "sub-menu-link">
                  <img src="images/logout.png"/>
                  <p>Logout</p>
                  <span>{'>'}</span>
                </a>
   
          </div>
        </div>
      </nav>
    </div>
    <div className="container-1">
      <img className = "logo-1" src="/small-viscon-logo.png" alt="image"/>
      <button className="btn-1" onClick={() => navigate("/machines")}> Melding Maken </button>
      <button className="btn-2"> Mijn Meldingen </button>
    </div>

    {/* <script>

    function toggleMenu(){
      document.getElementById("subMenu").classList.toggle("open-menu");
    };
    </script> */}
    </body>
  );


}
  
export default UserMenu;