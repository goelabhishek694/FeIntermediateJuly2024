import { Button, Card, Col, Row, message } from "antd";
import { useEffect, useState } from "react";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import { getAllBookings } from "../../calls/bookings";
import { useDispatch } from "react-redux";
import moment from 'moment';
import { Link } from "react-router-dom";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const dispatch = useDispatch(); 

    const getData = async () => {
        try{
            dispatch(showLoading());
            const response = await getAllBookings();
            if(response.success){
                setBookings(response.data);
                 console.log(response.data);
            }else{
                message.error(response.message);
            }

            dispatch(hideLoading());
        }catch(err){
            message.error(err.message);
            dispatch(hideLoading());
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return(
        <>
            {bookings && <Row gutter={24}>
                { bookings.map(booking => {
                    return <Col key={booking._id} xs={{span: 24}} lg={{span: 12}}>
                    <Card className="mb-3">
                        <div className="d-flex flex-column-mob">                
                            <div className="flex-shrink-0"><img src={booking.show.movie.poster} width={100} alt="Movie Poster"/></div>
                            <div className="show-details flex-1">
                                <h3 className="mt-0 mb-0">{booking.show.movie.title}</h3>
                                <p>Theatre: <b>{booking.show.theatre.name}</b></p>
                                <p>Seats: <b>{booking.seats.join(", ")}</b></p>
                                <p>Date & Time: <b>{moment(booking.show.date).format("MMM Do YYYY")} {moment(booking.show.time, "HH:mm").format("hh:mm A")}</b>  </p>
                                <p>Amount: <b>Rs.{booking.seats.length * booking.show.ticketPrice} </b></p>
                                <p>Booking ID: <b>{booking.transactionId} </b></p>
                            </div>
                        </div>
                    </Card>                
                </Col>
                }) }    
                
            </Row>}

           {!bookings.length && <div className="text-center pt-3">
                    <h1>You've not booked any show yet!</h1>
                    <Link to="/"><Button type="primary">Start Booking</Button></Link>
                </div>}
            
        </>
    )
}
export default Bookings;
Sure, let's break down the provided React component Bookings:

State and Hooks
const [bookings, setBookings] = useState([]);
const dispatch = useDispatch();
bookings: State variable initialized using useState hook to store an array of booking data fetched from the server.
dispatch: Retrieves the dispatch function from React Redux useDispatch hook to dispatch actions.
getData Function
const getData = async () => {
    try {
        dispatch(showLoading()); // Dispatches action to show loading spinner

        const response = await getAllBookings(); // Calls API to fetch all bookings
        if (response.success) {
            setBookings(response.data); // Updates bookings state with fetched data
            console.log(response.data); // Logs fetched data to console
        } else {
            message.error(response.message); // Shows error message if API request fails
        }

        dispatch(hideLoading()); // Dispatches action to hide loading spinner
    } catch (err) {
        message.error(err.message); // Shows error message if there's an exception
        dispatch(hideLoading()); // Dispatches action to hide loading spinner
    }
};
getData: Asynchronous function to fetch booking data from the server using getAllBookings function.
Shows and hides loading spinner using showLoading and hideLoading Redux actions respectively.
Updates bookings state with fetched data if successful; otherwise, shows error messages.
useEffect Hook
useEffect(() => {
    getData(); // Fetches data when the component mounts
}, []);
useEffect: Executes getData function when the component mounts ([] as dependencies means it runs once).
Render
return (
    <>
        {bookings && <Row gutter={24}> {/* Renders bookings if there are any */}
            {bookings.map(booking => (
                <Col key={booking._id} xs={{ span: 24 }} lg={{ span: 12 }}>
                    <Card className="mb-3">
                        <div className="d-flex flex-column-mob">
                            <div className="flex-shrink-0"><img src={booking.show.movie.poster} width={100} alt="Movie Poster" /></div>
                            <div className="show-details flex-1">
                                <h3 className="mt-0 mb-0">{booking.show.movie.title}</h3>
                                <p>Theatre: <b>{booking.show.theatre.name}</b></p>
                                <p>Seats: <b>{booking.seats.join(", ")}</b></p>
                                <p>Date & Time: <b>{moment(booking.show.date).format("MMM Do YYYY")} {moment(booking.show.time, "HH:mm").format("hh:mm A")}</b></p>
                                <p>Amount: <b>Rs.{booking.seats.length * booking.show.ticketPrice} </b></p>
                                <p>Booking ID: <b>{booking.transactionId} </b></p>
                            </div>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>}
        
        {!bookings.length && ( // Renders if no bookings exist
            <div className="text-center pt-3">
                <h1>You've not booked any show yet!</h1>
                <Link to="/"><Button type="primary">Start Booking</Button></Link>
            </div>
        )}
    </>
);