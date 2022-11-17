import React, { useState } from 'react';
import "./TopBar.css";

function TopBar() {
    var subMenuWrap = "sub-menu-wrap";
    const [isOpen, setOpen] = useState(false);
    if (isOpen) subMenuWrap = "sub-menu-wrap open-menu";
    else subMenuWrap = "sub-menu-wrap";

    return (
        <div className="hero">
            <nav>
                <img src="/visconlogo.png" className="logo-nav" />
                <button onClick={() => toggleMenu()}><img src="/profile-icon.png" className="icon-profile" /> {/*onClick = {toggleMenu()}*/}</button>

                <div className={subMenuWrap}>
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
                </div>
            </nav>
        </div>
    );

    function toggleMenu() {
        setOpen(!isOpen);
    }
}


export default TopBar;