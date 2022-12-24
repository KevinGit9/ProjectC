import axios from "../axios";

//Function that takes a string as parameter and creates a Machine using that string as it's name.
export const CreateMachine = async (name: string) => {
    return await axios.post(`/Machine`, {
        name: name,
    })
    .then(response => {
        //If the request was a BadRequest, display an error message.
        if (response.status === 400) return ("Machine already exists.");
        else return response;
    })
}

//Gets the Machine type of the Company Machine.
export const GetMachineFromCompanyMachine = async (machineId: string | null) => {
    const path = `/Machine/${machineId}`;
    let response = await axios.get(path);
    console.log(response.data);
    return(response.data);
}