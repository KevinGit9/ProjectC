import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Machines from "./routes/Machines";
import Checklist from "./routes/Checklist";
import UserMenu from './routes/UserMenu';
import Problems from './routes/Problems';
import Submitform from './routes/submitform'
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/machines" element={ <Machines /> } />
        <Route path="/checklist" element={ <Checklist /> } />
        <Route path="/usermenu" element={ <UserMenu /> } />
        <Route path="/problems" element={<Problems />} />
        <Route path="/submitform" element={<Submitform />}/>
        <Route path="/*" element /> {/* 404 error page toevoegen*/}
      </Routes>
    </div>
  );
}

export default App;