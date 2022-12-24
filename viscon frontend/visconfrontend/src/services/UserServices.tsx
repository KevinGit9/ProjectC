import { getRoles } from '@testing-library/react';
import axios from '../axios';
import { storeItem } from './LocalStorageManager';

//Function that takes a string as parameter and creates a Company using that string as it's name.
export const RegisterUser = async (firstName: string, lastName: string, email: string, password: string, companyName: string, role: string) => {
    return await axios.post(`/Auth/register`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        companyName: companyName,
        role: role,
    })
    .then(response => {
        //If the request was a BadRequest, display an error message.
        if (response.status === 400) return ("Company already exists.");
        else return response;
    })
}

export const Login = async (email: string, password: string) => {
    return await axios.post(`/Auth/login`, {
        email: email,
        password: password,
    })
    .then(response => {
        //If the request was a BadRequest, display an error message.
        if (response.status === 400) return ("Email or Password was wrong.");
        else storeItem(response.data, "currentUser");
    })
}
