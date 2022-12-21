import React from 'react';
import { useEffect, useState } from 'react';

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
  
const TicketServices = () => {
    //To get the userId saved in the localStorage with the "currentUser" key.
    const [userId, setUserId] = useState([]);
    useEffect(() => {
        const user = localStorage.getItem("currentUser");
        if (user != null) {
            let parsedUser = JSON.parse(user);
            setUserId(parsedUser.Id);
        } 
    })
}

export default TicketServices;