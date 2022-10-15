import React from 'react';
import Accordion from '../components/Accordion';

function Checklist() {
    return(
        <div>
            <h1> Checklist </h1>
            <Accordion buttonText="Accordion 1" panelText="Test 123"/>
            <Accordion buttonText="Accordion 2" panelText="Test 123"/>
        </div>
    );
}

export default Checklist;