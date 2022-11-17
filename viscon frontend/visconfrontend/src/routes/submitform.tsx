import React from 'react';

import './submitform.css';


function Submitform() {
    return (

        <div className="submissionform">
            <h1>Problem submission form</h1>
            <p>Beschrijf het probleem zo gedetailleerd mogelijk.</p>
            <form id="problemform">
                <label> <br></br>
                    <textarea className = "textbox"> </textarea> <br/>
                    <input className="paperclip" type="file" multiple accept= "image/*, video/*" ></input>
                    <input type="submit" ></input>
                </label>
            </form>

        </div>


    );
}

export default Submitform;
