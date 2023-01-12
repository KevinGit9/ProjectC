// import { NavLink } from 'react-router-dom'
import './AdminTools.css'

function AdminTools(props) {
    return(
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
                </div>
            </div>
        </div>
    );
 }

export default AdminTools;
