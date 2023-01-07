import axios from '../axios';
import React from 'react';
import { useEffect, useState} from 'react';
import './Home.css';
import { GetMyMachines } from '../services/MachineServices';
import { getUserID } from '../services/TicketServices';

function Home() {
  const [machine, setMachines] = useState<any>([])
  const [user, setUser] = useState<any>();
  const getMachines = async () => {
    setMachines(await GetMyMachines());
  }
  const userId = getUserId();
  const machineId = "533cb852-ceb8-498f-a90e-f9b6c75320dc";

  return (
    <div className="Home">
      <h1> Home </h1>
      <button onClick={() => getMachines()}> Create data. </button>
      <button onClick={() => setUser(getUserId)}> Get UserId. </button>
      <p> {user} </p>
    </div>
  );
}

export default Home;