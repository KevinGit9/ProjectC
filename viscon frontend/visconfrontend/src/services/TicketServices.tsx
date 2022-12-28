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
}

export const getUserID = () => {
    //To get the userId stored in the localStorage with the "currentUser" key.
    //User got stored inside the localStorage at /login.
    const user = localStorage.getItem("currentUser");
    if (user != null) {
      let parsedUser = JSON.parse(user);
      return parsedUser.Id;
    }
    return null;
};

export const GetTicketByAdminId = async () => {
    let adminId = getUserID();
    const path = `/Ticket/${adminId}`;
    let response = await axios.get(path)
    console.log(response.data);
    return(response.data);
};
