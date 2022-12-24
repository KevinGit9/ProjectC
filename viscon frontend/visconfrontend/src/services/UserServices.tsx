import axios from '../axios';
import { storeItem } from './LocalStorageManager';

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