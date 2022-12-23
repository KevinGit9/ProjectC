import axios from "../axios";
import { getUserID } from './LocalStorageManager';


export const GetMyMachines = async () => {
    let userId = getUserID();
    const path = `/CompanyMachine/${userId}`;
    let response = await axios.get(path)
    console.log(response.data);
    return(response.data);
};