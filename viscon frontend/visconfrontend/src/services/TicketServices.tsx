import axios from '../axios';
import { getUserId } from './LocalStorageManager';

//Takes an userId, machineId and fields and creates an ticket with those.
export const CreateTicket = (userId: string, machineId: string | null, fields: string[]) => {
    let response = axios.post(`/Ticket`, {
        userId: userId,
        machineId: machineId,
        fields: fields
    })
    console.log(response)
    return response;
}

export const GetTicketByAdminId = async () => {
    let adminId = getUserId();
    const path = `/Ticket/${adminId}`;
    let response = await axios.get(path)
    //console.log(response.data);
    return(response.data);
};

//Gets all Tickets that haven't been claimed by an Admin.
export const GetUnclaimedTickets = async () => {
    const path = '/Ticket/unclaimed';
    let response = await axios.get(path)
    //console.log(response.data);
    return(response.data);
}

//Gets all Tickets that have a completion state of 'True'.
export const GetClosedTickets = async () => {
    const path = '/Ticket/closed';
    let response = await axios.get(path)
    //console.log(response.data);
    return(response.data);
}

//Takes an ticketId and gets the info of the corresponding Ticket.
export const GetTicketInfo = async (ticketId: string) => {
    const path = `/Ticket/ticketInfo${ticketId}`;
    let response = await axios.get(path)
    //console.log(response.data);
    return(response.data);
}

//Takes an ticketId and adminId to then assign the Ticket to the Admin.
export const ClaimTicket = async (ticketId: string, adminId: string) => {
    const path = `/Ticket/${ticketId}/${adminId}`;
    let response = await axios.put(path)
    //console.log(response.data);
    return(response.data);
}

//Takes an ticketId and changes the status of the Ticket to Completed.
export const CloseTicket = async (ticketId: string) => {
    const path = `/Ticket/${ticketId}`;
    let response = await axios.put(path)
    //console.log(response.data);
    return(response.data);
}

//Takes an ticketId and adds a reply to the Reply field.
export const ReplyToTicket = async (ticketId: string, reply: string) => {
    const path = `/Ticket/reply${ticketId}/${reply}`;
    let response = await axios.put(path)
    //console.log(response.data);
    return(response.data);
}

export const GetOpenUserTickets = async () => {
    let userId = getUserId();
    const path = `/Ticket/useropen${userId}`;
    let response = await axios.get(path)
    //console.log(response.data);
    return(response.data);
}

export const GetClosedUserTickets = async () => {
    let userId = getUserId();
    const path = `/Ticket/userclosed${userId}`;
    let response = await axios.get(path)
    //console.log(response.data);
    return(response.data);
}