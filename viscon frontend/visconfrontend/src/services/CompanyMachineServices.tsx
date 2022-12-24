import axios from "../axios";
import { getUserID } from "./LocalStorageManager";

//Gets all the machines of the Company of the current user that's logged in.
export const GetMyMachines = async () => {
    let userId = getUserID();
    const path = `/CompanyMachine/${userId}`;
    let response = await axios.get(path);
    console.log(response.data);
    return(response.data);
};