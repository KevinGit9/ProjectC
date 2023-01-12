import { useEffect, useState } from 'react';
import { getUserId } from '../services/LocalStorageManager';
import { ClaimTicket, CloseTicket, GetTicketInfo } from '../services/TicketServices';
import './TicketView.css';

function TicketView(props) {
    const [ticket, setTicket] = useState<any>([]);
    var adminId = getUserId();
    var ticketStatus = "";
    if (ticket.completed) ticketStatus = "Completed";
    else ticketStatus = "In progress";
    useEffect(() => {
        async function fetchData() {
            setTicket(await GetTicketInfo(props.ticketId));
        }
        fetchData();
        console.log(ticket);
    }, [props.open]);

    return (props.open) ? (
        <div className="dark">
            <div className="ticketView">
                <div className="ticketViewHeader">
                    <span className="close" onClick={() => props.setOpen(false)}> &times; </span>
                </div>
                <div className="ticketViewPanel">
                    <p> Ticket Id: {props.ticketId} <br/>
                        Machine: {props.machine} <br/>
                        <br/>
                        Fields down below: <br/>
                        {ticket.fields[0]} <br/>
                        {ticket.fields[1]} <br/>
                        {ticket.fields[2]} <br/>
                        <br/>
                        Status: {ticketStatus} <br/>
                    </p>
                </div>
                <div className="ticketViewButtons">
                    <button onClick={() => ClaimTicket(props.ticketId, adminId)}> Claim Ticket </button>
                    <button onClick={() => CloseTicket(props.ticketId)}> Close Ticket </button>
                </div>
            </div>
        </div>
    ) : null;
}

export default TicketView;