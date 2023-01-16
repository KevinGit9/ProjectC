// import { NavLink } from 'react-router-dom'
import './AdminTools.css'
import TableRow from './TableRow';


function AdminTools(props) {

    return (
        <div className="AdminTools">
            <div className="table-tool">
                <div className="table-tool-header">
                    <div className="table-tool-identity">
                        <img className="table-tool-image" src={props.svg} />
                        <h3 className='table-tool-text'>{props.text}</h3>
                    </div>
                    <div className="table-tool-searchbar">
                        <input type="text" placeholder={props.placeholder}></input>
                    </div>
                </div>
                <div className="table-tool-content">
                    <div className="table-tool-title">
                        <a>{props.title1}</a>
                        <a>{props.title2}</a>
                        <a>{props.title3}</a>
                        <img className = "dropbtn hide"src = "/icons/more_horiz_FILL0_wght400_GRAD0_opsz48.svg" />
                    </div>
                    <div className="table-tool-rows">
                        {props.TableRow}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminTools;

