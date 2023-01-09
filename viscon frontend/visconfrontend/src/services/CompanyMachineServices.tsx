import axios from "../axios";
import { getUserId } from "./LocalStorageManager";
/*
//Function that takes a string as parameter and creates a Company using that string as it's name.
export const CreateCompanyMachine = async (machineName: string, machineId: string, companyId: string) => {
    return await axios.post(`/CompanyMachine`, {
        machineName: machineName,
        machineId: machineId,
        companyId: companyId,
    })
    .then(response => {
        return response;
    })
}
*/
export const CreateCompanyMachine = async (name: string, machineName: string, companyName: string) => {
    return await axios.post(`/CompanyMachine`, {
        name: name,
        machineName: machineName,
        companyName: companyName,
    })
    .then(response => {
        return response;
    })
}

//Gets all the machines of the Company of the current user that's logged in.
export const GetMyMachines = async () => {
    let userId = getUserId();
    const path = `/CompanyMachine/${userId}`;
    let response = await axios.get(path);
    console.log(response.data);
    return(response.data);
};

//Takes an companyMachineId and gets the info of the corresponding Company Machine.
export const GetCompanyMachineInfo = async (companyMachineId: string) => {
    const path = `/CompanyMachine/companyMachineInfo${companyMachineId}`;
    let response = await axios.get(path)
    console.log(response.data);
    return(response.data);
}