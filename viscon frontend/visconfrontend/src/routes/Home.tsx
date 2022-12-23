
import { useEffect, useState } from 'react';
import './Home.css';
import { GetMyMachines } from '../services/MachineServices';
import { useTicketContext  } from '../services/TicketContext';

const Home: React.FC = () => {
  const { machineId, setMachineId } = useTicketContext();
  const [machines, setMachines] = useState<any>([]);
  const getMachines = async () => {
    setMachines(await GetMyMachines());
  }
  const handleClick = (id: string) => {
    setMachineId(id);
    console.log(machineId);
    console.log(id);
  };

  return (
    <div className="Home">
      <h1> Home </h1>
      <button onClick={() => getMachines()}> See Machines </button>
      <button onClick={() => handleClick("533cb852-ceb8-498f-a90e-f9b6c75320dc")}>
      Set Machine ID
      </button>
      <div>Machine ID: {machineId}</div>
      {machines.map(machine => {
        return (<p key={machine.id}> {machine.name} </p>)
      })}
    </div>
  );
}

export default Home;