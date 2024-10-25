const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
    name:{
        type:String,
        required:  true
    },
    date:{
        type: Date,
        required: true
    },
    time:{
        type:String,
        require: true
    },
    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "movies",
        require: true
    },
    ticketPrice:{
        type:Number,
        require: true
    },
    totalSeats:{
        type:Number,
        require: true
    },
    bookedSeats:{
        type:Number,
        require: true
    },
    theatre:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "theatres",
        require: true
    }
}, {timestamps: true});

const Shows = mongoose.model("shows",showSchema);

module.exports = Shows