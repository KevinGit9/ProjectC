import './Home.css';
import { getUserRole } from '../services/LocalStorageManager';
import Admin from './admin';
import UserMenu from './UserMenu';

function Home() {
  if (getUserRole() === "admin") return(<Admin/>);
  else return(<UserMenu/>);
}

export default Home;