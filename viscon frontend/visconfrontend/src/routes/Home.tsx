import axios from '../axios';
import { useState } from 'react';
import './Home.css';



function Home() {
    const [machines, setMachines] = useState<any>([]);
    const getMachines = () => {
        axios
          .get("/CompanyMachine")
          .then((response) => {
            setMachines(response.data.map((machine, index) => {
              return(<p key={index}> {machine.name} </p>);
            }));
            console.log(response);
          })
          .catch((error) => console.log(error));
    }
        
    return (
        <div className="Home">
            <h1> Home </h1>
            <button onClick={() => setMachines(getMachines)}> See Machines </button>
            {machines}
        </div>
    );
}

export default Home;