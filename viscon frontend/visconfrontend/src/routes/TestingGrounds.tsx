import './Home.css';
import { useState } from 'react';
import { CreateCompany } from '../services/CompanyServices';
import { CreateMachine } from '../services/MachineServices';
import { CreateCompanyMachine } from '../services/CompanyMachineServices';
import { getUserCompany } from '../services/LocalStorageManager';
import { CreateProblem } from '../services/ProblemServices';
import { RegisterUser } from '../services/UserServices';

function TestingGrounds() {
    const [company, setCompany] = useState<any>([]);
    const [machine, setMachine] = useState<any>([]);
    const [companyMachine, setCompanyMachine] = useState<any>([]);
    const [problem, setProblem] = useState<any>([]);
    const [user, setUser] = useState<any>([]);

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

    const handleClickCompanyMachine = async (machineName: string, machineId: string, companyId: any) => {

        CreateCompanyMachine(machineName, machineId, companyId)
            .then(response => {
                setCompanyMachine(`Machine ${machineName} succesfully created.`);
            })
            .catch(error => {
                setCompanyMachine(`Couldn't create Company Machine ${machineName}.`);
            });
    }

    const handleClickProblem = async (description: string, type: string, machineName: string, solutions: string[]) => {

        CreateProblem(description, type, machineName, solutions)
        .then(response => {
            setProblem(`Problem ${description} succesfully created.`);
        })
        .catch(error => {
            setProblem(`Couldn't create Problem "${description}" because the Problem already exists on this machine.`);
        });
    }

    const handleClickRegister = async (firstName: string, lastName: string, email: string, password: string, companyName: string, role: string) => {

        RegisterUser(firstName, lastName, email, password, companyName, role)
        .then(response => {
            setUser(`User ${email} succesfully created.`);
        })
        .catch(error => {
            setUser(`Couldn't create User ${email}.`);
        });
    }

return (
    <div className="TestingGrounds">
        <h1> Testing Grounds </h1>
        <button onClick={() => handleClickCompany("Apple")}> Create a Company. </button>
        <p> {company} </p>
        <button onClick={() => handleClickMachine("Bulldozer")}> Create a Machine. </button>
        <p> {machine} </p>
        <button onClick={() => handleClickCompanyMachine("Shuttle 3", "Satellite Shuttle", "Viscon")}> Create a Company Machine. </button>
        <p> {companyMachine} </p>
        <button onClick={() => handleClickProblem("test", "error message", "Satellite Shuttle", ["Check photocells. Possibly place any product in the correct position manually."])}> Add a Problem. </button>
        <p> {problem} </p>
        <button onClick={() => handleClickRegister("test", "test", "test@gmail.com", "test", "Viscon", "admin")}> Add an Admin. </button>
        <p> {user} </p>
    </div>
);
}

export default TestingGrounds;

export const DummyData = () => {

}