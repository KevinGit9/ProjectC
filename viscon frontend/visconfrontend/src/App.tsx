import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Layout from './components/Layout'
import Home from "./routes/Home";
import Machines from "./routes/Machines";
import Checklist from "./routes/Checklist";
import UserMenu from './routes/UserMenu';
import Problems from './routes/Problems';
import Submitform from './routes/submitform';
import Admin from './routes/admin';
import Login from './routes/login';
import AdminRegistratie from './routes/AdminRegistratie';
import './App.css';


function App() {
  return (
      <div className="App">




        <div className="routes">
          <Routes>
            <Route path="/" element={<Layout> <Home /> </Layout>} />
            <Route path="/machines" element={<Layout> <Machines /> </Layout>} />
            <Route path="/checklist" element={<Layout> <Checklist /> </Layout>} />
            <Route path="/usermenu" element={<Layout> <UserMenu /> </Layout>} />
            <Route path="/problems" element={<Layout> <Problems /> </Layout>} />
            <Route path="/submitform" element={<Layout> <Submitform /> </Layout>} />
            <Route path="/login" element={< Login />} />
            <Route path="/admin" element={<Layout> < Admin/> </Layout>} />
            <Route path="/registration" element={<Layout> < AdminRegistratie/> </Layout>} />
            <Route path="/*" element /> {/* 404 error page toevoegen*/}
          </Routes>
        </div>
    </div>
  );
}

export default App;