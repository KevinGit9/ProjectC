import axios from '../axios';
import { useState } from 'react';
import './Home.css';



function Home() {
    const [machines, setMachines] = useState<any>([]);
    const getMachine = () => {
        axios
            .get("/api/CompanyMachine")
            .then((response) => {
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

export default Home;