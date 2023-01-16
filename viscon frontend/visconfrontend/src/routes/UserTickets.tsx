import './UserTickets.css';
import UserTicketBox from '../components/UserTicketBox';
import { GetClosedUserTickets, GetOpenUserTickets } from '../services/TicketServices';
import { useNavigate } from 'react-router-dom';

function UserTickets() {
  const navigate = useNavigate();
  
  return(
    <div className="userTickets">
      <h1> My Tickets </h1>
      <div className="userTicketsBoxes">
        <UserTicketBox name="Open Tickets" api={GetOpenUserTickets()}/>
        <UserTicketBox name="Closed Tickets" api={GetClosedUserTickets()}/>
      </div>
      <button onClick={() => navigate("/machines")}> Submit a new Ticket </button>
    </div>
  );
}

export default UserTickets;

        

    