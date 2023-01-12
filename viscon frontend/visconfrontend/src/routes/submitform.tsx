import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ConfirmationWindow from '../components/ConfirmationWindow';
import { getUserId, getUserRole } from '../services/LocalStorageManager';
import { CreateTicket } from '../services/TicketServices';
import './submitform.css';


function Submitform() {
    let navigate = useNavigate();
    if (getUserRole() === "user") return(NoPermission());
    else return(Submit());

    function Submit() {
        //TODO: 
        //Use the user input to create a ticket.
        //Add a Component(because it will also get used in other screens) called "ConfirmScreen" which is a pop-up screen with a "continue" and "go back" button. This gets called when the User clicks on the Submit button.
        //Add field in the Ticket Model which stores photos/videos.
        //Add an optional field in which the User can add their phone number.
        const [confirmWindow, setConfirmWindow] = useState(false);
        const location = useLocation();
        const queryParams = new URLSearchParams(location.search);
        const machineId = queryParams.get('machineId');
        const userId = getUserId();
        console.log(`userId = ${userId}`);
        console.log(`machineId = ${machineId}`);

        const handleTicketSubmit = () => {
            CreateTicket(userId, machineId, ["this ticket got", "created in the", "submit form"]);
            navigate("/usermenu");
        }

        return (
            <div>
                <div className="submissionform">
                    <h1>Problem submission form</h1>
                    <form id="problemform">

                        <p>Please describe the behaviour you're expecting.</p>
                        <textarea className = "textbox"> </textarea> <br/>

                        <p>Please describe the behaviour you're seeing.</p>
                        <textarea className="textbox"> </textarea> <br />

                        <p>Please enter any additional information.</p>
                        <textarea className="textbox"> </textarea> <br />
                        <input className="paperclip" type="file" multiple accept="image/*, video/*" ></input>
                    
                    </form>
                    <button onClick={() => setConfirmWindow(true)}> Submit </button>
                </div>
                <ConfirmationWindow open={confirmWindow} text="Are you sure you want to submit the ticket?" setOpen={setConfirmWindow} continueButton={handleTicketSubmit}/>
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
