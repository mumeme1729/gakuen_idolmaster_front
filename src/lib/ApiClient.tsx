import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// const apiClient = axios.create({
//     baseURL: "https://www.toring-together.com/"
// });
const apiClient = axios.create({
    baseURL: "http://localhost:8880/"
});

export default apiClient;