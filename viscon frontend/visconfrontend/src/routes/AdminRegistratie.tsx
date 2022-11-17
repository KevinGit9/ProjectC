import React from 'react';
import './AdminRegistratie.css';


function AdminRegistratie() {
  return (

  <><><><div>
      <button className="Back">Back</button>
      {/* <button className="Continue">Continue</button> */}
      <div className="Titel"><h1>Admin: Registrer</h1></div>
      <div className="card">
      </div>
    </div></>
      <input type="Name" name="text" className="Name" placeholder="Enter your name!"></input>
      <input type="Last_Name" name="text" className="Last_Name" placeholder="Enter your last name!"></input>
      <input type="E-mail" name="text" className="E-mail" placeholder="Enter your e-mail!"></input>
      <input type="Password" name="text" className="Password" placeholder="Enter your password!"></input>
      <input type="Password" name="text" className="Confirm_Password" placeholder="Confirm your password!"></input>
      <input type="submit" className="Continue" value="Register!" />
    </><div>
      </div></>
    
  );

}
export default AdminRegistratie;



  