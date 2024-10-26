const router = require("express").Router();
const Movie = require("../models/movieModel");

//add a movie
router.post("/", async(req, res) => {
    try{
        //perform some sanitzation
        const newMovie = new Movie(req.body);
        await newMovie.save();
        res.send({
            success: true,
            message: "new movie has been saved"
        })
    }
    catch(err){
        res.send({
            success:false,
            message: err.message
        })
    }
})

//get all movies
router.get("/", async(req, res) => {
    try{

        const allMovies = await Movie.find();
        res.send({
            success : true,
            message: "All movies have been fetched",
            data: allMovies
        });

    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
})

//get movie by id
router.get("/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const movie = await Movie.findById(id);
        res.send({
            success : true,
            message: "movie has been fetched",
            data: movie
        });

    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
})


//update a movie
router.put("/:movieId", async(req, res) => {
    try{

        const dataToBeUpdated = req.body;
        const {movieId} = req.params;
        //returnDocument:true
        const movie = await Movie.findByIdAndUpdate(movieId, dataToBeUpdated, {new: true});
        res.send({
            success: true,
            message: "Movie has been updated",
            data: movie
        })

    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
})

//delete a movie
router.delete("/:movieId", async(req, res) => {
    try{
        const { movieId } = req.params;
        console.log("nemo", movieId);
        
        await Movie.findByIdAndDelete(movieId);
        res.send({
            success: true,
            message: "movie has been deleted",
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
})

module.exports= router