import React from 'react';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import './CaseBox.css';
import Ticket from './Ticket';
import { GetTicketByAdminId} from "../services/TicketServices";



function UnclaimedCaseBox(props) {
    // hier wil ik iets doen
    const [tickets, setTickets] = useState<any>([]);

      useEffect(() => {
    async function fetchData() {
      setTickets(await GetTicketByAdminId());
    }
    fetchData();
    console.log();
  }, []);

    return (
    <div className = "title-box">
        <div className="h-vertical-menu">
        <Link to = '#' className="active">{props.name}</Link>
        </div>
        <div className="vertical-menu">
            <Ticket name = "2"/>
        </div>
    </div>

    );

}

export default UnclaimedCaseBox;