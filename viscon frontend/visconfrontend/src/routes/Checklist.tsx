import React, { useState } from 'react';
import './Checklist.css';
import OrderedBoxes from '../components/OrderedBoxes';

function Checklist() {
    const [currentId, setCurrentId] = useState(1);

    return(
        <div className="Checklist">
            <h1> Checklist </h1>
            <OrderedBoxes buttonText="test1" panelText="hi" id={1} currentBox={currentId} buttonFunction={() => setCurrentId(2)}/>
            <OrderedBoxes buttonText="test2" panelText="hi" id={2} currentBox={currentId} buttonFunction={() => setCurrentId(3)}/>
            <OrderedBoxes buttonText="test3" panelText="hi" id={3} currentBox={currentId} buttonFunction={() => setCurrentId(4)}/>
            <p> {currentId} </p>
        </div>
    );
}

export default Checklist;