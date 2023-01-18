import React, { useState, useEffect} from 'react';
import './UserManagement.css'
import AdminTools from '../components/AdminTools'
import { DeleteUser, GetAllUsers } from '../services/UserServices';
import TableRow from '../components/TableRow';
import { useNavigate } from 'react-router-dom';


function UserManagement(props) {
    const navigate = useNavigate();
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        async function fetchData() {
            setUsers(await GetAllUsers());
        }
        fetchData();
        console.log(users);
    }, []);

    return (
    <div className="management">
        <AdminTools 
        svg = "../icons/groups_black_24dp.svg"
        text = "User Management"
        placeholder = "Search for user..."
        title1 = "Firstname"
        title2 = "Lastname"
        title3 = "Role"
        TableRow =  {users.map((user, index) => {
            return(<TableRow class={`rows ${index % 2 === 0 ? "even": "odd"}`} row1={user.firstName} row2={user.lastName} row3={user.role} id={user.id} func={DeleteUser} entity = "User"/>)
          })}
        
        />
       <button onClick={() => navigate("/admin")}> Back to Dashboard </button>
    </div>
    );
}

export default UserManagement;

