import React from 'react';
import { useEffect, useState } from 'react';
import axios from '../axios';

type State = {
    selectedMachine: string | null;
    problemType: string | null;
    ticketFields: string[];
    // Other state properties, if necessary
};

type Props = {
    onMachineSelection: (machineId: string) => void;
}
  
class CreateTicketForm extends React.Component<Props, State> {
    state: State = {
        selectedMachine: null,
        problemType: null,
        ticketFields: [],
    };

    handleMachineSelection = (machineId: string) => {
        this.setState({ selectedMachine: machineId });
    }; 
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


export const GetTicketByAdminId = async () => {
    let adminId = getUserID();
    const path = `/Ticket/${adminId}`;
    let response = await axios.get(path)
    console.log(response.data);
    return(response.data);
};

// export const GetMachineNameById = async () => {
//     let adminId = getUserID();
//     const path = `/Ticket/${adminId}`;
//     let response = await axios.get(path)
//     console.log(response.data);
//     return(response.data);
// };
