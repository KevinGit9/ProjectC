import AdminTools from '../components/AdminTools'
import React, { useState, useEffect} from 'react';
import { GetAllMachines } from '../services/CompanyMachineServices';
import TableRowMachines from '../components/TableRowMachines';
import { useNavigate } from 'react-router-dom';
import './UserManagement.css'


function MachineManagement(props) {
    const navigate = useNavigate();
    const [machines, setMachines] = useState<any>([]);

    useEffect(() => {
        async function fetchData() {
            setMachines(await (GetAllMachines()));
        }
        fetchData();
        console.log(machines);
    },[]);

    return (
    <div className="management">
        <AdminTools 
        svg = "../icons/precision_manufacturing_black_24dp.svg"
        text = "Machine Management"
        placeholder = "Search for machine..."
        title1 = "Company"
        title2 = "Name"
        title3 = "Type"
        TableRow = {machines.map((machine, index) => {
            return(<TableRowMachines class={`rows ${index % 2 === 0 ? "even": "odd"}`} row1={machine.companyId} row2={machine.name} row3={machine.id} entity = "Machine"/>)
        })}
        />
        <button onClick={() => navigate("/admin")}> Back </button>
    </div>
    );
}   


export default MachineManagement;