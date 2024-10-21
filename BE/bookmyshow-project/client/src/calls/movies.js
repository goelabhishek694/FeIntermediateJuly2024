const {axiosInstance} = require("./index");

//add a movie
export const addMovie = async (value) => {
    try{
        const response = await axiosInstance.post("api/movie", value);
        return response.data;
    }catch(err){
        console.log(err);
    }
}

//register new movie
export const getAllMovies = async () => {
    try{
        const response = await axiosInstance.get("api/movie");
        return response.data;
    }catch(err){
        console.log(err);
    }
}

//update a movie
export const updateMovie = async (value) => {
    try{
        const response = await axiosInstance.put("api/movie", value);
        return response.data;
    }catch(err){
        console.log(err);
    }
}

//delete a movie
export const deleteMovie = async (value) => {
    try{
        const response = await axiosInstance.delete("api/movie", value);
        return response.data;
    }catch(err){
        console.log(err);
    }
}
