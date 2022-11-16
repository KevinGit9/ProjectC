import "./OrderedBoxes.css";

interface IOrderedBoxes {
    buttonText?: string;
    panelText?: string;
    id: any;
    currentBox: number;
    rightButtonText: string;
    rightButtonFunction?: any;
    leftButtonText: string;
    leftButtonFunction?: any;
}


function OrderedBoxes(acc: IOrderedBoxes) {
    var classNameButton = "orderedBoxesButton";
    var classNamePanel = "orderedBoxesPanel hideable";
    if (acc.id === acc.currentBox) {
        classNameButton = classNameButton.concat(" open");
        classNamePanel = classNamePanel.concat(" show");
    }

    return(
        <div className="orderedBoxes">
            <div className={classNameButton}> {acc.buttonText} </div> 
            <div className={classNamePanel}>
                <p> {acc.panelText} </p>
                <div className="orderedBoxesButtons">
                    <button onClick={acc.leftButtonFunction}> {acc.leftButtonText} </button>
                    <button onClick={acc.rightButtonFunction}> {acc.rightButtonText} </button>
                </div>
            </div>
        </div>
    );
}

export default OrderedBoxes;