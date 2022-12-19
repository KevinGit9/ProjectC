import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5083",
});

export default instance;