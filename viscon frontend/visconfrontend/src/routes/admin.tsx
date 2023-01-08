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
                svg = "icons/manage_accounts_black_24dp.svg" 
                header = "Users" 
                desc = "View and manage all your users"
                buttontext = "View all Users"/>
                <Tiles 
                svg = "icons/manage_accounts_black_24dp.svg" 
                header = "Machines" 
                desc = "view and manage all your Machines"
                buttontext = "View all Machines"/>
                <Tiles 
                svg = "icons/manage_accounts_black_24dp.svg" 
                header = "Company" 
                desc = "View and manage your Company Information"
                buttontext = "View Company"/>

            </div>
        </div>
    );

}


export default Admin;

