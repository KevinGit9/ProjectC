import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserId } from '../services/LocalStorageManager';
import { CreateTicket } from '../services/TicketServices';

import './submitform.css';


function Submitform() {
    let navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const machineId = queryParams.get('machineId');
    const userId = getUserId();
    console.log(`userId = ${userId}`);
    console.log(`machineId = ${machineId}`);

    const handleTicketSubmit = () => {
        CreateTicket(userId, machineId, ["this is", "from the", "submit form"]);
        navigate("/usermenu");
    }

    return (
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
                <input type="submit" onClick={handleTicketSubmit}></input>
            </form>

        </div>


    );
}

export default Submitform;
