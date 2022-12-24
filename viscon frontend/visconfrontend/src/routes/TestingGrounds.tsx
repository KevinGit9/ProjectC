import './Home.css';
import { useState } from 'react';
import { CreateCompany } from '../services/CompanyServices';

function TestingGrounds() {
  const [company, setCompany] = useState<any>([]);

  const handleClick = (name: string) => {
    CreateCompany(name).then(response => {
      setCompany(`Company ${name} succesfully created.`);
    })
    .catch(error => {
      setCompany(`Company ${name} already exists.`);
    });
  }

  return (
    <div className="TestingGrounds">
      <h1> Testing Grounds </h1>
      <button onClick={() => handleClick("Razer")}> Create a company. </button>
      <p> {company} </p>
    </div>
  );
}

export default TestingGrounds;