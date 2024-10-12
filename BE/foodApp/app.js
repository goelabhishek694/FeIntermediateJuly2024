const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

connectDB();

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());

//routes
app.use("/api/products", productRoutes)

//default route
app.get("/", (req,res)=>{
    res.send("Welcome to our shop");
})

const PORT = process.env.PORT || 3000 

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
