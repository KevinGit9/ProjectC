import { useEffect, useState } from 'react';
import { GetCompanyFromId } from '../services/CompanyServices';
import { GetMachineFromCompanyMachine } from '../services/MachineServices';
import './TableRow.css'

function TableRowMachines(props) {
    const [company, setCompany] = useState<any>([]);
    const [machine, setMachine] = useState<any>([]);
    
    useEffect(() => {
        async function fetchData() {
            setCompany(await GetCompanyFromId(props.row1));
            setMachine(await GetMachineFromCompanyMachine(props.row3));
        }
        fetchData();
    }, []);

    return (
        <div className={props.class}>
            <a>{company.name}</a>
            <a>{props.row2}</a>
            <a>{machine.name}</a>
            <div className="dropdown">
                <img className = "dropbtn"src = "/icons/more_horiz_FILL0_wght400_GRAD0_opsz48.svg" />
                <div id="myDropdown" className="dropdown-content">
                    <a href="#">Edit {props.entity}</a>
                    <a href="#">Delete {props.entity}</a>
                </div>

            </div>
        </div>
    );

}

export default TableRowMachines;