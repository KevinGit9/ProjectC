import { useState } from 'react';
import axios from "../axios";


const Requests = (machineId: string) => {
    const [problems, setProblems] = useState<any>([]);

    getProblemsFromMachine: GetProblemsFromMachine("da00a43d-56ee-4ac9-9b44-cd830279dd57");
}

//Takes a machineId + problemType as input and returns a filtered list of common problems that the machine has.
export const GetProblemsFromMachine = async (machineId: string) => {
    const path = `/Problems/${machineId}`;
    let response = await axios.get(path)
    return(response.data);
};

export default Requests;