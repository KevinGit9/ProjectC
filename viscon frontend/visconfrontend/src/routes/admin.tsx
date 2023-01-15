import React from 'react';
import './Admin.css'
import CaseBox from '../components/CaseBox';
import ClosedCaseBox from '../components/ClosedCaseBox';
import UnclaimedCaseBox from '../components/UnclaimedCaseBox';
import { getFullName } from '../services/LocalStorageManager';



function Admin() {
    const currentAdmin = getFullName();

    return (
        <div className='admin'>
            <h1> {currentAdmin}'s Dashboard </h1>
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

