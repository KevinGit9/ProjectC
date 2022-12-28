import React from 'react';
import { Link } from "react-router-dom";
import './Admin.css'
import CaseBox from '../components/CaseBox';
import ClosedCaseBox from '../components/ClosedCaseBox';
import UnclaimedCaseBox from '../components/UnclaimedCaseBox';



function Admin() {
    return (
        <div className='admin'>
            <h1>Admin Name's Dashboard </h1>
            <div className = "cases">
                <CaseBox name='Current Cases'/>
                <UnclaimedCaseBox name='Unclaimed Cases'/>
                <ClosedCaseBox name='Closed Cases'/>
            </div>
            <div className="Manage">
               <ul className = "ManageHeader"> Manage</ul>
               <ul>Hello</ul>
               <ul>Hello</ul>
            </div>
        </div>

    );

}


export default Admin;

