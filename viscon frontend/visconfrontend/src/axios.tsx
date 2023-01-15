import axios from "axios";

var jwtToken = localStorage.getItem("jwtToken");

const instance = axios.create({
    baseURL: "http://localhost:5083/api",
    headers: {
        Authorization: `bearer ${jwtToken}`
    }
});

export default instance;