import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const createSession = async (email, password) => {
    return await api.post('/login', {email, password });
};

export const createAccont = async (email, password) => {
    return await api.post('/users', {email, password });
};