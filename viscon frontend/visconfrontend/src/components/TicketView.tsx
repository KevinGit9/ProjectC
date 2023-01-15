import { useEffect, useState } from 'react';
import { GetCompanyFromId } from '../services/CompanyServices';
import { getUserId } from '../services/LocalStorageManager';
import { GetMachineFromCompanyMachine } from '../services/MachineServices';
import { ClaimTicket, CloseTicket, GetTicketInfo, ReplyToTicket } from '../services/TicketServices';
import './TicketView.css';

function TicketView(props) {
    const [ticket, setTicket] = useState<any>([]);
    const [machine, setMachine] = useState<any>([]);
    const [company, setCompany] = useState<any>([]);
    const [reply, setReply] = useState<any>([]);
    var adminId = getUserId();
    var ticketStatus = "";
    if (ticket.completed) ticketStatus = "Completed";
    else ticketStatus = "In progress";
    useEffect(() => {
        async function fetchData() {
            setTicket(await GetTicketInfo(props.ticketId));
            setMachine(await GetMachineFromCompanyMachine(props.machineId));
            setCompany(await GetCompanyFromId(props.company))
        }
        fetchData();
        console.log(machine);
    }, [props.open]);

    const handleChange = (e) => {
        setReply(e.target.value);
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            ReplyToTicket(ticket.id, reply);
            window.location.reload();
        }
    }

    const handleClaim = async () => {
        await ClaimTicket(props.ticketId, adminId)
        window.location.reload();
    }

    const handleClose = async () => {
        await CloseTicket(props.ticketId)
        window.location.reload();
    }

    return (props.open) ? (
        <div className="dark">
            <div className="ticketView">
                <div className="ticketViewHeader">
                    <span className="close" onClick={() => props.setOpen(false)}> &times; </span>
                </div>
                <div className="ticketViewPanel">
                    <div className="ticketPanelTop">
                        <p> Company: {company.name} <br />
                            Name: {props.machine} <br />
                            Machine: {machine.name} <br />
                        </p>
                        <p> Date: {ticket.date} </p>
                    </div>
                    <div className="ticketPanelMiddle">
                        <p> Problem: <br />
                            {ticket.fields[0]} <br />
                            <br />
                            Description: <br />
                            {ticket.fields[1]} <br />
                            <br />
                            Additional Information: <br />
                            {ticket.fields[2]} <br />
                            <br />
                        </p>
                    </div>
                    <div className="ticketReply">
                        <p> Reply: <br />
                            {ticket.reply} <br />
                            <input
                                type="text"
                                onChange={handleChange}
                                value={reply}
                                placeholder="Click here to write an reply..."
                                onKeyDown={handleKeyDown}
                            />
                        </p>
                    </div>
                    <div className="ticketPanelFooter">
                        <p> Status: {ticketStatus} </p>
                    </div>
                </div>
                <div className="ticketViewButtons">
                    <button onClick={handleClaim}> Claim Ticket </button>
                    <button onClick={handleClose}> Close Ticket </button>
                </div>
            </div>
        </div>
    ) : null;
}

export default TicketView;