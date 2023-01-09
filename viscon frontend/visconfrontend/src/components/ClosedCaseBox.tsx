import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetClosedTickets } from '../services/TicketServices';
import './CaseBox.css';
import Ticket from './Ticket';


function ClosedCaseBox(props) {
    const [tickets, setTickets] = useState<any>([]);

    useEffect(() => {
        async function fetchData() {
            setTickets(await GetClosedTickets());
        }
        fetchData();
        console.log();
    }, []);

    return (
        <div className="title-box">
            <div className="h-vertical-menu">
                <Link to='#' className="active">{props.name}</Link>
            </div>
            <div className="vertical-menu">
                {tickets.map((ticket, index) => {
                    return (<Ticket key={index} name={ticket.fields[0]} machine={ticket.companyMachineId} ticketId={ticket.id}/>)
                })}
            </div>
        </div>

    );

}

export default ClosedCaseBox;