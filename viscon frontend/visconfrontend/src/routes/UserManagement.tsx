import React from 'react';
import './UserManagement.css'
import AdminTools from '../components/AdminTools'
import { getFullName } from '../services/LocalStorageManager';




function UserManagement(props) {
    const currentAdmin = getFullName();

    return (
    <div>
        <AdminTools 
        svg = "../icons/groups_black_24dp.svg"
        text = "User Management"
        placeholder = "Search for user..."
        />
    </div>
    );
}

export default UserManagement;

