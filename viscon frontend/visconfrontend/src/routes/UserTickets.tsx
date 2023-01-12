import './MyTickets.css';
import React, { useState } from 'react';

function MyTickets() {
  const [showModal1, setShowModal1] = useState(false);
  const [ticketText1, setTicketText1] = useState('');
  const [showModal2, setShowModal2] = useState(false);
  const [ticketText2, setTicketText2] = useState('');
  const [showModal3, setShowModal3] = useState(false);
  const [ticketText3, setTicketText3] = useState('');
  const [showModal4, setShowModal4] = useState(false);
  const [ticketText4, setTicketText4] = useState('');
  const [showModal5, setShowModal5] = useState(false);
  const [ticketText5, setTicketText5] = useState('');
  const [showModal6, setShowModal6] = useState(false);
  const [ticketText6, setTicketText6] = useState('');
  const [showModal7, setShowModal7] = useState(false);
  const [ticketText7, setTicketText7] = useState('');
  const [showModal8, setShowModal8] = useState(false);
  const [ticketText8, setTicketText8] = useState('');

  const handleModalOpen1 = () => {
    setShowModal1(true);
    // setTicketText1(`--Ticket 1--

    // -Please describe the behaviour you're expecting:







    
    // -Please describe the behaviour you're seeing:








    // -Please enter any additional information:
    // `);
  };

  const handleModalClose1 = () => {
    setShowModal1(false);
  };

  const handleTicketTextChange1 = (event) => {
    setTicketText1(event.target.value);
  };

  const handleSaveButtonClick1 = () => {
    // Save the ticketText1 here, using some method of your choice
    setShowModal1(false);
  };

  const handleModalOpen2 = () => {
    setShowModal2(true);
    // setTicketText2(`--Ticket 2--

    // -Please describe the behaviour you're expecting:







    
    // -Please describe the behaviour you're seeing:








    // -Please enter any additional information:
    // `);
  };

  const handleModalClose2 = () => {
    setShowModal2(false);
  };

  const handleTicketTextChange2 = (event) => {
    setTicketText2(event.target.value);
  };

  const handleSaveButtonClick2 = () => {
    setShowModal2(false);
  };

  const handleModalOpen3 = () => {
    setShowModal3(true);
    setTicketText3(`--Ticket 3--

    -Please describe the behaviour you're expecting:






    
    -Please describe the behaviour you're seeing:







    -Please enter any additional information:
    `);
  };

  const handleModalClose3 = () => {
    setShowModal3(false);
    
  };

  const handleTicketTextChange3 = (event) => {
    setTicketText3(event.target.value);
  };

  const handleSaveButtonClick3 = () => {
    setShowModal3(false);
  };

  const handleModalOpen4 = () => {
    setShowModal4(true);
    setTicketText4(`--Ticket 4--

    -Please describe the behaviour you're expecting:






    
    -Please describe the behaviour you're seeing:




    


    -Please enter any additional information:
    `);
  };

  const handleModalClose4 = () => {
    setShowModal4(false);
  };

  const handleTicketTextChange4 = (event) => {
    setTicketText4(event.target.value);
  };

  const handleSaveButtonClick4 = () => {
    setShowModal4(false);
  };

  const handleModalOpen5 = () => {
    setShowModal5(true);
    setTicketText5(`--Ticket 5--

    -Please describe the behaviour you're expecting:







    -Please describe the behaviour you're seeing:







    -Please enter any additional information:
    `);
    
  };

  const handleModalClose5 = () => {
    setShowModal5(false);
  };

  const handleModalOpen6 = () => {
    setShowModal6(true);
    setTicketText6(`--Ticket 6--

    -Please describe the behaviour you're expecting:






    
    -Please describe the behaviour you're seeing:




    


    -Please enter any additional information:
    `);
  };

  const handleModalClose6 = () => {
    setShowModal6(false);
  };

  const handleModalOpen7 = () => {
    setShowModal7(true);
    setTicketText7(`--Ticket 7--

    -Please describe the behaviour you're expecting:






    
    -Please describe the behaviour you're seeing:







    -Please enter any additional information:
    `);
  };

  const handleModalClose7 = () => {
    setShowModal7(false);
  };

  const handleModalOpen8 = () => {
    setShowModal8(true);
    setTicketText8(`--Ticket 8--

    -Please describe the behaviour you're expecting:





    
    
    -Please describe the behaviour you're seeing:







    -Please enter any additional information:
    `);
  };

  const handleModalClose8 = () => {
    setShowModal8(false);
  };

  return (
    <><div className="Current-Cases"><h1>Current Cases</h1>
    </div>
    <div className="My-Tickets"><h1>My Tickets</h1></div>
    <div className="Finished-Cases"><h1>Finished Cases</h1></div>
    <div>
          <button id="t1" className="Ticket-1" onClick={handleModalOpen1}>
              Ticket 1
          </button>
          {showModal1 && (
              <div className="modal">
                  <textarea value={ticketText1} onChange={handleTicketTextChange1} />
                  <button className="save-button" onClick={handleSaveButtonClick1}>Save</button>
                  <button className="close-button" onClick={handleModalClose1}>Close</button>
              </div>
          )} <button id="t2" className="Ticket-2" onClick={handleModalOpen2}>
              Ticket 2
          </button>
          {showModal2 && (
              <div className="modal">
                  <textarea value={ticketText2} onChange={handleTicketTextChange2} />
                  <button className="save-button" onClick={handleSaveButtonClick2}>Save</button>
                  <button className="close-button" onClick={handleModalClose2}>Close</button>
              </div>
          )}
          <button id="t3" className="Ticket-3" onClick={handleModalOpen3}>
              Ticket 3
          </button>
          {showModal3 && (
              <div className="modal">
                  <textarea value={ticketText3} onChange={handleTicketTextChange3} />
                  <button className="save-button" onClick={handleSaveButtonClick3}>Save</button>
                  <button className="close-button" onClick={handleModalClose3}>Close</button>
              </div>
          )}
          <button id="t4" className="Ticket-4" onClick={handleModalOpen4}>
              Ticket 4
          </button>
          {showModal4 && (
              <div className="modal">
                  <textarea value={ticketText4} onChange={handleTicketTextChange4} />
                  <button className="save-button" onClick={handleSaveButtonClick4}>Save</button>
                  <button className="close-button" onClick={handleModalClose4}>Close</button>
              </div>
          )}
          <button id="t5" className="Ticket-5" onClick={handleModalOpen5}>
              Ticket 5
          </button>
          {showModal5 && (
              <div className="modal">
                  <textarea value={ticketText5} readOnly />
                  <button className="close-button" onClick={handleModalClose5}>Close</button>
              </div>
          )}
          <button id="t6" className="Ticket-6" onClick={handleModalOpen6}>
              Ticket 6
          </button>
          {showModal6 && (
              <div className="modal">
                  <textarea value={ticketText6} readOnly />
                  <button className="close-button" onClick={handleModalClose6}>Close</button>
              </div>
          )}
          <button id="t7" className="Ticket-7" onClick={handleModalOpen7}>
              Ticket 7
          </button>
          {showModal7 && (
              <div className="modal">
                  <textarea value={ticketText7} readOnly />
                  <button className="close-button" onClick={handleModalClose7}>Close</button>
              </div>
          )}
          <button id="t8" className="Ticket-8" onClick={handleModalOpen8}>
              Ticket 8
          </button>
          {showModal8 && (
              <div className="modal">
                  <textarea value={ticketText8} readOnly />
                  <button className="close-button" onClick={handleModalClose8}>Close</button>
              </div>
          )}
      </div></>
  );
}

export default MyTickets;

        

    