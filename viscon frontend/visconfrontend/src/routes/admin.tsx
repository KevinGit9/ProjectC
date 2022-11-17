import { Link } from "react-router-dom";
import './Admin.css'

function Admin() {
    return (
        <div className='admin'>
            <h1>Admin Name's Dashboard </h1>
            <div className='buttons'>
                <button>current case</button>
                <button>cases </button>
                <button>my past cases</button>
                <Link to="/checklist">
                    <button>checklist</button>
                </Link>
                <button>add new user</button>
                <button>add new machine</button>
            </div>
        </div>
    );
    
}

export default Admin;

