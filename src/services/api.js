import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-food-2rie.onrender.com"
});