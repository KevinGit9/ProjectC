import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './CaseBox.css';
import Ticket from './Ticket';
import { GetTicketByAdminId, GetUnclaimedTickets } from "../services/TicketServices";



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
        <Link to='#' className="active">{props.name}</Link>
      </div>
      <div className="vertical-menu">
        {tickets.map((ticket, index) => {
          return (<Ticket key={index} name={ticket.fields[0]} />)
        })}
      </div>
    </div>

  );

}

export default UnclaimedCaseBox;