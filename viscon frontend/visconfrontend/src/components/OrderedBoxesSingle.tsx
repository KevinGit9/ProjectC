interface IOrderedBoxes {
    buttonText?: string;
    panelText?: string;
    id: any;
    currentBox: number;
    rightButtonText: string;
    rightButtonFunction?: any;
    backButtonFunction?: any;
}


function OrderedBoxesSingle(acc: IOrderedBoxes) {
    var classNameButton = "orderedBoxesButton";
    var classNamePanel = "orderedBoxesPanel hideable";
    var previousCheckButtonPanel = "previousCheckButtonPanel hideable";
    if (acc.id === acc.currentBox) {
        classNameButton = classNameButton.concat(" open");
        classNamePanel = classNamePanel.concat(" show");
        previousCheckButtonPanel = previousCheckButtonPanel.concat(" show");

    }

    return(
        <div className="orderedBoxes">
            <div className={classNameButton}> 
                {acc.buttonText} 
                <div className={previousCheckButtonPanel}> <button className="previousCheckButton" onClick={acc.backButtonFunction}> Back </button> </div>
            </div> 
            <div className={classNamePanel}>
                <p> {acc.panelText} </p>
                <div className="orderedBoxesButtonsSingle">
                    <button onClick={acc.rightButtonFunction}> {acc.rightButtonText} </button>
                </div>
            </div>
        </div>
    );
}

export default OrderedBoxesSingle;