import "./ConfirmationWindow.css";

function ConfirmationWindow(props) {
    return (props.open) ? (
        <div className="dark">
            <div className="confirmationWindow">
                <div className="confirmationWindowHeader">
                    <span className="close" onClick={() => props.setOpen(false)}> &times; </span>
                </div>
                <div className="confirmationWindowPanel">
                    <p> {props.text} </p>
                </div>
                <div className="confirmationWindowButtons">
                        <button onClick={() => props.setOpen(false)}> Back </button>
                        <button onClick={props.continueButton}> Yes </button>
                </div>
            </div>
        </div>
    ) : null;
}

export default ConfirmationWindow;