import axios from "axios";

const api = axios.create({
    baseURL: 'http://138.168.0.6:3333',
});

export { api };