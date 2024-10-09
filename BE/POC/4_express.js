// import the exporess module
const express = require("express");

//create an express application
const app = express();

//middleware to parse json request bodies 
app.use(express.json())

//custom middleware function
const loggerMiddleware = (req, res, next) => {
    console.log("inside logger middleware");
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next() // call the next middleware in chain 
}

app.use(loggerMiddleware);

//define a route 
app.get("/about",(req, res) => {
    console.log(req.headers);
    if(req.headers.device == "MacOS") res.send("Hello Mac User")
    res.send("Hello Express");
});

app.get("/home", (req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.send("This is Home Page")
})

app.use((req,res,next)=>{
    console.log("inside tranformation middleware");
    // sanity ,aythorization, tranformation 
    req.body.fullName = req.body.firstName + req.body.lastName;
    next();
})
app.post("/submit", (req,res) => {
    //retrieve the data that has been sent by client 
    //process data 
    //store that data in db 
    console.log(req.body);
    // console.log(req);
    
    res.send("Data saved successfully"); 
})

let users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' }
  ];
  
app.delete(`/users/:id`, (req,res) =>{
    const userId = parseInt(req.params.id);
    console.log(userId);
    console.log(typeof userId);
    //find the user by id
    const userIdx = users.findIndex((user) => user.id == userId);
    console.log("userIdx", userIdx);
    if (userIdx === -1) {
        return res.status(400).json({ message: 'User not found' });
    }
    users.splice(userIdx,1);
    console.log(users);
    
    res.json({message:"user deleted"})
})

// query paramaters
sort=price_asc

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
    
})