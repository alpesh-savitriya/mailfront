import axios from 'axios';

export const HTTP = axios.create({
    // baseURL: "http://mailpackagetest.com/api",
    baseURL: process.env.ROOT_API,
    headers: {
        "Content-Type": "application/json"
    }
});