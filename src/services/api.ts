import axios from "axios"

import { parseCookies } from "nookies"
import { config } from "process";

const {'nextauth.token' : token} = parseCookies();

export const api = axios.create({
    //rota do back
    baseURL: "http://localhost:3000"


});

api.interceptors.request.use(config => {
    console.log(config);

    return config;
})

if(token){
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
}