import './Tiles.css'
import StandardButton from './StandardButton';

function Tiles(props){
    return(
        <div className="tile">
        <div className="tile-content">
            <div className="tile-image">
                <img className = "filter-theme" src={props.svg}/>
            </div>
            <h3 className='tile-header'>{props.header}</h3>
            <p className='tile-description'>{props.desc}</p>
            <div>
            <StandardButton click = {props.click} text= {props.buttontext}/>
            </div>
        </div>
    </div>
    );
}
export default Tiles;