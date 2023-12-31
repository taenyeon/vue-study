import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
    timeout: 5000,
});