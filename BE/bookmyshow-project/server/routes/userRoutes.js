const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const {emailHelper} = require("../utils/emailHelper");
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

router.get("/current", authMiddleware, async(req,res) => {
    const user = await User.findById(req.body.userId).select("-password");
    // const user = await User.findById(req.body.userId).select("-password").select("-email");
    console.log("in current route", user);
    res.send({
        success: true,
        message: "you are authorized to go to protected route",
        data: user
    })
})

//node library otp 
const otpGenerator = function (){
    return Math.floor(Math.random()*10000 +90000) ;
}

router.patch("/forgetpassword", async function(req, res) {
    try{
        // 1. ask for email 
        // 2. check if email is present 
        //     if email is not pesent -> send a response to the user user not found 
        // 3. if email is present -> create a basic otp -> sedn to email
        // 4. store that otp in user db 

        const {email} = req.body;
        if(!email){
            return res.status(401).json({
                status: "failure",
                message: "Please enter the email for forgot password"
            })
        }
        let user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                status: "failure",
                message: "user not found"
            })
        }
        const otp = otpGenerator();
        user.otp = otp;
        user.otpExpiry = Date.now() + 10*60*1000;
        await user.save();
        await emailHelper("otp.html", user.email, {name: user.name, otp})
        res.status(200).json({
            status: "success",
            message: "otp sent to your email"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({"message":"An error has occured, pls try gain later"})
    }
})

router.patch("/resetpassword", async function (req, res) {
    try{
        let {password, otp, email} = req.body;
        if(!password || !otp || !email){
            return res.status(401).json({
                status: "failure",
                message: "invalid request"
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                status: "failure",
                message: "user not found"
            })
        }
        //if otp is expired
        if(Date.now() > user.otpExpiry){
            return res.status(400).json({
                status: "failure",
                message: "user not found"
            })
        }
        if(user.otp != otp){
            return res.status(400).json({
                status: "failure",
                message: "invalid otp"
            })
        }
        user.password = password;
        user.otp = undefined;
        user.otpExpiry = undefined;
         await user.save();
         return res.status(200).json({
            status: "success",
            message: "password reset successfull"
         });
    }catch(err){
        res.status(500).json({
            message: err.message,
            status: "failure"
          })
    }
})
module.exports = router;
