import React from 'react';

//React Context.

type State = {
    selectedMachine: string | null;
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
        ticketFields: [],
    };

    handleMachineSelection = (machineId: string) => {
        this.setState({ selectedMachine: machineId });
    };

    
    render() {
        return (
        <form>
            <label>
            Select a machine:
            <select onChange={() => this.handleMachineSelection}>
                {/* Options for selecting a machine here */}
            </select>
            </label>
            {/* Other form fields here */}
        </form>
        );
    }
}

export default CreateTicketForm;