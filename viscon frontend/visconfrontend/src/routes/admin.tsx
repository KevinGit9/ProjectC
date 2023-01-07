import './Admin.css'
import CaseBox from '../components/CaseBox';
import { getFullName } from "../services/LocalStorageManager";

function Admin() {
    const currentAdmin = getFullName();

    return (
        <div className='admin'>
            <h1> {currentAdmin}'s Dashboard </h1>
            <div className = "cases">
                <CaseBox name='Current Cases'></CaseBox>
                <CaseBox name='Closed Cases'></CaseBox>
                <CaseBox name='Unclaimed Cases'></CaseBox>
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

