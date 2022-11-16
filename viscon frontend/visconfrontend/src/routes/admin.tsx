import { Link } from "react-router-dom";
import './Admin.css'

function Admin() {
    return (

        <div className='admin'>
            <h1>Admin Name's Dashboard </h1>
            <div className='buttons'>
            <button className='btn'>current case</button>
            <button className='btn'>cases </button>
            <button className='btn'>my past cases</button>
            <Link to="/checklist">
                <button className='btn'>checklist</button>
            </Link>
            <button className='btn'>add new user</button>
            <button className='btn'>add new machine</button>
            </div>
        </div>
    );
    
}

export default Admin;

