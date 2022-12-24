import './Home.css';
import { useState } from 'react';
import { GetMyMachines } from '../services/MachineServices';
import { CreateTicket } from '../services/TicketServices';
import { getUserID } from '../services/LocalStorageManager';

function Home() {
  const [machines, setMachines] = useState<any>([]);
  const getMachines = async () => {
    setMachines(await GetMyMachines());
  }
  const userId = getUserID();
  const machineId = "533cb852-ceb8-498f-a90e-f9b6c75320dc";

  return (
    <div className="Home">
      <h1> Home </h1>
      <button onClick={() => getMachines()}> See Machines </button>
      {machines.map(machine => {
        return (<p key={machine.id}> {machine.name} </p>)
      })}
      <button onClick={() => CreateTicket(userId, machineId, ["field1", "field2", "field3"])}> Create a ticket with default values. </button>
    </div>
  );
}

export default Home;