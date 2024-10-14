const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type:String,
        enum: ["admin", "user", "partner"],
        required:true,
        default: "user"
    }
},{timestamps: true})

module.exports = mongoose.model("user",userSchema)