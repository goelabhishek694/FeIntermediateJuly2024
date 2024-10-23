import { axiosInstance } from "./index";

export const addTheatre = async (payload) => {
    try{
        const response = await axiosInstance.post('/api/theatre/', payload);
        return response.data;
    }catch(err){
        return err.response;
    }
}

// Get all theatres for the Admin route
export const getAllTheatresForAdmin = async () => {
    try{
        const response = await axiosInstance.get('/api/theatre/');
        return response.data;
    }catch(err){
        return err.response;
    }
}

// Get theatres of a specific owner
export const getAllTheatres = async (payload) => {
    try{
        const {ownerId} = payload;
        const response = await axiosInstance.get(`/api/theatre/by-owner/${ownerId}`);
        return response.data;
    }catch(err){
        return err.response;
    }
}

// Update Theatre
export const updateTheatre = async (payload) => {
    try{
        const {theatreId} = payload; 
        const response = await axiosInstance.put(`/api/theatre/${theatreId}`, payload);
        return response.data;
    }catch(err){
        return err.resposne;
    }
}

// Delete Theatre
export const deleteTheatre = async (payload) => {
    try{
        const response = await axiosInstance.delete('/api/theatre/', payload);
        return response.data;        
    }catch(err){
        return err.response;
    }
}

