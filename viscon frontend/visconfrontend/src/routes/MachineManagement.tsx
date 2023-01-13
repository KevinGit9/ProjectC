import './MachineManagement.css'
import AdminTools from '../components/AdminTools'
import { getFullName } from '../services/LocalStorageManager';




function MachineManagement(props) {
    const currentAdmin = getFullName();

    return (
    <div>
        <AdminTools 
        svg = "../icons/precision_manufacturing_black_24dp.svg"
        text = "Machine Management"
        placeholder = "Search for machine..."
        />
        
    </div>
    );
}

export default MachineManagement;