import axios from "axios";

export const api = axios.create({
    baseURL: "https://food-api-2-0v7f.onrender.com"
});