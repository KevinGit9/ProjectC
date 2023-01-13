import React, { useState, useEffect} from 'react';
import './UserManagement.css'
import AdminTools from '../components/AdminTools'
import { Get10Users } from '../services/UserServices';
import { getFullName } from '../services/LocalStorageManager';
import TableRow from '../components/TableRow';




function UserManagement(props) {
    const currentAdmin = getFullName();
    const [users, setUsers] = useState<any>([]);
    useEffect(() => {
        async function fetchData() {
            setUsers(await Get10Users());
        }
        fetchData();
        console.log(users);
    }, []);

    return (
    <div>
        <AdminTools 
        svg = "../icons/groups_black_24dp.svg"
        text = "User Management"
        placeholder = "Search for user..."
        title1 = "Firstname"
        title2 = "Lastname"
        TableRow =  {users.map((user, index) => {
            return(<TableRow class={`rows ${index % 2 == 0 ? "even": "odd"}`} row1={user.firstName} row2={user.lastName}/>)
          })}
        />
       
    </div>
    );
}

export default UserManagement;

