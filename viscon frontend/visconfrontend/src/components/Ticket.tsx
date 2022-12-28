import React from 'react';
import { Link } from 'react-router-dom';
import './Ticket.css';


interface ITicket{
    name : string

}

function Ticket(ticket: ITicket) {
    return (
        <div className="TicketContainer">
            <Link to="#"> {ticket.name} </Link>
        </div>
    )
}

export default Ticket;