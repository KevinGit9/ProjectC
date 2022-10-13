import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
      <header> Viscon </header>
      <Accordion buttonText="Accordion 1" panelText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
    </div>
  );
}

export default App;
