/*
Machine select zoekbalk component

momenteel gebruikt het bootstrap als framework voor css, als het niet werkt gebruikt het command `` npm install --save bootstrap jquery ```
later wanneer er meer componenten zijn kan dit veranderd worden, bootstrap doet verder niks met de functionaliteit


BUGS:
na heel veel keer op de zoekbalk drukken en dan weg drukken laadt het component uitendelijk heel traag

*/




import React, {useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Machines.css';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';

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
  const [options, setOptions] = useState<any>([]);
  const onInputChange = (event) => {
    console.log(event.target.value);
    const new_options  : string[] = defaultOptions.filter(option => option.includes(event.target.value))
    setOptions(new_options) // dit zou moeten werken (werkt op JS wel), maar kan een error geven
    //setOptions(getMachines);
  }

  /*
  const getMachines = () => {
    axios
      .get("/api/CompanyMachine")
      .then((response) => {
        setOptions(response.data.map(machine => {
          return(machine.name);
        }));
        console.log(response);
      })
      .catch((error) => console.log(error));
    }*/

  return (
    <div className="App container mt-2 mb-3">
      <h1>Select Machine</h1>
      <SearchbarDropdown 
      options={options}
      onInputChange={onInputChange} />
      <button onClick={() => navigate("/checklist")}> Continue </button>
    </div>
  )
}

export default Machines;