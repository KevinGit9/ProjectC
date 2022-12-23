import { useEffect, useState } from 'react';
import Accordion from '../components/Accordion';
import { useLocation, useNavigate } from 'react-router-dom';
import { GetProblemsFromMachine } from "../services/ProblemServices";
import './Problems.css';
import { GetMachineFromCompanyMachine } from '../services/MachineServices';

function Problems() {
  const [problems, setProblems] = useState<any>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const problemType = queryParams.get('problemType');
  const companyMachineId = queryParams.get('machineId');


  useEffect(() => {
    async function fetchData() {
      const machineId = (await GetMachineFromCompanyMachine(companyMachineId));
      console.log(machineId);
      setProblems(await GetProblemsFromMachine(`${machineId}/${problemType}`));
    }
    fetchData();
    console.log(problemType);
  }, []);

  return (
    <div className='Problems'>
      <h1> Common Problems </h1>
      <div className="navButtons">
        <button onClick={() => navigate(`/checklist?machineId=${companyMachineId}`)}> Back </button>
        <button onClick={() => navigate("/submitform")}> Can't find solution </button>
      </div>
      {problems.map((problem, index) => {
        return(<Accordion key={index} buttonText={problem.description} panelText={problem.solutions}/>)
      })}
   </div>
  );
}

export default Problems;


/*
<Accordion buttonText="Product verkeerd op machine" panelText="Fotocellen controleren. Eventueel product handmatig op juiste positie plaatsen."/>
<Accordion buttonText="Laden/lossen duurt te lang" panelText="Waarschijnlijk staat de pallet klem. Zorg dat deze weer goed staat en reset de baan."/>
<Accordion buttonText="Niet veilig om te bewegen" panelText="De pallet steekt uit op de shuttle of een andere pallet op een baan aan het shuttle pad. Draai de pallet handmatig op de juiste positie."/>
<Accordion buttonText="Geen verbinding met satelliet" panelText="Controleren of satelliet aan staat. Als deze in het kanaal staat een opgeladen moet worden, opladen met oplaadkabel en in handbediening terugzetten op de shuttle."/>
<Accordion buttonText="Satelliet verkeer op machine" panelText="Fotocellen controleren. Eventueel product handmatig op juiste positie plaatsen."/>
*/