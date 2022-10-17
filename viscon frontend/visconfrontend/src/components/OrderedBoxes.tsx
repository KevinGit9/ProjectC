import "./OrderedBoxes.css";

interface IOrderedBoxes {
    buttonText?: string;
    panelText?: string;
    id: any;
    currentBox: number;
    buttonFunction?: any;
    navigateToPage?: any;
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
                <button onClick={acc.navigateToPage}> Go to different page. </button>
                <button onClick={acc.buttonFunction}> Next Step </button>
            </div>
        </div>
    );
}

export default OrderedBoxes;