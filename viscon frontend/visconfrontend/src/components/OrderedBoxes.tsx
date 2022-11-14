import "./OrderedBoxes.css";

interface IOrderedBoxes {
    buttonText?: string;
    panelText?: string;
    id: any;
    currentBox: number;
    buttonFunction?: any;
    navigateToPage?: any;
    navigateToButtonText: string;
    nextStepButtonText: string;
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
                <button onClick={acc.navigateToPage}> {acc.navigateToButtonText} </button>
                <button onClick={acc.buttonFunction}> {acc.nextStepButtonText} </button>
            </div>
        </div>
    );
}

export default OrderedBoxes;