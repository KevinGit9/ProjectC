// losse component van zoekbalk


import React, {useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const SearchbarDropdown = (props: any) => {
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