import React from 'react';
import "./Accordion.css";

interface IAccordion {
    buttonText?: string;
    panelText?: string;
}

function Accordion(acc: IAccordion) {
    return (
        <div className="accordionContainer">
            <button className="accordion" onClick={handleClick}> {acc.buttonText} </button> 
            <div className="panel">
                <p> {acc.panelText} </p>
            </div>
        </div>
    )
}

const handleClick = (e: any) => {
    e.target.classList.toggle("active");

    let panel = e.target.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    }
    else {
        panel.style.display = "block";
    }
}

export default Accordion;