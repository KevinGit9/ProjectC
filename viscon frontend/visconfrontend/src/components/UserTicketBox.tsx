import './CaseBox.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ticket from "./Ticket";

function UserTicketBox(props) {
    const [tickets, setTickets] = useState<any>([]);

    useEffect(() => {
        async function fetchData() {
            setTickets(await props.api);
        }
        fetchData();
        console.log();
    }, []);

    return (
        <div className="title-box">
            <div className="h-vertical-menu">
                <Link to='#' className="active"> {props.name} </Link>
                <p className="ticketCount"> {tickets.length} </p>
            </div>
            <div className="vertical-menu">
                {tickets.map((ticket, index) => {
                    return (<Ticket key={index} name={ticket.fields[0]} machine={ticket.companyMachineId} ticketId={ticket.id}/>)
                })}
            </div>
        </div>

    );

}

export default UserTicketBox;