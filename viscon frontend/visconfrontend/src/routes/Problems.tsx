import { useEffect, useState } from 'react';
import React from 'react';
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

  //Function that runs once when User loads the page.
  //Gets the Problems of the selected Machine and filters them based on the Checklist selections.
  useEffect(() => {
    async function fetchData() {
      const machine = (await GetMachineFromCompanyMachine(companyMachineId));
      setProblems(await GetProblemsFromMachine(`${machine.id}/${problemType}`));
    }
    fetchData();
  }, []);

  return (
    <div className='Problems'>
      <h1> Common Problems </h1>
      <div className="navButtons">
        <button onClick={() => navigate(`/checklist?machineId=${companyMachineId}`)}> Back </button>
        <button onClick={() => navigate(`/submitform?machineId=${companyMachineId}`)}> Can't find solution </button>
      </div>
      {problems.map((problem, index) => {
        return(<Accordion key={index} buttonText={problem.description} panelText={problem.solutions}/>)
      })}
   </div>
  );
}

export default Problems;