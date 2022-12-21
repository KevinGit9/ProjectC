import { useState } from 'react';
import axios from "../axios";
import { getUserID } from './TicketServices';


export const GetMyMachines = async () => {
    let userId = getUserID();
    const path = `/CompanyMachine/${userId}`;
    let response = await axios.get(path)
    console.log(response.data);
    return(response.data);
};