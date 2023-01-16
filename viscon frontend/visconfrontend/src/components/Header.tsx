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

    return (
        <div className="hero">
            <nav>
                <div className={hamburgerIconContainer} onClick={e => { setSideBarOpen(!isSideBarOpen); header.sideBarButton(e) }}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className="headerImages">
                    <a href="/home"><img src="visconlogo.png" className="logo-nav"></img></a>
                </div>
            </nav>
        </div>
    );
}

export default Header;