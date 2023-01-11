import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Ticket.css';


interface ITicket{
    name : string

}

function Ticket(ticket: ITicket) {
     // useState van machine naam en dat wordt ticket.name
     const [machineName, setMachineName] = useState("");
     useEffect(() => {
        async function fetchData() {
            // setMachineName(await GetMachineNameByMachineId());
        }
        fetchData();
    }, []);

    return (
        <div className="TicketContainer">
            <Link to="#"> {ticket.name} </Link>
        </div>
    )
}


export default Ticket;