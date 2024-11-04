import {axiosInstance} from "./index";

//register new user

export const RegisterUser = async (value) => {
    try{
        const response = await axiosInstance.post("api/user/register", value);
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const LoginUser = async (value) => {
    try{
        const response = await axiosInstance.post("api/user/login", value);
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const GetCurrentUser = async () => {
    try{
        const response = await axiosInstance.get("api/user/current");
        console.log("api response", response.data)
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const ForgetPassword = async (value) => {
    try{
        const response = await axiosInstance.patch("/api/user/forgetpassword", value);
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const ResetPassword = async (value) => {
    try{
        const response = await axiosInstance.patch("/api/user/resetpassword", value);
        return response.data;
    }catch(err){
        console.log(err);
    }
}