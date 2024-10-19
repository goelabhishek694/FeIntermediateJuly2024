const router = require("express").Router();
const Movie = require("../models/movideModel");

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

module.exports= router