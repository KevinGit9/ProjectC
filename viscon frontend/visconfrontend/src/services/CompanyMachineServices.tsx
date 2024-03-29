import axios from "../axios";
import { getUserId } from "./LocalStorageManager";

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
    //console.log(response.data);
    return(response.data);
}

export const GetAllMachines = async () => {
    const path = `/CompanyMachine`;
    let response = await axios.get(path)
    console.log(response.data);
    return(response.data);
}

export const DeleteCompanyMachine = async (companyMachineId: string) => {
    const path = `/CompanyMachine/${companyMachineId}`;
    let response = await axios.delete(path);
    console.log(response.data);
    return(response.data);
}