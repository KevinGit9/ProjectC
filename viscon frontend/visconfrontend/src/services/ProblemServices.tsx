import { useState } from 'react';
import axios from "../axios";

//Takes a machineId + problemType as input and returns a filtered list of common problems that the machine has.
export const GetProblemsFromMachine = async (machineId: string) => {
    const path = `/Problems/${machineId}`;
    let response = await axios.get(path)
    console.log(response.data);
    return(response.data);
};