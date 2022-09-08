import axios from "axios";

export const JpAxios = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{
        Authorization: 'adsaffgdfhjykuluioiupupuiopiopipiopiasdqwe',
        "Content-Type": "application/json"
    },
    timeout: 5000,
    timeoutErrorMessage: ''
});