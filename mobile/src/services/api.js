import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.89.159:3333',
});

export default api;