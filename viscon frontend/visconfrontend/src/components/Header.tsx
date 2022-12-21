import React, { useState } from 'react';
import "./Header.css";
import "./ProfileMenu";
import ProfileMenu from './ProfileMenu';
interface IHeader {
    sideBarButton: any;
}

function Header(header: IHeader) {
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    var hamburgerIconContainer = "hamburgerIconContainer";
    hamburgerIconContainer = isSideBarOpen ? "hamburgerIconContainer change" : "hamburgerIconContainer";
    const [open, setOpen] = useState(false);

    // var subMenuWrap = "sub-menu-wrap";
    // const [isOpen, setOpen] = useState(false);
    // if (isOpen) subMenuWrap = "sub-menu-wrap open-menu";
    // else subMenuWrap = "sub-menu-wrap";

    return (
        <div className="hero">
            <nav>
                <div className={hamburgerIconContainer} onClick={e => { setSideBarOpen(!isSideBarOpen); header.sideBarButton(e) }}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className="headerImages">
                    <a href="/"><img src="visconlogo.png" className="logo-nav"></img></a>
                    {/* <button onClick={() => toggleMenu()}><img src="/profile-icon.png" className="icon-profile" /> </button> */}
                </div>
                <ProfileMenu></ProfileMenu>

                {/* <div className={subMenuWrap}>
                    <div className="sub-menu">
                        <div className="user-info">
                            <img className="icon-profile-sub" src="/profile-icon.png"></img>
                            <h2> John Smith</h2>
                        </div>
                        <hr></hr>

                        <a href="#" className="sub-menu-link">
                            <img src="images/profile.png" />
                            <p>View Profile Info</p>
                            <span>{'>'}</span>
                        </a>
                        <a href="#" className="sub-menu-link">
                            <img src="images/logout.png" />
                            <p>Logout</p>
                            <span>{'>'}</span>
                        </a>
                    </div>
                </div> */}
            </nav>
        </div>
    );

    // function toggleMenu() {
    //     setOpen(!isOpen);
    // }
}

function DropdownItem(props:any){
    return(
      <li className = 'dropdownItem'>
        <i>{props.icon}</i>
        <a>{props.text} </a>
      </li>
    );
  }

export default Header;