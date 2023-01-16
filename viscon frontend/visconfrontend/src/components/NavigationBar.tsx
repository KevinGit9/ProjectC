import { useState } from "react";
import { useNavigate } from "react-router";
import { getUserRole, removeItem } from "../services/LocalStorageManager";
import ConfirmationWindow from "./ConfirmationWindow";
import "./NavigationBar.css";

function NavigationBar() {
    if (getUserRole() === "admin") return (NavigationBarAdmin());
    if (getUserRole() === "key user") return (NavigationBarKeyUser());
    else return (NavigationBarUser());

    function NavigationBarAdmin() {
        let navigate = useNavigate();
        const [confirmWindow, setConfirmWindow] = useState(false);
        const Logout = () => {
            removeItem("currentUser");
            removeItem("jwtToken");
            localStorage.clear();
            navigate("/");
        }

        return (
            <div className="navigationBarPanel">
                <div className="navigationBarPanelButtons">
                    <a href="/home"> My Dashboard </a>
                    <a href="/usermanagement"> Manage Users </a>
                    <a href="/registration"> Register User </a>
                    <a href="/usermenu"> User Menu </a>
                </div>
                <div className="logoutButton">
                    <a onClick={() => setConfirmWindow(true)}> Log out </a>
                </div>
                <ConfirmationWindow open={confirmWindow} text="Are you sure you want to log out?" setOpen={setConfirmWindow} continueButton={Logout} />
            </div>
        )
    }

    function NavigationBarKeyUser() {
        let navigate = useNavigate();
        const [confirmWindow, setConfirmWindow] = useState(false);

        const Logout = () => {
            removeItem("currentUser");
            navigate("/");
        }

        return (
            <div className="navigationBarPanel">
                <div className="navigationBarPanelButtons">
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
    }

    function NavigationBarUser() {
        let navigate = useNavigate();
        const [confirmWindow, setConfirmWindow] = useState(false);

        const Logout = () => {
            removeItem("currentUser");
            navigate("/");
        }

        return (
            <div className="navigationBarPanel">
                <div className="navigationBarPanelButtons">
                    <a href="/machines"> Submit a Ticket </a>
                    <a href="/tickets"> My Tickets </a>
                </div>
                <div className="logoutButton">
                    <a onClick={() => setConfirmWindow(true)}> Log out </a>
                </div>
                <ConfirmationWindow open={confirmWindow} text="Are you sure you want to log out?" setOpen={setConfirmWindow} continueButton={Logout} />
            </div>
        )
    }
}

export default NavigationBar;