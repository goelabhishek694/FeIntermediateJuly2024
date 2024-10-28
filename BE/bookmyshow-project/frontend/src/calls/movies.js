import {axiosInstance} from "./index";

//add a movie
export const addMovie = async (value) => {
    try{
        const response = await axiosInstance.post("api/movie", value);
        return response.data;
    }catch(err){
        console.log(err);
    }
}

//get all movies
export const getAllMovies = async () => {
    try{
        const response = await axiosInstance.get("api/movie");
        return response.data;
    }catch(err){
        console.log(err);
    }
}

// get movie by id
export const getMovieById = async (id) => {
    try{
        const response = await axiosInstance.get(`api/movie/${id}`);
        return response.data;
    }catch(err){
        console.log(err);
    }
}


//update a movie
export const updateMovie = async (value,movieId) => {
    try{
        const response = await axiosInstance.put(`api/movie/${movieId}`, value);
        return response.data;
    }catch(err){
        console.log(err);
    }
}

//delete a movie
export const deleteMovie = async (value) => {
    try{
        const {movieId} = value;
        const response = await axiosInstance.delete(`api/movie/${movieId}`, value);
        return response.data;
    }catch(err){
        console.log(err);
    }
}
