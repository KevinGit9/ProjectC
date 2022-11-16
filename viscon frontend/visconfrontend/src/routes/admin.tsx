import { Link } from "react-router-dom";
import './Admin.css'

function Admin() {
    return (

        <div className = 'admin'>
            <h1>Admin Name's Dashboard </h1>
            <button className='btn'>current case</button>
            <button className='btn-1'>cases </button>
            <button className='btn-1'>my past cases</button>
            <Link to ="/checklist">
                <button className='btn-1'>checklist</button>
            </Link>
            <button className='btn-1'>add new user</button>
            <button className='btn-1'>add new machine</button>
        </div>
    );
    
}

export default Admin;

