import './Home.css';
import ConfirmationWindow from '../components/ConfirmationWindow';
import { useState } from 'react';

function Home() {
  const[confirmWindow, setConfirmWindow] = useState(false)

  return (
    <div>
      <div className="Home">
        <button onClick={() => setConfirmWindow(true)}> Confirm </button>
      </div>
      <ConfirmationWindow open={confirmWindow} text="Test to see if it works." setOpen={setConfirmWindow}/>
    </div>
  );
}


export default Home;