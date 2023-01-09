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
    console.log(response.data);
    return(response.data);
};

//Gets all Tickets that haven't been claimed by an Admin.
export const GetUnclaimedTickets = async () => {
    const path = '/Ticket/unclaimed';
    let response = await axios.get(path)
    console.log(response.data);
    return(response.data);
}

//Gets all Tickets that have a completion state of 'True'.
export const GetClosedTickets = async () => {
    const path = '/Ticket/closed';
    let response = await axios.get(path)
    console.log(response.data);
    return(response.data);
}

// export const GetMachineNameById = async () => {
//     let adminId = getUserID();
//     const path = `/Ticket/${adminId}`;
//     let response = await axios.get(path)
//     console.log(response.data);
//     return(response.data);
// };
