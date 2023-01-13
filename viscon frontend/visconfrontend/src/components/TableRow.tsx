import './TableRow.css'
function TableRow(props) {

    return (
        <div className={props.class}>
            <a>{props.row1}</a>
            <a>{props.row2}</a>
            <a>{props.row3}</a>
            <div className="dropdown">
                <img className = "dropbtn"src = "/icons/more_horiz_FILL0_wght400_GRAD0_opsz48.svg" />
                <div id="myDropdown" className="dropdown-content">
                    <a href="#">Edit User</a>
                    <a href="#">Delete User</a>
                </div>

            </div>
        </div>
    );

}

export default TableRow;