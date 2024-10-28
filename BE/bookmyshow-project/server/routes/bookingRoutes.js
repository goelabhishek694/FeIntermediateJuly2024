const router = require("express").Router();
const stripe = require("stripe")(process.env.stripe_secret);
const authMiddleware = require("../middlewares/authMiddleware");
const Booking = require("../models/bookingModel");
const Shows = require("../models/showModel");

router.post("/make-payment", authMiddleware, async (req, res) => {
    try{
        const {token, amount} =req.body;
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "inr",
            customer: customer.id,
            payment_method_types: ['card'],
            receipt_email: token.email,
            description: "Token has been assigned to the movie!"
        });

        const transactionId = paymentIntent.id;

        res.send({
            success: true,
            message: "Payment Successful! Ticket(s) booked!",
            data: transactionId
        });

    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
})

router.post("/book-show", authMiddleware, async (req, res) => {
    try{
        const newBooking = new Booking(req.body);
        await newBooking.save();

        const show = await Shows.findById(req.body.show).populate("movie");
        const updatedBookSeats = [...show.bookedSeats, ...req.body.seats];
        await Shows.findById(req.body.show, {bookedSeats: updatedBookSeats});
        res.send({
            success: true,
            message: 'New Booking done!',
            data: newBooking
        });
    }catch(err){
        res.send({
            success: false,
            message: err.message
        });
    }
})

router.get("/all-bookings", async (req, res) => {
    try{
        const bookings = await Booking.find({user: req.body.userId}).populate("user").populate("shows");
        res.send({
            success: true,
            message: "Bookings fetched!",
            data: bookings
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
})

module.exports= router;