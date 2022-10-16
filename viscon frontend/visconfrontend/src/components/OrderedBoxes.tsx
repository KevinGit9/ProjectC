import "./OrderedBoxes.css";

interface IOrderedBoxes {
    buttonText?: string;
    panelText?: string;
    id: any;
    currentBox: number;
    buttonFunction: any;
}


function OrderedBoxes(acc: IOrderedBoxes) {
    var className = "orderedBoxesPanel hideable";
    if (acc.id === acc.currentBox) {
        className = className.concat(" show");
    }

    return(
        <div className="orderedBoxes">
            <div className="orderedBoxesButton"> {acc.buttonText} </div> 
            <div className={className}>
                <p> {acc.panelText} {acc.id} </p>
                <button onClick={acc.buttonFunction}> Next Step </button>
            </div>
        </div>
    );
}

export default OrderedBoxes;