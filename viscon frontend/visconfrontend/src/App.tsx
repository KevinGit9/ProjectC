import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Machines from "./routes/Machines";
import Checklist from "./routes/Checklist";
import './App.css';
import UserMenu from './routes/UserMenu';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/machines" element={ <Machines /> } />
        <Route path="/checklist" element={ <Checklist /> } />
        <Route path="/usermenu" element={ <UserMenu /> } />
      </Routes>
    </div>
  );
}

export default App;