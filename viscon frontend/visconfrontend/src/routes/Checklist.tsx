import React, { useState } from 'react';
import './Checklist.css';
import OrderedBoxes from '../components/OrderedBoxes';
import { useNavigate } from 'react-router-dom';
import InitialBox from '../components/OrderedBoxesInitial';

function Checklist() {
    const [currentId, setCurrentId] = useState(1);
    const navigate = useNavigate();

    return(
        <div className="Checklist">
            <h1> Checklist </h1>
            <InitialBox buttonText="1 )" panelText="Does the machine display an error message?" id={1} currentBox={currentId} leftButtonText="No" leftButtonFunction={() => setCurrentId(2)} rightButtonText="Yes" rightButtonFunction={() => navigate("/problems")}/>
            <OrderedBoxes buttonText="2 )" panelText="Is the machine on?" id={2} currentBox={currentId} leftButtonText="No" rightButtonText="Yes" rightButtonFunction={() => setCurrentId(3)} backButtonFunction={() => setCurrentId(1)}/>
            <OrderedBoxes buttonText="3 )" panelText="Are all cables properly connected?" id={3} currentBox={currentId} leftButtonText="No" rightButtonText="Yes" rightButtonFunction={() => setCurrentId(4)} backButtonFunction={() => setCurrentId(2)}/>
            <OrderedBoxes buttonText="4 )" panelText="Is the conveyor belt empty?" id={4} currentBox={currentId} leftButtonText="No" rightButtonText="Yes" rightButtonFunction={() => navigate("/problems")} backButtonFunction={() => setCurrentId(3)}/>
        </div>
    );
}

export default Checklist;