import './TableRow.css'
function TableRow(props){

    return(
    <div className={props.class}>
        <a>{props.row1}</a>
        <a>{props.row2}</a>
        <a>{props.row3}</a>
        {/* <button>...</button> */}
    </div> 
    );

}

export default TableRow;