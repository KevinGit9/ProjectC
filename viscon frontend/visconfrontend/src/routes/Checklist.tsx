import React, { useState } from 'react';
import './Checklist.css';
import OrderedBoxes from '../components/OrderedBoxes';
import { useNavigate } from 'react-router-dom';

function Checklist() {
    const [currentId, setCurrentId] = useState(1);
    const navigate = useNavigate();

    return(
        <div className="Checklist">
            <h1> Checklist </h1>
            <OrderedBoxes buttonText="1 )" panelText="Does the machine display an error message?" id={1} currentBox={currentId} navigateToButtonText="Yes" navigateToPage={() => navigate("/problems")} nextStepButtonText="No" buttonFunction={() => setCurrentId(2)}/>
            <OrderedBoxes buttonText="2 )" panelText="Is the machine turned on?" id={2} currentBox={currentId} navigateToButtonText="No" nextStepButtonText="Yes" buttonFunction={() => setCurrentId(3)}/>
            <OrderedBoxes buttonText="3 )" panelText="Are all cables properly connected?" id={3} currentBox={currentId} navigateToButtonText="No" nextStepButtonText="Yes" buttonFunction={() => setCurrentId(4)}/>
            <OrderedBoxes buttonText="4 )" panelText="Is the conveyor belt empty?" id={4} currentBox={currentId} navigateToButtonText="No" nextStepButtonText="Yes" buttonFunction={() => setCurrentId(5)}/>
            <p> {currentId} </p>
        </div>
    );
}

export default Checklist;