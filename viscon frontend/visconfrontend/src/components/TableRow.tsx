import { useState } from 'react';
import { DeleteUser } from '../services/UserServices';
import ConfirmationWindow from './ConfirmationWindow';
import './TableRow.css'

function TableRow(props) {
    const [confirmWindow, setConfirmWindow] = useState(false);
    
    const handleClick = () => {
        props.func(props.id);
        window.location.reload();
    }

    return (
        <div className={props.class}>
            <a>{props.row1}</a>
            <a>{props.row2}</a>
            <a>{props.row3}</a>
            <div className="dropdown">
                <img className = "dropbtn"src = "/icons/more_horiz_FILL0_wght400_GRAD0_opsz48.svg" />
                <div id="myDropdown" className="dropdown-content">
                    <a href="#">Edit {props.entity}</a>
                    <a onClick={() => setConfirmWindow(true)}>Delete {props.entity}</a>
                </div>

            </div>
            <ConfirmationWindow open={confirmWindow} text={`Are you sure you want to delete this ${props.entity}?`} setOpen={setConfirmWindow} continueButton={handleClick} />
        </div>
    );
}

export default TableRow;