import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Machines from "./routes/Machines";
import Checklist from "./routes/Checklist";
import UserMenu from './routes/UserMenu';
import Problems from './routes/Problems';
import ProfileMenu from "./components/ProfileMenu";

import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/machines" element={ <Machines /> } />
        <Route path="/checklist" element={ <Checklist /> } />
        <Route path="/usermenu" element={ <UserMenu /> } />
        <Route path="/problems" element={ <Problems /> } />
        <Route path="/ProfileMenu" element={ <ProfileMenu /> } />
      </Routes>
    </div>
  );
}

export default App;