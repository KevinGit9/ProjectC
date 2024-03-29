import axios from "../axios";

//Function that takes a string as parameter and creates a Company using that string as it's name.
export const CreateCompany = async (name: string) => {
    return await axios.post(`/Company`, {
        name: name,
    })
    .then(response => {
        //If the request was a BadRequest, display an error message.
        if (response.status === 400) return ("Company already exists.");
        else return response;
    })
}

export const GetCompanies = async () => {
    let response = await axios.get( `/Company/`);
    console.log(response.data);
    return(response.data);
}

export const GetCompanyFromId = async (companyId: string) => {
    let response = await axios.get( `/Company/${companyId}`);
    console.log(response.data);
    return(response.data);
}

export const DeleteCompany = async (companyId: string) => {
    const path = `/Company/${companyId}`;
    let response = await axios.delete(path);
    console.log(response.data);
    return(response.data);
}