import Axios from "axios";
import { useState } from 'react';
import './Home.css';



function Home() {
    const [machines, setMachines] = useState<any>([]);
    const getMachine = () => {
        Axios.get("http://localhost:5083/api/CompanyMachine").then((response) => {
            console.log(response);
            setMachines(response.data);
        });
    }

    return (
        <div className="Home">
            <h1> Home </h1>
            <button onClick={getMachine}> See Machines </button>
            {machines.map((machine, index) => {
                return(<p key = {index}> {machine.name} </p>)
            })}
        </div>
    );
}

async function getMachines(): Promise<any> {
    const response = await Axios.get("/api/CompanyMachine");
    return response.data.Name;
}

export default Home;