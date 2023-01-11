import "./ConfirmationWindow.css";

function ConfirmationWindow(props) {
    return (props.open) ? (
        <div className="dark">
            <div className="confirmationWindowPanel">
                <span className="close" onClick={() => props.setOpen(false)}> &times; </span>
                <p> {props.text} </p>
            </div>
        </div>
    ) : null;
}

export default ConfirmationWindow;