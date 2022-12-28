import React from 'react';
import { Link } from 'react-router-dom';
import './CaseBox.css';
import Ticket from './Ticket';


function UnclaimedCaseBox(props) {
    return (
    <div className = "title-box">
        <div className="h-vertical-menu">
        <Link to = '#' className="active">{props.name}</Link>
        </div>
        <div className="vertical-menu">
            <Ticket name = "2"/>
        </div>
    </div>

    );

}

export default UnclaimedCaseBox;