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
        const [field1, setField1] = useState("");
        const [field2, setField2] = useState("");
        const [field3, setField3] = useState("");
        const [error, setError] = useState("");

        const [confirmWindow, setConfirmWindow] = useState(false);
        const location = useLocation();
        const queryParams = new URLSearchParams(location.search);
        const machineId = queryParams.get('machineId');
        const userId = getUserId();

        const handleChange = (e, setter) => {
            setter(e.target.value);
        }

        const handleTicketSubmit = () => {
            if (field1 === "" || field2 === "") return(setError("Not all required fields have been filled in."));
            setConfirmWindow(true);
        }

        const submitTicket = () => {
            CreateTicket(userId, machineId, [field1, field2, field3]);
            navigate("/usermenu");
        }

        return (
            <div>
                <div className="submissionform">
                    <h1> Submission Form </h1>
                    <p> All fields with an * are required. </p>
                    <div className="form">
                        <p> Please describe the behaviour you're seeing. *  </p>
                        <input
                            type="text"
                            onChange={(e) => handleChange(e, setField1)}
                            value={field1}
                        />
                        <p> Please describe the behaviour you're expecting. * </p>
                        <input
                            type="text"
                            onChange={(e) => handleChange(e, setField2)}
                            value={field2}
                        />
                        <p> Please enter any additional information (e.g. phone number, email address). </p>
                        <input
                            type="text"
                            onChange={(e) => handleChange(e, setField3)}
                            value={field3}
                        />
                        <p> {error} </p>
                        <button onClick={handleTicketSubmit}> Submit Ticket </button>
                    </div>
                </div>
                <ConfirmationWindow open={confirmWindow} text="Are you sure you want to submit the ticket?" setOpen={setConfirmWindow} continueButton={submitTicket} />
            </div>
        );
    }

    function NoPermission() {
        return (
            <div className="noPermission">
                <h1> No Permission </h1>
                <p> Please contact a higher up in the company about the problem. </p>
                <button onClick={() => navigate("/usermenu")}> Go Back to Menu. </button>
            </div>
        )
    }
}

export default Submitform;
