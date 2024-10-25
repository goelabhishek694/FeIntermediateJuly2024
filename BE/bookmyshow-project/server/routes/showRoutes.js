const router = require("express").Router();

const Show = require("../models/showModel");

//add show
router.post("/", async (req, res) => {
    try{
        const newShow = new Show(req.body);
        await newShow.save();
        res.send({
            success: true,
            message: "New Show has been added"
        })
    }catch(err){
        res.send({
            status: false,
            message: err.message,
          });
      
    }
})

// delete show
router.delete("/:id", async (req, res) => {
    try{
        const {id} = req.params;
        await Show.findByIdAndDelete(id);
        res.send({
            success: true,
            message: "the show has been deleted"
        })
    }catch(err){
        res.send({
            status: false,
            message: err.message,
          });
      
    }
})

//update show
router.put("/", async (req, res) => {
    try{
        const data = req.body;
        const {id} = req.params;
        await Show.findByIdAndUpdate(id, data);
        res.send({
            success: true,
            message: "the show has been updated"
        })
    }catch(err){
        res.send({
            status: false,
            message: err.message,
          });
      
    }
})

//get all movies by theatre which has some shows
router.get("/theatre/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const shows = await Show.find({theatre: id}).populate("movie");
        res.send({
            success: true,
            message: "all shows fetched",
            data: shows
        })
    }catch(err){
        res.send({
            status: false,
            message: err.message,
          });
      
    }
})

//get all theatres by movie which has some shows
router.post("/theatres-by-movie", async(req, res) => {
    try{
        const {movie, date} = req.body;
        //first get all the shows of selected date 
        const shows = await Show.find({movie,date}).populate("theatre");
        //filter out unique theatre

        let uniqueTheatres = [{}];
        shows.forEach((shows) => {
            let isTheatre = uniqueTheatres.find((theatre) => theatre._id === shows.theatre._id);
            if(!isTheatre){
                let showsOfThisTheatre = shows.filter((showObj) => showObj.theatre._id == show.theatre._id)
            }
            uniqueTheatres.push({
                ...show.theatre._doc,
                shows: showsOfThisTheatre
            })
        });
        res.send({
            success: true,
            message: "all theatres fetched",
            data: uniqueTheatres
        })

    }catch(err){
        res.send({
            status: false,
            message: err.message,
          });
    }
});

router.get("/:id", async( req, res) => {
    try{
        const show = await Show.findById(req.params.id).populate("movie").populate("theatre");
        res.send({
            success: true,
            message: "show fetched",
            data: show
        })
    }catch(err){
        res.send({
            status: false,
            message: err.message,
        });
    }
})



