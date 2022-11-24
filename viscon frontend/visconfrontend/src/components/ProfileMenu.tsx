// import { joinPaths } from '@remix-run/router';
import React, {useState, useEffect, useRef} from 'react';
import { isPropertySignature } from 'typescript';
import "./ProfileMenu.css";

function ProfileMenu() {

  const [open, setOpen] = useState(false);

  return (
    <div className="profileMenu">
      <div className='menu-container'>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src="profile-icon.png"></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>The Kiet<br/><span>Website Designer</span></h3>
          <ul>
            <DropdownItem i = {"person"} text = {"My Profile"}/>
            <DropdownItem i = {"lotgout"} text = {"Logout"}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props:any){
  return(
    <li className = 'dropdownItem'>
      <i>{props.icon}</i>
      <a>{props.text} </a>
    </li>
  );
}
export default ProfileMenu;