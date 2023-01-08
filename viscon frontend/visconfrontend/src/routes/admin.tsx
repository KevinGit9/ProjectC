import React from 'react';
import './Admin.css'
import CaseBox from '../components/CaseBox';
import ClosedCaseBox from '../components/ClosedCaseBox';
import UnclaimedCaseBox from '../components/UnclaimedCaseBox';
import { getFullName } from '../services/LocalStorageManager';
import StandardButton from '../components/StandardButton';
import Tiles from '../components/Tiles';


function Admin() {
    const currentAdmin = getFullName();

    return (
        <div className='admin'>
            <h1> {currentAdmin}'s Dashboard </h1>
            <div className="cases">
                <CaseBox name='Current Cases' />
                <UnclaimedCaseBox name='Unclaimed Cases' />
                <ClosedCaseBox name='Closed Cases' />
            </div>
            <div className="Management">

                <Tiles 
                svg = "icons/groups_black_24dp.svg" 
                header = "Users" 
                desc = "View and manage all your users"
                onClick = "ManageUsers"
                buttontext = "View all users"/>
                <Tiles 
                svg = "icons/precision_manufacturing_black_24dp.svg" 
                header = "Machines" 
                desc = "View and manage all your machines"
                onClick = "ManageMachines"
                buttontext = "View all machines"/>
                <Tiles 
                svg = "icons/engineering_black_24dp.svg" 
                header = "Company" 
                desc = "View and manage your company"
                onClick = "ManageCompany"
                buttontext = "View company info"/>

            </div>
        </div>
    );

}


export default Admin;

