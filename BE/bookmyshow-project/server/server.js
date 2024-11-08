const express = require("express");
const rateLimit = require('express-rate-limit');
const helmet = require("helmet");
//package works by checking for key in objects that beign with $ or contains . = . these characters are used in mongodb queries , it canbe exploited for injection attacks. strips these characters from the input , effectively sanitizing the input 
const mongoSanitize = require("express-mongo-sanitize");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const dbConfig =  require("./config/dbconfig");
const app = express();
const userRoute = require("./routes/userRoutes");
const movieRoute = require("./routes/movieRoute");
const theatreRoute = require("./routes/theatreRoute");
const showRoutes = require("./routes/showRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use(cors());
app.use(express.static(path.join(__dirname, "..", "frontend",'dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

//rate limiter middleware
const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
});
app.use(helmet());
app.use(express.json());
app.use(mongoSanitize());
//apply rate limiter to all the api routes
app.use("/api/",apiLimiter);
// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'"],
//       scriptSrc: ["'self'", "example.com"], // Allow scripts from 'self' and example.com
//       styleSrc: ["'self'", "'unsafe-inline'"], // Allow inline styles (unsafe)
//       imgSrc: ["'self'", "data:", "example.com"], // Allow images from 'self', data URLs, and example.com
//       connectSrc: ["'self'", "api.example.com"], // Allow connections to 'self' and api.example.com
//       fontSrc: ["'self'", "fonts.gstatic.com"], // Allow fonts from 'self' and fonts.gstatic.com
//       objectSrc: ["'none'"], // Disallow object, embed, and applet elements
//       upgradeInsecureRequests: [], // Upgrade insecure requests to HTTPS
//     },
//   })
// );

app.use("/api/user",userRoute);
app.use("/api/movie", movieRoute);
app.use("/api/theatre", theatreRoute);
app.use("/api/shows", showRoutes);
app.use("/api/bookings", bookingRoutes);


app.listen(8082, () => {
    console.log("Server is running");
});


console.log(path.join(__dirname, "..", "frontend",'dist'));
