import axios from "../axios";

export const CreateProblem = async (description: string, type: string, machineName: string, solutions: string) => {
    return await axios.post(`/Problems`, {
        description: description,
        type: type,
        machineName: machineName,
        solutions: solutions,
    })
    .then(response => {
        //If the request was a BadRequest, display an error message.
        if (response.status === 400) return ("Machine already exists.");
        else return response;
    })
}

export const CreateProblemMoreSolutions = async (description: string, type: string, machineName: string, solutions: string[]) => {
    return await axios.post(`/Problems`, {
        description: description,
        type: type,
        machineName: machineName,
        solutions: [
            solutions[0],
            solutions[1],
        ]
    })
    .then(response => {
        //If the request was a BadRequest, display an error message.
        if (response.status === 400) return ("Machine already exists.");
        else return response;
    })
}

//Takes a machineId + problemType as input and returns a filtered list of common problems that the machine has.
export const GetProblemsFromMachine = async (machineId: string) => {
    const path = `/Problems/${machineId}`;
    let response = await axios.get(path)
    console.log(response.data);
    return(response.data);
};