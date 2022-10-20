import React from 'react';
import './Problems.css';

function Problems() {
  return (
    <div className='Problems'>
        <button className="Knop1">Product verkeerd op machine</button>
        <button className="Knop2">Satelliet verkeerd op machine</button>
        <button className="Knop3">Geen verbinding met satelliet</button>
        <button className="Knop4">Niet veilig om te bewegen</button>
        <button className="Back">Back</button>
        <button className="Probleem">Nogsteeds problemen?</button>
        {/* <img src="viscon_group_logo.pgn" width="300" height="300"></img> */}
        
        
        <div className="box-titel">
            <h1>Veel voorkomende problemen</h1>
        </div>       
        <div className="Card"></div>
        <div className="box-oplossingen">
            <h1>- Oplossing 1:</h1>
            <h1>Fotocellen controleren. Eventueel product handmatig op juiste positie plaatsen</h1>
            <h1>-----------------------------------------------------</h1>
            <h1>- Oplossing 2:</h1>
            <h1>Fotocellen controleren. Eventueel product handmatig op juiste positie plaatsen</h1>
            <h1>-----------------------------------------------------</h1>
            <h1>- Oplossing 3:</h1>
            <h1>Controleren of satelliet aan staat. Als deze in het kanaal staat een opgeladen moet worden, opladen met oplaadkabel en in handbediening terugzetten op de shuttle </h1>
            <h1>-----------------------------------------------------</h1>
            <h1>- Oplossing 4:</h1>
            <h1>De pallet steekt uit op de shuttle of een andere pallet op een baan aan het shuttle pad. Draai de pallet handmatig op de juiste positie </h1>
        </div>
   </div>
  );

}
export default Problems;
