import AdminTools from '../components/AdminTools'
import React, { useState, useEffect} from 'react';
import { GetCompanies } from '../services/CompanyServices';
import TableRow from '../components/TableRow';
import { useNavigate } from 'react-router-dom';
import './UserManagement.css'


function CompanyManagement(props) {
    const navigate = useNavigate();
    const [companies, setCompanies] = useState<any>([]);

    useEffect(() => {
        async function fetchData() {
            setCompanies(await (GetCompanies()));
        }
        fetchData();
    },[]);

    return (
    <div className="management">
        <AdminTools 
        svg = "../icons/precision_manufacturing_black_24dp.svg"
        text = "Company Management"
        placeholder = "Search for company..."
        title1 = "Name"
        TableRow = {companies.map((company, index) => {
            return(<TableRow class={`rows ${index % 2 === 0 ? "even": "odd"}`} row1={company.name} entity = "Company"/>)
        })}
        />
        <button onClick={() => navigate("/admin")}> Back to Dashboard </button>
    </div>
    );
}   


export default CompanyManagement;