import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ConfirmationWindow from '../components/ConfirmationWindow';
import { getUserId, getUserRole } from '../services/LocalStorageManager';
import { CreateTicket } from '../services/TicketServices';
import './submitform.css';


function Submitform() {
    let navigate = useNavigate();
    if (getUserRole() === "user") return (NoPermission());
    else return (Submit());

    function Submit() {
        //TODO: 
        //Add field in the Ticket Model which stores photos/videos.
        //Add an optional field in which the User can add their phone number.
        const [field1, setField1] = useState("");
        const [field2, setField2] = useState("");
        const [field3, setField3] = useState("");

        const [confirmWindow, setConfirmWindow] = useState(false);
        const location = useLocation();
        const queryParams = new URLSearchParams(location.search);
        const machineId = queryParams.get('machineId');
        const userId = getUserId();

        const handleChange1 = (e) => {
            setField1(e.target.value);
        }
        const handleChange2 = (e) => {
            setField2(e.target.value);
        }
        const handleChange3 = (e) => {
            setField3(e.target.value);
        }

        const handleTicketSubmit = () => {
            if (field1 === "" || field2 === "") return;
            CreateTicket(userId, machineId, [field1, field2, field3]);
            navigate("/usermenu");
        }

        return (
            <div>
                <div className="submissionform">
                    <h1> Submission Form </h1>
                    <p> All fields with an * are required. </p>
                    <div className="form">
                        <p> Please describe the behaviour you're expecting. * </p>
                        <input
                            type="text"
                            onChange={handleChange1}
                            value={field1}
                        />
                        <p> Please describe the behaviour you're seeing. * </p>
                        <input
                            type="text"
                            onChange={handleChange2}
                            value={field2}
                        />
                        <p> Please enter any additional information. </p>
                        <input
                            type="text"
                            onChange={handleChange3}
                            value={field3}
                        />
                        <button onClick={() => setConfirmWindow(true)}> Submit Ticket </button>
                    </div>
                </div>
                <ConfirmationWindow open={confirmWindow} text="Are you sure you want to submit the ticket?" setOpen={setConfirmWindow} continueButton={handleTicketSubmit} />
            </div>
        );
    }

    function NoPermission() {
        return (
            <div>
                <header> No Permission </header>
                <p> Please contact a higher up in the company about the problem. </p>
                <button onClick={() => navigate("/usermenu")}> Go Back to Menu. </button>
            </div>
        )
    }
}

export default Submitform;
