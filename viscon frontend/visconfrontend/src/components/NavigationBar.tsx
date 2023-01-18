import { useState } from "react";
import { useNavigate } from "react-router";
import { getUserRole, removeItem } from "../services/LocalStorageManager";
import ConfirmationWindow from "./ConfirmationWindow";
import "./NavigationBar.css";

function NavigationBar() {
    let navigate = useNavigate();
    const [confirmWindow, setConfirmWindow] = useState(false);
    const Logout = () => {
        removeItem("currentUser");
        removeItem("jwtToken");
        localStorage.clear();
        navigate("/");
    }

    if (getUserRole() === "admin") return (
        <div className="navigationBarPanel">
            <div className="navigationBarPanelButtons">
                <a href="/home"> My Dashboard </a>
                <a href="/usermanagement"> Manage Users </a>
                <a href="/machinemanagement"> Manage Machines </a>
                <a href="/companymanagement"> Manage Companies </a>
                <a href="/registration"> Register User </a>
                <a href="/usermenu"> User Menu </a>
            </div>
            <div className="logoutButton">
                <a onClick={() => setConfirmWindow(true)}> Log out </a>
            </div>
            <ConfirmationWindow open={confirmWindow} text="Are you sure you want to log out?" setOpen={setConfirmWindow} continueButton={Logout} />
        </div>
    )

    if (getUserRole() === "key user") return (
        <div className="navigationBarPanel">
            <div className="navigationBarPanelButtons">
                <a href="/home"> Home </a>
                <a href="/machines"> Submit a Ticket </a>
                <a href="/tickets"> My Tickets </a>
                <a href="/userregistration"> Create Account </a>
            </div>
            <div className="logoutButton">
                <a onClick={() => setConfirmWindow(true)}> Log out </a>
            </div>
            <ConfirmationWindow open={confirmWindow} text="Are you sure you want to log out?" setOpen={setConfirmWindow} continueButton={Logout} />
        </div>
    )
    
    else return (
        <div className="navigationBarPanel">
            <div className="navigationBarPanelButtons">
                <a href="/home"> Home </a>
                <a href="/machines"> Resolve Problem </a>
            </div>
            <div className="logoutButton">
                <a onClick={() => setConfirmWindow(true)}> Log out </a>
            </div>
            <ConfirmationWindow open={confirmWindow} text="Are you sure you want to log out?" setOpen={setConfirmWindow} continueButton={Logout} />
        </div>
    )
}

export default NavigationBar;