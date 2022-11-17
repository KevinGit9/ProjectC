import React from 'react';
<<<<<<< Updated upstream
=======
import TopBar from "../components/TopBar";
import { useNavigate } from 'react-router-dom';
>>>>>>> Stashed changes
import "./UserMenu.css";


function UserMenu() {
  return (
    <body>
      <TopBar/>
    <div className="container-1">
      <img className = "logo-1" src="/small-viscon-logo.png" alt="image"/>
      <button className="btn-1"> Melding Maken </button>
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