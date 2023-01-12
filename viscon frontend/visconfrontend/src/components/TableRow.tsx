import './TableRow.css'
function TableRow(props){

    return(
    <div className="TableRowPanel">
        <a>{props.firstName}</a>
        <a>{props.lastName}</a>
    </div> 
    );

}

export default TableRow;