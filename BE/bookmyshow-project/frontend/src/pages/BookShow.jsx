import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/loaderSlice";
import { getShowById } from "../calls/show";
import { useNavigate, useParams } from "react-router-dom";
import { message, Card, Row, Col, Button } from "antd";
import moment from "moment";
 import { bookShow, makePayment } from "../calls/bookings";
import StripeCheckout from 'react-stripe-checkout'; // Stripe Checkout


const BookShow = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
//   const [show, setShow] = useState();
const show = {
    "movie":{
        "title":"finding nemo"
    },
    "theatre":{
        "name":"PVR"
    },
    "name":"night show",
    "date": 29/10/2024,
    "time":"21:00",
    ticketPrice:"450",
    bookedSeats:[1,2,3,4,4,5,5,5,5,5,5,5,5]
}
  const [selectedSeats, setSelectedSeats] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getShowById({ showId: params.id });
      if (response.success) {
        setShow(response.data);
        // message.success(response.message);
        console.log(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (err) {
      message.error(err.message);
      dispatch(hideLoading());
    }
  };

  const getSeats = () => {
    let columns = 12;
    let totalSeats = 120;
    let rows = totalSeats / columns; // 10

    return (
      <div className="d-flex flex-column align-items-center">
        <div className="w-100 max-width-600 mx-auto mb-25px">
          <p className="text-center mb-10px">
            Screen this side, you will be watching in this direction
          </p>
          <div className="screen-div"></div>
        </div>
        <ul className="seat-ul justify-content-center">
          {Array.from(Array(rows).keys()).map((row) => {
            return Array.from(Array(columns).keys()).map((column) => {
              let seatNumber = row * columns + column + 1;

              // Calculation for the first iteration
              // 0*12 + 0+1 = 1
              // 0*12 + 1+1 = 2
              // 0*12 + 2+1 = 3
              // So on up till 12th seat

              // Calculation for the second iteration
              // 1*12 + 0+1 = 13
              // 1*12 + 1+1 = 14
              // 1*12 + 2+1 = 15
              // So on up till 24th seat

              // Calculation for the third iteration
              // 2*12 + 0+1 = 25
              // 2*12 + 1+1 = 26
              // 2*12 + 2+1 = 27
              // So on up till 36th seat

              // So on...

              // this part

              let seatClass = "seat-btn";

              if (selectedSeats.includes(seatNumber)) {
                seatClass += " selected";
              }
              if (show.bookedSeats.includes(seatNumber)) {
                seatClass += " booked";
              }

              if (seatNumber <= totalSeats)
                return (
                  <li>
                    <button
                      className={seatClass}
                      onClick={() => {
                        if (selectedSeats.includes(seatNumber)) {
                          setSelectedSeats(
                            selectedSeats.filter(
                              (curSeatNumber) => curSeatNumber !== seatNumber
                            )
                          );
                        } else {
                          setSelectedSeats([...selectedSeats, seatNumber]);
                        }
                      }}
                    >
                      {seatNumber}
                    </button>
                  </li>
                );
            });
          })}
        </ul>

        <div className="d-flex bottom-card justify-content-between w-100 max-width-600 mx-auto mb-25px mt-3">
          <div className="flex-1">
            Selected Seats: <span>{selectedSeats.join(", ")}</span>
          </div>
          <div className="flex-shrink-0 ms-3">
            Total Price:{" "}
            <span>Rs. {selectedSeats.length * show.ticketPrice}</span>
          </div>
        </div>
      </div>
    );
  };


  const onToken= async (token)=>{
    try{
        dispatch(showLoading());
        //make payment using token and calculate amount
        const response = await makePayment(token, selectedSeats.length*show.ticketPrice);
        if(response.success){
            message.success(response.success);
            book(response.data);
        }else{
            message.error(response.message);
        }
        dispatch(hideLoading());
    }catch(err){
        message.error(err.message);
        dispatch(hideLoading());
    }
  }

  const book = async (transactionId) => {
    try{
        dispatch(showLoading());
        //book the show with provied details
        const response = await bookShow({
            show: params.id,
            transactionId,
            seats: selectedSeats,
            user: user._id
        });
        if(response.success){
            message.success("Show Booking Done !!");
            navigate("/profile");
            book(response.data);
        }else{
            message.error(response.message);
        }
        dispatch(hideLoading());
    }catch(err){
        message.error(err.message);
        dispatch(hideLoading());
    }
  }

//   useEffect(() => {
//     getData();
//   }, []);

  return (
    <>
      {(
        <Row gutter={24}>
          <Col span={24}>
            <Card
              title={
                <div className="movie-title-details">
                  <h1>{show.movie.title}</h1>
                  <p>
                    Theatre: {show.theatre.name}, {show.theatre.address}
                  </p>
                </div>
              }
              extra={
                <div className="show-name py-3">
                  <h3>
                    <span>Show Name:</span> {show.name}
                  </h3>
                  <h3>
                    <span>Date & Time: </span>
                    {moment(show.date).format("MMM Do YYYY")} at{" "}
                    {moment(show.time, "HH:mm").format("hh:mm A")}
                  </h3>
                  <h3>
                    <span>Ticket Price:</span> Rs. {show.ticketPrice}/-
                  </h3>
                  <h3>
                    <span>Total Seats:</span> {show.totalSeats}
                    <span> &nbsp;|&nbsp; Available Seats:</span>{" "}
                    {show.totalSeats - show.bookedSeats.length}{" "}
                  </h3>
                </div>
              }
              style={{ width: "100%" }}
            >
              {getSeats()}


              { selectedSeats.length > 0 && <StripeCheckout  token={onToken}  billingAddress amount={selectedSeats.length * show.ticketPrice * 100} stripeKey="pk_test_2VmtDx5s0gIh5ojgsvijNrLa00GNgwwfEN">
                    { /* Use this one in some situation=> pk_test_eTH82XLklCU1LJBkr2cSDiGL001Bew71X8  */ }
                    <div className="max-width-600 mx-auto">
                        <Button type="primary" shape="round" size="large" block>Pay Now</Button>
                    </div></StripeCheckout>}

            
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};
export default BookShow;