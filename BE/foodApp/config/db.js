//connect to our db 
const mongoose = require("mongoose");
const {MONGODB_PASS} = require("../secret");
const connectDB = async () => {
    try{
        await mongoose.connect(`mongodb+srv://goelabhishek694:${MONGODB_PASS}@cluster0.ulf2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("db connected");
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB