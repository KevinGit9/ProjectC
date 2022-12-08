import React from 'react';
import { Link } from 'react-router-dom';
import './CaseBox.css';
function CaseBox(props) {
    return (
    <div className = "title-box">
        <div className = "header-box">
            <Link className = "text" to = "#"><p>{props.name}</p></Link>
        </div>
        <div className="vertical-menu">
            <Link to={"#"}>Ticket</Link>
            <Link to={"#"}>Ticket</Link>
            <Link to={"#"}>Ticket</Link>
            <Link to={"#"}>Ticket</Link>
            <Link to={"#"}>Ticket</Link>
            <Link to={"#"}>Ticket</Link>
            <Link to={"#"}>Ticket</Link>
            <Link to={"#"}>Ticket</Link>
            <Link to={"#"}>Ticket</Link>
        </div>
    </div>

    );

}
export default CaseBox;