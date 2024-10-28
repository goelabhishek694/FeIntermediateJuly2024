import { axiosInstance } from "./index";

export const addShow = async (payload) => {
    try{
        const response = await axiosInstance.post('/api/shows/', payload);
        return response.data;
    }catch(err){
        return err.response;
    }
}

// get all the shows by theatre
export const getShowsByTheatre = async () => {
    try{
        //get id and add in route below as well 
        const response = await axiosInstance.get('/api/theatre/');
        return response.data;
    }catch(err){
        return err.response;
    }
}

// get all theatres by movie
export const getAllTheatresByMovie = async (payload) => {
    try{
        const response = await axiosInstance.get(`/theatres-by-movie`, payload);
        return response.data;
    }catch(err){
        return err.response;
    }
}

//get show by id
export const getShowById = async (id) => {
    try{
        const response = await axiosInstance.get(`/${id}`);
        return response.data;
    }catch(err){
        return err.response;
    }
}


// Update Theatre
export const updateShow = async (payload) => {
    try{
        const {theatreId} = payload; 
        const response = await axiosInstance.put(`/api/theatre/${theatreId}`, payload);
        return response.data;
    }catch(err){
        return err.resposne;
    }
}

// Delete Show
export const deleteShow = async (payload) => {
    try{
        const {id} = payload;
        const response = await axiosInstance.delete(`/api/theatre/${id}`, payload);
        return response.data;        
    }catch(err){
        return err.response;
    }
}

