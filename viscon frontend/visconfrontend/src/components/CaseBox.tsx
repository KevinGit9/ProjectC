import React from 'react';
import { Link } from 'react-router-dom';
import './CaseBox.css';


function CaseBox(props) {
    return (
    <div className = "title-box">
        <div className="h-vertical-menu">
        <Link to = '#' className="active">{props.name}</Link>
        </div>
        <div className="vertical-menu">
            <Link to="#"> Ticket 1 </Link>
            <Link to="#"> Ticket 2 </Link>
            <Link to="#"> Ticket 3 </Link>
            <Link to="#"> Ticket 4 </Link>
            <Link to="#"> Ticket 5 </Link>
            <Link to="#"> Ticket 6 </Link>
            <Link to="#"> Ticket 7 </Link>
        </div>
    </div>

    );

}
export default CaseBox;