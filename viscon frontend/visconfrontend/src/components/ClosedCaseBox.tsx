import React from 'react';
import { Link } from 'react-router-dom';
import './CaseBox.css';
import Ticket from './Ticket';


function ClosedCaseBox(props) {
    return (
    <div className = "title-box">
        <div className="h-vertical-menu">
        <Link to = '#' className="active">{props.name}</Link>
        </div>
        <div className="vertical-menu">
            <Ticket name = "1"/>
        </div>
    </div>

    );

}

export default ClosedCaseBox;