import React, { useState } from "react";
import "./Layout.css";
import Header from "./Header";
import NavigationBar from "./NavigationBar";

const Layout = ({ children }) => {
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    var sideBar = isSideBarOpen ? "sideNav Open" : "sideNav";

    return(
        <React.Fragment>
            <div className="layoutContainer">
                <Header sideBarButton={() => setSideBarOpen(!isSideBarOpen)}/>
                <div className="navigationWrapper">
                    <div className={sideBar}> <NavigationBar/> </div>
                    <main className="mainPage"> {children} </main>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Layout;