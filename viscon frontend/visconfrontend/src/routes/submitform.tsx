import React from 'react';

import './submitform.css';


function Submitform() {
    return (

        <div className="App">
            Beschrijf je probleem.
            <form id="problemform">
                <label>problemform: <br></br>
                    <textarea className = "textbox"> </textarea>
                    <input className="paperclip" type="file" multiple accept= "image/*, video/*" ></input>
                    <input type="submit" ></input>
                </label>
            </form>

            <input type ='text'></input>
        </div>


    );
}

export default Submitform;
