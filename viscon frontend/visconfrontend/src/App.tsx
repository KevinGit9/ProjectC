import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Machines from "./routes/Machines";
import Checklist from "./routes/Checklist";
import UserMenu from './routes/UserMenu';
import Problems from './routes/Problems';
import Submitform from './routes/submitform'
import './App.css';
import Login from './routes/login';
import Admin from './routes/admin'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/machines" element={ <Machines /> } />
        <Route path="/checklist" element={ <Checklist /> } />
        <Route path="/usermenu" element={ <UserMenu /> } />
        <Route path="/problems" element={<Problems />} />
        <Route path="/submitform" element={<Submitform />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={< Admin/>} />
      </Routes>
    </div>
  );
}

export default App;