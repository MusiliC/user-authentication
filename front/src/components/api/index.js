import axios from "axios";

const url = "http://localhost:5000/users";

export const addUser = (user) => axios.post(url, user);

export const logUser = (user) => axios.post(`${url}/login`, user)
