const express = require("express");
require("dotenv").config();
const dbConfig =  require("./config/dbconfig");
const app = express();
const userRoute = require("./routes/userRoutes");
const movieRoute = require("./routes/movieRoute");
const theatreRoute = require("./routes/theatreRoute");
const showRoutes = require("./routes/showRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);
app.use("/api/theatre", theatreRoute);
app.use("/api/shows", showRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(8082, () => {
    console.log("Server is running");
});

