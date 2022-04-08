import axios from "axios";


export const api = axios.create({
    baseURL: "http://localhost:3333/api/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Access-Control-Allow-Origin": "*",
    }
});