import axios from '../axios';

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