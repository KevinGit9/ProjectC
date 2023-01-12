import { useNavigate } from "react-router";
import { getUserRole, removeItem } from "../services/LocalStorageManager";
import "./NavigationBar.css";

function NavigationBar() {
    if (getUserRole() === "admin") return(NavigationBarAdmin());
    else return(NavigationBarUser());

    function NavigationBarAdmin() {
        let navigate = useNavigate();
        const Logout = () => {
            removeItem("currentUser");
            navigate("/");
        }

        return (
            <div className="navigationBarPanel">
                <div className="navigationBarPanelButtons">
                    <a href="/machines"> Machines </a>
                    <a href="/checklist"> Checklist </a>
                    <a href="/usermenu"> User Menu </a>
                    <a href="/problems"> Problems </a>
                    <a href="/submitform"> Submit Form </a>
                    <a href="/"> Login Screen </a>
                    <a href="/admin"> Admin Menu </a>
                    <a href="/Registration"> Admin Registration </a>
                </div>
                <div className="logoutButton">
                    <a onClick={Logout}> Log out </a>
                </div>
            </div>
        )
    }

    function NavigationBarUser() {
        let navigate = useNavigate();
        const Logout = () => {
            removeItem("currentUser");
            navigate("/");
        }

        return (
            <div className="navigationBarPanel">
                <div className="navigationBarPanelButtons">
                    <a href="/home"> Home </a>
                    <a href="/machines"> Machines </a>
                    <a href="/checklist"> Checklist </a>
                    <a href="/usermenu"> User Menu </a>
                    <a href="/problems"> Problems </a>
                    <a href="/submitform"> Submit Form </a>
                    <a href="/"> Login Screen </a>
                    <a href="/admin"> Admin Menu </a>
                    <a href="/Registration"> Admin Registration </a>
                </div>
                <div className="logoutButton">
                    <a onClick={Logout}> Log out </a>
                </div>
            </div>
        )
    }
}

export default NavigationBar;