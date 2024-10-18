const jwt = require("jsonwebtoken");

module.exports = function(req, res, next){
    try{
        console.log("hello", req.headers);
        const token = req.headers.authorization.split(" ")[1];
        console.log("hello",token);
        
        const verifiedToken = jwt.verify(token, process.env.jwt_secret);
        console.log(verifiedToken);
        req.body.userId = verifiedToken.userId;
        next();
    }catch(error){
        console.log(error)
        res.status(401).send({ "success":false, "message": "token invalid" });
    }
}