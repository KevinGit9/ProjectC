import React from 'react';
import './StandardButton.css';

function StandardButton(props) {
    return (<button className ="StandardButton" onClick = {props.click}>{props.text}</button>);
}


export default StandardButton;

