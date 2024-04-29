import React, { useState, useEffect } from 'react';
import './TicketBooking.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const TicketBooking = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const movieName = queryParams.get('movie');
    const time = queryParams.get('time');
    const theaterName = queryParams.get('theater');


    const [totalAmount, setTotalAmount] = useState(0);
    const [totalTickets, setTotalTickets] = useState(0);
    const [bookedSeats, setBookedSeats] = useState(new Set());
    const [selectedSeats, setSelectedSeats] = useState(new Set());


    useEffect(() => {
        // Simulate initial booked seats (you can replace this with actual data from a backend)
        const initialBookedSeats = new Set();
        for (let i = 0; i < 20; i++) {
            const seatId = `s${i + 2}`;
            initialBookedSeats.add(seatId);
        }
        setBookedSeats(initialBookedSeats);
    }, []);

    const handleSeatSelection = (event) => {
        const seatId = event.target.id;
        const isChecked = event.target.checked;

        setSelectedSeats((prevSeats) => {
            const updatedSeats = new Set(prevSeats);
            if (isChecked) {
                updatedSeats.add(seatId);
                setTotalAmount((prevAmount) => prevAmount + 200);
                setTotalTickets((prevTickets) => prevTickets + 1);
            } else {
                updatedSeats.delete(seatId);
                setTotalAmount((prevAmount) => prevAmount - 200);
                setTotalTickets((prevTickets) => prevTickets - 1);
            }
            return updatedSeats;
        });
    };

    const renderSeats = () => {
        const seats = [];

        for (let i = 0; i < 59; i++) {
            const seatId = `s${i + 2}`;
            const isBooked = bookedSeats.has(seatId);
            const isSelected = selectedSeats.has(seatId);
            const seatNumber = i + 1; // Adjust seat number as needed
            seats.push(
                <React.Fragment key={seatId}>
                    <input
                        type="checkbox"
                        name="tickets"
                        id={seatId}
                        checked={isSelected}
                        onChange={handleSeatSelection}
                        disabled={isBooked}
                    />
                    <label htmlFor={seatId} className={`seat ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}`}>
                        {seatNumber} {/* Display seat number inside the label */}
                    </label>
                </React.Fragment>
            );
        }

        return seats;
    };

    const handleBooking = () => {
        if (selectedSeats.size === 0) {
            // console.log("No seats selected");
            toast.error('Please select at least one seat.',{
                autoClose: 4000, // Close the toast after 4 seconds
                
            });;
        } else {
            const selectedSeatNumbers = Array.from(selectedSeats).map(seatId => parseInt(seatId.substring(1)) + -1); // Convert seat IDs to seat numbers
            navigate('/confirm', {
                state: {
                    movieName: movieName,
                    time: time,
                    theaterName: theaterName,
                    selectedSeats: selectedSeatNumbers,
                    totalAmount: totalAmount
                }
            });
        }
    };

    return (

        <div className="center d-flex justify-content-evenly">
            <div>
                <h1>Booking Details</h1>
                <p>Movie: {movieName}</p>
                <p>Time: {time}</p>
                <p>Theater: {theaterName}</p>
            </div>
            <div className="tickets">
                <div className="ticket-selector">
                    <div className="head">
                        <div className="title">Movie Name</div>
                    </div>
                    <div className="seats">
                        <div className="status">
                            <div className="item">Available</div>
                            <div className="item">Booked</div>
                            <div className="item">Selected</div>
                        </div>
                        <div className="all-seats">{renderSeats()}</div>
                    </div>
                    {/* Remaining JSX for date/time selection */}
                </div>
                <div className="price">
                    <div className="total">
                        <span>
                            <span className="count">{totalTickets}</span> Tickets
                        </span>
                        <div className="amount">{totalAmount}</div>
                    </div>
                    <button type="button" onClick={handleBooking} disabled={selectedSeats.size === 0}>
                        Book
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default TicketBooking;
