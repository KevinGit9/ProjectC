import './Home.css';
import { CreateCompany } from '../services/CompanyServices';
import { CreateMachine } from '../services/MachineServices';
import { CreateCompanyMachine } from '../services/CompanyMachineServices';
import { CreateProblem } from '../services/ProblemServices';
import { RegisterUser } from '../services/UserServices';

function TemporaryData() {

    return (
        <div className="TempData">
            <h1> Fill Database </h1>
            <p> Click on this button to fill the Database. NOTE: Make sure to have dropped your current Database and rebuilt it. </p>
            <button onClick={DummyData}> Fill Database </button>
        </div>
    );
}

export const DummyData = async () => {
    const CreateMachines = async () => {
        await CreateMachine("SoftWare Issue");
        await CreateMachine("No Machine");
        await CreateMachine("Satellite Shuttle");
        await CreateMachine("Transfer Shuttle");
        await CreateMachine("Lift");
        await CreateMachine("Chain Track");
        await CreateMachine("Palletiser");
    }
    await CreateMachines();

    const CreateCompanies = async () => {
        await CreateCompany("Viscon");
        await CreateCompany("Google");
        await CreateCompany("Microsoft");
    }
    await CreateCompanies();

    const CreateUsers = async () => {
        await RegisterUser("viscon", "admin", "admin@gmail.com", "admin", "Viscon", "admin");
        await RegisterUser("test", "test", "test@gmail.com", "test", "Viscon", "admin");
        await RegisterUser("key", "user", "keyuser@gmail.com", "keyuser", "Viscon", "keyuser");
        await RegisterUser("regular", "user", "user@gmail.com", "user", "Viscon", "user");
    }
    await CreateUsers();
    
    const CreateCompanyMachines = async () => {
        await CreateCompanyMachine("Shuttle 1", "Satellite Shuttle", "Viscon");
        await CreateCompanyMachine("Shuttle 2", "Satellite Shuttle", "Viscon");
        await CreateCompanyMachine("Shuttle 3", "Satellite Shuttle", "Viscon");
        await CreateCompanyMachine("Shuttle T1", "Transfer Shuttle", "Viscon");
        await CreateCompanyMachine("Shuttle T2", "Transfer Shuttle", "Viscon");
        await CreateCompanyMachine("Shuttle T3", "Transfer Shuttle", "Viscon");
        await CreateCompanyMachine("VT1", "Lift", "Viscon");
        await CreateCompanyMachine("VT2", "Lift", "Viscon");
    }
    await CreateCompanyMachines();

    const CreateProblemsForMachines = async () => {
        await CreateProblem("Product placement wrong on machine.", "error message", "Satellite Shuttle", "[Check photocells. Possibly place any product in the correct position manually.]");
        await CreateProblem("No connection with satellite.", "error message", "Satellite Shuttle", "[Check if the sattelite is on. If it is in the channel and has to charge up, charge it up using a charging cable and set the shuttle back on manual operation.]");
        await CreateProblem("Not safe to move", "error message", "Satellite Shuttle", "[The pallet protrudes on the shuttle or another pallet on a lane on the shuttle path. Rotate the pallet manually to the correct position.]");
        await CreateProblem("Not an error message 1", "no error message", "Satellite Shuttle", "[Solution for an error that's not an error message]");
        await CreateProblem("Not an error message 2", "no error message", "Satellite Shuttle", "[Solution for an error that's not an error message]");
        await CreateProblem("Not an error message 3", "no error message", "Satellite Shuttle", "[Solution for an error that's not an error message]");
    }
    await CreateProblemsForMachines();
}

export default TemporaryData;