import { Link } from "react-router-dom";
import './Admin.css'
import CaseBox from '../components/CaseBox';

function Admin() {
    return (
        <div className='admin'>
            <h1>Admin Name's Dashboard </h1>
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

