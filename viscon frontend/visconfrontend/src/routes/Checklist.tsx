import { useState } from 'react';
import './Checklist.css';
import OrderedBoxes from '../components/OrderedBoxes';
import { useNavigate } from 'react-router-dom';
import InitialBox from '../components/OrderedBoxesInitial';
import OrderedBoxesSingle from '../components/OrderedBoxesSingle';

function Checklist() {
    const [currentId, setCurrentId] = useState(1);
    const navigate = useNavigate();
    
    const HandlePageNavigation = (problemType: string) => {
        const queryParams = new URLSearchParams(window.location.search);
        const companyMachineId = queryParams.get('machineId');
        navigate(`/problems?problemType=${problemType}&machineId=${companyMachineId}`);
    }

    return(
        <div className="checkListContainer">
            <div className="Checklist">
                <h1> Checklist </h1>
                <InitialBox buttonText="1 )" panelText="Does the machine display an error message?" id={1} currentBox={currentId} leftButtonText="No" leftButtonFunction={() => setCurrentId(2)} rightButtonText="Yes" rightButtonFunction={() => HandlePageNavigation("error message")}/>
                <OrderedBoxesSingle buttonText="2 )" panelText="Is the machine on?" id={2} currentBox={currentId} rightButtonText="Yes" rightButtonFunction={() => setCurrentId(3)} backButtonFunction={() => setCurrentId(1)}/>
                <OrderedBoxesSingle buttonText="3 )" panelText="Are all cables properly connected?" id={3} currentBox={currentId} rightButtonText="Yes" rightButtonFunction={() => setCurrentId(4)} backButtonFunction={() => setCurrentId(2)}/>
                <OrderedBoxesSingle buttonText="4 )" panelText="Is the conveyor belt empty?" id={4} currentBox={currentId} rightButtonText="Yes" rightButtonFunction={() => HandlePageNavigation("no error message")} backButtonFunction={() => setCurrentId(3)}/>
            </div>
            <button className="checkListBackButton" onClick={() => navigate("/machines")}> Back </button>
        </div>

    );
}

export default Checklist;