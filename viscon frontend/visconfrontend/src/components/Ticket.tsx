import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetCompanyMachineInfo } from '../services/CompanyMachineServices';
import { GetTicketInfo } from '../services/TicketServices';
import './Ticket.css';
import TicketView from './TicketView';


interface ITicket{
    name: string;
    machine: string;
    ticketId: string;
}

function Ticket(ticket: ITicket) {
    const [viewTicket, setViewTicket] = useState(false);
    const [machine, setMachine] = useState<any>([]);
    let ticketName = `${machine.name}: ${ticket.name}`;
    
    useEffect(() => {
        async function fetchData() {
            setMachine(await GetCompanyMachineInfo(ticket.machine));
        }
        fetchData();
        console.log();
    }, []);
    
    return (
        <div className="TicketContainer">
            <a onClick={() => setViewTicket(true)}> {ticketName} </a>
            <TicketView open={viewTicket} ticketId={ticket.ticketId} machine={machine.name} setOpen={setViewTicket} />
        </div>
    )
}


export default Ticket;