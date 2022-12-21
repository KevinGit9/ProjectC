import React from 'react';

type State = {
    selectedMachine: string | null;
    problemType: string;
    ticketFields: string[];
    // Other state properties, if necessary
};

type Props = {
    onMachineSelection: (machineId: string) => void;
    onProblemTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    // Other props here, if necessary
};

class CreateTicketForm extends React.Component<Props, State> {
    state: State = {
        selectedMachine: null,
        problemType: "",
        ticketFields: [],
    };

    handleMachineSelection = (machineId: string) => {
        this.setState({ selectedMachine: machineId });
    };
}

export default CreateTicketForm;