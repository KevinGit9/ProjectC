import './Home.css';
import { useState } from 'react';
import { CreateCompany } from '../services/CompanyServices';
import { CreateMachine } from '../services/MachineServices';

function TestingGrounds() {
    const [company, setCompany] = useState<any>([]);
    const [machine, setMachine] = useState<any>([]);

    const handleClickCompany = (name: string) => {
        CreateCompany(name)
        .then(response => {
            setCompany(`Company ${name} succesfully created.`);
        })
        .catch(error => {
            setCompany(`Company ${name} already exists.`);
        });
    }

    const handleClickMachine = (name: string) => {
        CreateMachine(name)
        .then(response => {
            setMachine(`Machine ${name} succesfully created.`);
        })
        .catch(error => {
            setMachine(`Machine ${name} already exists.`);
        });
    }

    return (
        <div className="TestingGrounds">
            <h1> Testing Grounds </h1>
            <button onClick={() => handleClickCompany("NZXT")}> Create a Company. </button>
            <p> {company} </p>
            <button onClick={() => handleClickMachine("Bulldozer")}> Create a Machine. </button>
            <p> {machine} </p>
        </div>
    );
}

export default TestingGrounds;

export const DummyData = () => {
    
}