import React from 'react';

import './submitform.css';


function Submitform() {
    return (

        <div className="submissionform">
            <h1>Problem submission form</h1>
            <form id="problemform">

                <p>Please describe the behaviour you're expecting.</p>
                <textarea className = "textbox"> </textarea> <br/>

                <p>Please describe the behaviour you're seeing.</p>
                <textarea className="textbox"> </textarea> <br />

                <p>Please enter any additional information.</p>
                <textarea className="textbox"> </textarea> <br />
                <input className="paperclip" type="file" multiple accept="image/*, video/*" ></input>
                <input type="submit" ></input>
            </form>

        </div>


    );
}

export default Submitform;
