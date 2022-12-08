import React from 'react';
import './CaseBox.css';
function CaseBox(props) {
    return (
    <div className = "title-box">
        <div className="vertical-menu">
            <a href="#" className="active">{props.name}</a>
            <a href="#"> Ticket 1 </a>
            <a href="#"> Ticket 2 </a>
            <a href="#"> Ticket 3 </a>
            <a href="#"> Ticket 4 </a>
            <a href="#"> Ticket 5 </a>
            <a href="#"> Ticket 6 </a>
            <a href="#"> Ticket 7 </a>
        </div>
    </div>

    );

}
export default CaseBox;