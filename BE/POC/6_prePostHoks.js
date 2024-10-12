const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://goelabhishek694:iSsW5Im8uqr5zt7D@cluster0.ulf2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(dbUrl)
.then(()=>{
    console.log("connected to db");
})
.catch(err=>console.log(err))


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type:Date,
    },
    updatedAt: Date,
});

userSchema.pre("save", function(next){
    console.log("in pre hook");
    const now = new Date();
    this.updatedAt = now;
    if(!this.createdAt){
        this.createdAt = now ;
    }
    next();
})

userSchema.post("save", function(doc, next){
    console.log(`User ${doc.name} has been saved`);
    next();
})

const userModel = mongoose.model("user", userSchema);

const newUser = new userModel({name: "Shobhit", email:"shobhit_rocks99@gmail.com"});
newUser.save()
.then(()=>{
        console.log("user saved successfully");
        //close the connection
        mongoose.connection.close();
    })
.catch((err)=>{
    console.log(err);
})


