const express = require("express");
require("dotenv").config();
const dbConfig =  require("./config/dbconfig");
const app = express();
const userRoute = require("./routes/userRoutes");

app.use(express.json());

app.use("/api/user", userRoute);

app.listen(8082, () => {
    console.log("Server is running");
});

