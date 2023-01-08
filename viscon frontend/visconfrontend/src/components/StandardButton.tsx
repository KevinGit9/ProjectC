import React from 'react';
import './StandardButton.css';

function StandardButton(props) {
    return (<button className ="StandardButton" onClick = {props.OnClick}>{props.text}</button>);
}


export default StandardButton;

