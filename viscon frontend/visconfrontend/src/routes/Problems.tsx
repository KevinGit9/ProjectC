import React from 'react';
import Accordion from '../components/Accordion';
import { useNavigate } from 'react-router-dom';
import './Problems.css';

function Problems() {
  const navigate = useNavigate();

  return (
<<<<<<< Updated upstream
    <div className='Problems'>
      <h1> Common Problems </h1>
      <Accordion buttonText="Product verkeerd op machine" panelText="Fotocellen controleren. Eventueel product handmatig op juiste positie plaatsen."/>
      <Accordion buttonText="Laden/lossen duurt te lang" panelText="Waarschijnlijk staat de pallet klem. Zorg dat deze weer goed staat en reset de baan."/>
      <Accordion buttonText="Niet veilig om te bewegen" panelText="De pallet steekt uit op de shuttle of een andere pallet op een baan aan het shuttle pad. Draai de pallet handmatig op de juiste positie."/>
      <Accordion buttonText="Geen verbinding met satelliet" panelText="Controleren of satelliet aan staat. Als deze in het kanaal staat een opgeladen moet worden, opladen met oplaadkabel en in handbediening terugzetten op de shuttle."/>
      <Accordion buttonText="Satelliet verkeer op machine" panelText="Fotocellen controleren. Eventueel product handmatig op juiste positie plaatsen."/>
      <div className="navButtons">
        <button onClick={() => navigate("/checklist")}> Back </button>
        <button onClick={() => navigate("/submitform")}> Can't find solution </button>
      </div>
   </div>
=======
    <div>
    <div className="background"></div>
    <div className="Titel"><h1>Veel voorkomende problemen</h1>
    <button className="Error_1">Product verkeerd op machine</button>
    <button className="Error_2">Satelliet verkeerd op machine</button>
    <button className="Error_3">Geen verbinding met satelliet</button>
    <button className="Error_4">Niet veilig om te bewegen</button>
    <button className="Back">Back</button>
    <button className="Still_Problems">Nogsteeds problemen?</button>
    </div>
    <div className="Solve"><h1>testen b</h1></div>
    
      
 </div>

>>>>>>> Stashed changes
  );
}

export default Problems;
