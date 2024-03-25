import axios from "axios";

const token = window.localStorage.getItem('sign-in-token');

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {Authorization : `Bearer ${token}`}
});

export default instance;