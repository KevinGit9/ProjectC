/*
Machine select zoekbalk component

momenteel gebruikt het bootstrap als framework voor css, als het niet werkt gebruikt het command `` npm install --save bootstrap jquery ```
later wanneer er meer componenten zijn kan dit veranderd worden, bootstrap doet verder niks met de functionaliteit


BUGS:
na heel veel keer op de zoekbalk drukken en dan weg drukken laadt het component uitendelijk heel traag

*/




import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Machines.css';
import { useNavigate } from 'react-router-dom';
import { GetMyMachines } from '../services/CompanyMachineServices';

const SearchbarDropdown = (props: any) => {
  const { options, onInputChange } = props;
  const ulRef = React.useRef<HTMLUListElement>(null);                  //dit fragment kijkt wanneer er wordt weg geclickt uit de zoekbalk
  const inputRef = React.useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current!.addEventListener('click', (event) => {
      event.stopPropagation();
      console.log('input click')
      ulRef.current!.style.display = 'flex';
      onInputChange(event);
    })

    document.addEventListener('click', (event) => {
      console.log('doc click');

      ulRef.current!.style.display = 'none';
    })
  })
  //zoekbalk en "knoppen" die de dropdown maken
  return (
    <div className='Searchbar-Dropdown'>
      <input type="text" className="form-control" placeholder="Search" ref={inputRef} onChange={onInputChange}></input>
      <ul className="list-group" ref={ulRef}>
        {options.map((option, index) =>
          <button
            type="button"
            key={(index)}
            className="list-group-item list-group-item-action"
            onClick={(e) => {
              inputRef.current!.value = option;
            }}
          >
            {option}
          </button>
        )}

      </ul>

    </div>

  )
}


//tijdelijke database van machines
const defaultOptions = ['satelliet shuttle', 'transfer shuttle', 'lift', 'opzetpositie', 'kettingbaan', 'palletiseerder', 'voorstapelaar'] as string[]







//App, later aanpassen

function Machines() {
  var navigate = useNavigate();
  const [error, setError] = useState<string>();
  const [options, setOptions] = useState<any>([]);
  const [selectedMachine, setSelectedMachine] = useState<any>();
  const onInputChange = (event) => {
    console.log(event.target.value);
    getMachines();
    const new_options: string[] = defaultOptions.filter(option => option.includes(event.target.value))
    //setOptions(new_options);
  }

  //Function that gets all the Machines that the company of the currently logged in User owns.
  //Then displays the Machine Name + Id, if selected the machineId gets stored in the selectedMachine state.
  const getMachines = async () => {
    let machines = await GetMyMachines();
    setOptions(machines.map(machine => {
      console.log(machines);
      return (<option onClick={() => setSelectedMachine(machine.id)} value={machine.id}> {machine.name} {machine.id} </option>);
    }));
  }

  //Function that handles page navigation from the Machines page, it checks if a machine has been selected before sending the user to the next page in the Ticket Creation process.
  const handleNavigate = () => {
    if (selectedMachine == undefined) return (setError("Please select a machine."));
    navigate(`/checklist?machineId=${selectedMachine}`);
  }

  return (
    <div className="App container mt-2 mb-3">
      <h1>Select Machine</h1>
      <SearchbarDropdown
        options={options}
        onInputChange={onInputChange} />
      <button onClick={handleNavigate}> Continue </button>
      <p> {error} </p>
    </div>
  )
}

export default Machines;