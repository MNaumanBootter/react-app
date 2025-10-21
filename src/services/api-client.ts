import axios, { CanceledError, AxiosResponse } from "axios";

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export { CanceledError, type AxiosResponse as ApiClientResponse }
