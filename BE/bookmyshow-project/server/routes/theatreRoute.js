const router = require('express').Router();
const Theatre = require('../models/theatreModel');

router.post('/',  async (req, res) => {
    try{
        const newTheatre = new Theatre(req.body);
        await newTheatre.save();
        res.send({
            success: true,
            message: "New theatre has been added!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});

//get all theatres for admin route
router.get('/',  async (req, res) => {
    try{
        const allTheatres = await Theatre.find().populate("owner");
        res.send({
            success: true,
            message: "list of all theatres",
            data: allTheatres
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});

//get the thetre of a specific owner
router.get("/by-owner/:ownerId", async (req, res) => {
    try{
        const { ownerId } = req.params;
        const allTheatres = await Theatre.find({owner:ownerId});
        res.send({
            success: true,
            message: "list of all theatres by owner",
            data: allTheatres
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
})

// Update theatre
router.put('/',  async (req, res) => {
    try{
        const id = req.params?.theatreId;
        await Theatre.findByIdAndUpdate(id, req.body);
        // console.log(req.body.theatreId)
        res.send({
            success: true,
            message: "Theatre has been updated!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
})

// Delete theatre
router.delete('/', async (req, res) => {
    try{
        await Theatre.findByIdAndDelete(req.body.theatreId);
        res.send({
            success: true,
            message: "The theatre has been deleted!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});



module.exports = router;