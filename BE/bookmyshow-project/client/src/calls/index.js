import axios from 'axios';

//used to create new axios instance with a custom configuration
export const axiosInstance = axios.create({
    headers: {
        'Content-Type' : 'application/json',
        //bearer tokens are typically susd in OAuth2.0 protocols for accessing resourcs on behalf of user
        "authorization" : `Bearer ${localStorage.getItem("token")}`
    }
})
