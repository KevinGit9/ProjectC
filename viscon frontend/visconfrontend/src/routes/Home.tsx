import axios from '../axios';
import React from 'react';
import { useEffect, useState} from 'react';
import './Home.css';
import { GetMyMachines } from '../services/MachineServices';
import { getUserID } from '../services/TicketServices';

function Home() {
  const [machines, setMachines] = useState<any>([]);
  const getMachines = async () => {
    setMachines(await GetMyMachines());
  }

  return (
    <div className="Home">
      <h1> Home </h1>
      <button onClick={() => getMachines()}> See Machines </button>
      {machines.map(machine => {
        return (<p key={machine.id}> {machine.name} </p>)
      })}
    </div>
  );
}

export default Home;