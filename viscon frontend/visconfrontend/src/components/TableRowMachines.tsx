import { useEffect, useState } from 'react';
import { DeleteCompanyMachine } from '../services/CompanyMachineServices';
import { GetCompanyFromId } from '../services/CompanyServices';
import { GetMachineFromCompanyMachine } from '../services/MachineServices';
import ConfirmationWindow from './ConfirmationWindow';
import './TableRow.css'

function TableRowMachines(props) {
    const [company, setCompany] = useState<any>([]);
    const [machine, setMachine] = useState<any>([]);
    const [confirmWindow, setConfirmWindow] = useState(false);
    
    useEffect(() => {
        async function fetchData() {
            setCompany(await GetCompanyFromId(props.row1));
            setMachine(await GetMachineFromCompanyMachine(props.row3));
        }
        fetchData();
    }, []);

    const handleClick = () => {
        DeleteCompanyMachine(props.row3);
        window.location.reload();
    }
    
    return (
        <div className={props.class}>
            <a>{company.name}</a>
            <a>{props.row2}</a>
            <a>{machine.name}</a>
            <div className="dropdown">
                <img className = "dropbtn"src = "/icons/more_horiz_FILL0_wght400_GRAD0_opsz48.svg" />
                <div id="myDropdown" className="dropdown-content">
                    <a href="#">Edit {props.entity}</a>
                    <a onClick={() => setConfirmWindow(true)}>Delete {props.entity}</a>
                </div>
                <ConfirmationWindow open={confirmWindow} text={`Are you sure you want to delete this ${props.entity}?`} setOpen={setConfirmWindow} continueButton={handleClick} />
            </div>
        </div>
    );

}

export default TableRowMachines;