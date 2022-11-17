import React from 'react';

import './submitform.css';


function Submitform() {
    return (

        <div className="submissionform">
            Beschrijf het probleem.
            <form id="problemform">
                <label> <br></br>
                    <textarea className = "textbox"> </textarea>
                    <input className="paperclip" type="file" multiple accept= "image/*, video/*" ></input>
                    <input type="submit" ></input>
                </label>
            </form>

        </div>


    );
}

export default Submitform;
