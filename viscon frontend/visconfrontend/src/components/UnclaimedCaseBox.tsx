import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './CaseBox.css';
import Ticket from './Ticket';
import { GetUnclaimedTickets } from "../services/TicketServices";



function UnclaimedCaseBox(props) {
  const [tickets, setTickets] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      setTickets(await GetUnclaimedTickets());
    }
    fetchData();
    console.log();
  }, []);

  return (
    <div className="title-box">
      <div className="h-vertical-menu">
        <p className="ticketCount"> {tickets.length} </p>
        <Link to='#' className="active"> {props.name} </Link>
      </div>
      <div className="vertical-menu">
        {tickets.map((ticket, index) => {
          return (<Ticket key={index} name={ticket.fields[0]} machine={ticket.companyMachineId} ticketId={ticket.id}/>)
        })}
      </div>
    </div>

  );

}

export default UnclaimedCaseBox;