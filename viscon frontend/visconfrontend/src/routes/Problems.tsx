import React from 'react';
import Accordion from '../components/Accordion';
import { useNavigate } from 'react-router-dom';
import './Problems.css';

function Problems() {
  const navigate = useNavigate();

  return (
    <div className='Problems'>
      <h1> Common Problems </h1>
      <Accordion buttonText="Product verkeerd op machine" panelText="Fotocellen controleren. Eventueel product handmatig op juiste positie plaatsen."></Accordion>
      <Accordion buttonText="Laden/lossen duurt te lang" panelText="Waarschijnlijk staat de pallet klem. Zorg dat deze weer goed staat en reset de baan."></Accordion>
      <Accordion buttonText="Niet veilig om te bewegen" panelText="De pallet steekt uit op de shuttle of een andere pallet op een baan aan het shuttle pad. Draai de pallet handmatig op de juiste positie."></Accordion>
      <Accordion buttonText="Geen verbinding met satelliet" panelText="Controleren of satelliet aan staat. Als deze in het kanaal staat een opgeladen moet worden, opladen met oplaadkabel en in handbediening terugzetten op de shuttle."></Accordion>
      <Accordion buttonText="Satelliet verkeer op machine" panelText="Fotocellen controleren. Eventueel product handmatig op juiste positie plaatsen."></Accordion>
      <div className="navButtons">
        <button className="backButton" onClick={() => navigate("/checklist")}> Back </button>
        <button className="noSolutionButton" onClick={() => navigate("/submitform")}> Can't find solution </button>
      </div>
   </div>
  );
}
export default Problems;
