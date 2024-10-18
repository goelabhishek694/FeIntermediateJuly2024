const router = require("express").Router();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

router.post("/register", async (req,res) => {
    try{
        const userExists = await User.findOne({email: req.body.email});
        console.log(userExists);
        
        if(userExists){
            return res.status(400).json({
                success: false,
                message:"User already exists"
            })
        }

        const newUser = new User(req.body);
        await newUser.save();
        //send a verify email id link 
        //redirect to login page , automoatically login and redirect to home page 
        res.status(201).json({
            success: true, message: "registeration successful, pls login"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({"err":err.message})
    }
})

router.post("/login", async (req,res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        
        if(!user){
            return res.status(400).json({
                success: false,
                message:"User does not exists. Please register"
            })
        }
        
        if(req.body.password != user.password ){
            return res.status(401).json({
                success: false,
                message:"Invalid credentials"
            })
        }
        
        console.log(user);
        const token = jwt.sign({userId: user._id}, process.env.jwt_secret, {"expiresIn":"1d"});
        console.log(token);
        
        return res.status(200).json({
            success: true,
            message:"login successful",
            data: token
        })
    }catch(err){
        console.log(err);
        res.status(500).json({"message":"An error has occured, pls try gain later"})
    }
})

module.exports = router;