import axios from 'axios';

//used to create new axios instance with a custom configuration
export const axiosInstance = axios.create({
    headers: {
        'Content-Type' : 'application/json'
    }
})
