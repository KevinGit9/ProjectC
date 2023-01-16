import './MachineManagement.css'
import AdminTools from '../components/AdminTools'
import React, { useState, useEffect} from 'react';
import { getFullName } from '../services/LocalStorageManager';
import { Get20Machines } from '../services/CompanyMachineServices';
import TableRow from '../components/TableRow';


function MachineManagement(props) {
    const currentAdmin = getFullName();
    const [machines, setMachines] = useState<any>([]);
    useEffect(() => {
        async function fetchData() {
            setMachines(await Get20Machines());
        }
        fetchData();
        console.log(machines);
    },[]);

    return (
    <div>
        <AdminTools 
        svg = "../icons/precision_manufacturing_black_24dp.svg"
        text = "Machine Management"
        placeholder = "Search for machine..."
        title1 = "ID"
        title2 = "Name"ß
        TableRow = {machines.map((machine, index) => {
            return(<TableRow class={`rows ${index % 2 == 0 ? "even": "odd"}`} row1={machine.id} row2={machine.name} entity = "Machine"/>)
        })}
        />
        
    </div>
    );
}   


export default MachineManagement;