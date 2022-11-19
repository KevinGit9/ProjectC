import React from 'react';
import "./ProfileMenu.css";

function ProfileMenu() {
    return (
        <div className="ProfileMenuContainer">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <div className="menuContainer">
                <div className="menuTrigger">
                    <img src="profile-icon.png" />
                </div>
                <div className="dropdownMenu">
                    <h3>The kiet<br/><span>Webdesigner</span></h3>
                    <ul>
                        <DropdownItem icon = {"person"} text = {"My Profile"}/>
                        <DropdownItem icon = {"logout"} text = {"Logout"}/>

                        {/* <DropdownItem icon = {""}/> */}
                    </ul>
                </div>

            </div>
        </div>
    );
}

function DropdownItem(props:any){
    return(
        <li className = "dropdownItem">
            <span className = "material-icons">{props.icon}</span>
            <a>{props.text}</a>
        </li>
    );
}
export default ProfileMenu;