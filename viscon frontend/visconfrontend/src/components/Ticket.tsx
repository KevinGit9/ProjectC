import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetCompanyMachineInfo } from '../services/CompanyMachineServices';
import { GetTicketInfo } from '../services/TicketServices';
import './Ticket.css';


interface ITicket{
    name: string;
    machine: string;
    ticketId: string;
}

function Ticket(ticket: ITicket) {
    //GetTicketInfo()
    const [machine, setMachine] = useState<any>([]);
    useEffect(() => {
        async function fetchData() {
            setMachine(await GetCompanyMachineInfo(ticket.machine));
        }
        fetchData();
        console.log();
    }, []);

    let ticketName = `${machine.name}: ${ticket.name}`;
    
    return (
        <div className="TicketContainer">
            <Link to="#"> {ticketName} </Link>
        </div>
    )
}


export default Ticket;