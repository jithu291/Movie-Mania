import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Confirm.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


const ConfirmationPage = () => {
    const location = useLocation();
    const { movieName, time, theaterName, selectedSeats, totalAmount } = location.state;

    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            // Send booking data to backend
            await axios.post('http://localhost:5000/bookings', {
                movieName,
                theaterName,
                time,
                selectedSeats,
                totalAmount
            });
            console.log('Booking details:', {
                movieName,
                theaterName,
                time,
                selectedSeats,
                totalAmount
            });
            
            // Show success toast
            toast.success('Payment successful', {
                autoClose: 4000, // Close the toast after 4 seconds
                onClose: () => {
                    // Redirect to landing page after toast is closed
                    navigate('/landing');
                }
            });
        } catch (error) {
            // Handle error
            console.error('Error submitting booking:', error);
            // Show error toast
            toast.error('An error occurred. Please try again later.');
        }
    };


    return (
        // <div className="center">
        //     <h1>Booking Confirmation</h1>
        //     <p>Movie: {movieName}</p>
        //     <p>Time: {time}</p>
        //     <p>Theater: {theaterName}</p>
        //     <p>Selected Seats: {selectedSeats.join(', ')}</p>
        //     {/* Additional confirmation details */}
        // </div>

        <div className='row d-flex ' style={{ width: '100%' }}>
             <nav class="navbar bg-body-tertiary" >
                    <div class="d-flex justify-content-evenly" >
                        <a class="text1 navbar-brand" href="#">
                            Movies-Booking
                        </a>
                       <div className='d-flex justify-content-evenly' style={{marginLeft:'550px', marginTop:'2px'}}>
                       <ul class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </ul>
                        <ul class="nav-item">
                            <a class="nav-link" href="#">About Us</a>
                        </ul>
                        <ul class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </ul>
                        <ul class="nav-item">
                            <a class="nav-link" href="#">others</a>
                        </ul>
                       </div>
                    </div>
                </nav>
            <center>
                <h1 style={{ fontFamily: '-moz-initial' }}>Booking Confirmation</h1>
            </center>
            <div className='col mt-3 ' style={{ height: '600px' }} >
                <div className='custom-div border shadow rounded' style={{ width: '500px', height: '300px', marginLeft: '80px', marginTop: '100px', backgroundColor: '#bfbfbf' }} >
                    <center>                        <h4 className='mt-5'>Movie: <span style={{ fontSize: '20px', fontFamily: 'serif', color: '#ff4000' }}>{movieName}</span></h4>
                    </center>
                    <center>                        <h4>Time: <span style={{ fontSize: '20px', fontFamily: 'serif', color: '#ff4000' }}>{time}</span></h4>
                    </center>
                    <center>                        <h4>Theater: <span style={{ fontSize: '20px', fontFamily: 'serif', color: '#ff4000' }}>{theaterName}</span></h4>
                    </center>
                    <center>                        <h4>Selected Seats: <span style={{ fontSize: '20px', fontFamily: 'serif', color: '#ff4000' }}>{selectedSeats.join(', ')}</span></h4>
                    </center>
                    <center>                        <h4>Total Amount: <span style={{ fontSize: '20px', fontFamily: 'serif', color: '#ff4000' }}>{totalAmount}</span></h4>
                    </center>
                </div>

            </div>


            <div className='col mt-3 border rounded shadow ' style={{ height: '500px', backgroundColor: '#bfbfbf' }}>
                <div class="container py-5">
                    <div class="row mb-4">
                        <div class="col-lg-8 mx-auto text-center">
                            <h1 class="display-6">Payment Methods</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 mx-auto">
                            <div class="card1" style={{ width: '400px', marginLeft: '-60px' }}>
                                <div class="card-header">
                                    <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                        <ul role="tablist" class="nav bg-light nav-pills rounded nav-fill mb-3">
                                            <li class="nav-item"> <a data-toggle="pill"  class="nav-link active "> <i class="fas fa-credit-card mr-2"></i> Credit Card </a> </li>
                                            <li class="nav-item"> <a data-toggle="pill" href="#paypal" class="nav-link "> <i class="fab fa-paypal mr-2"></i> G-Pay </a> </li>
                                            {/* <li class="nav-item"> <a data-toggle="pill" href="#net-banking" class="nav-link "> <i class="fas fa-mobile-alt mr-2"></i> Net Banking </a> </li> */}
                                        </ul>
                                    </div>
                                    <div class="tab-content">
                                        <div id="credit-card" class="tab-pane fade show active pt-3">
                                            <form role="form" onSubmit={handleSubmit}>
                                                <div class="form-group"> <label for="username">
                                                    <h6>Card Owner</h6>
                                                </label> <input type="text" name="username" placeholder="Card Owner Name" required class="form-control " /> </div>
                                                <div class="form-group"> <label for="cardNumber">
                                                    <h6>Card number</h6>
                                                </label>
                                                    <div class="input-group"> <input type="text" name="cardNumber" placeholder="Valid card number" class="form-control " required />
                                                        <div class="input-group-append ms-2"> <span class="input-group-text text-muted"> <i class="fab fa-cc-visa mx-1"></i> <i class="fab fa-cc-mastercard mx-1"></i> <i class="fab fa-cc-amex mx-1"></i> </span> </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-8">
                                                        <div class="form-group"> <label><span class="hidden-xs">
                                                            <h6>Expiration Date</h6>
                                                        </span></label>
                                                            <div class="input-group"> <input type="number" placeholder="MM" name="" class="form-control" required /> <input type="number" placeholder="YY" name="" class="form-control ms-1" required /> </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                            <h6>CVV <i class="fa fa-question-circle d-inline"></i></h6>
                                                        </label> <input type="text" required class="form-control" /> </div>
                                                    </div>
                                                </div>
                                                {/* <div class="card-footer"> <button type="button" class="subscribe btn btn-primary btn-block shadow-sm"> Confirm Payment </button> <div/> */}
                                                <div className='d-flex justify-content-center'>
                                                    <button style={{width:'100px', height:'40px'}} class="button1 "  type="submit"><span>pay</span></button>
                                                </div>
                                            </form>
                                            {/* Toast message */}
            {showToast && (
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-body">
                        Payment successful! Redirecting to landing page...
                    </div>
                </div>
            )}
                                        </div>
                                    </div>
                                    <div id="paypal" class="tab-pane fade pt-3">
                                        <h6 class="pb-2">Select your paypal account type</h6>
                                        <div class="form-group "> <label class="radio-inline"> <input type="radio" name="optradio" checked /> Domestic </label> <label class="radio-inline"> <input type="radio" name="optradio" class="ml-5" />International </label></div>
                                        <p> <button type="button" class="btn btn-primary "><i class="fab fa-paypal mr-2"></i> Log into my Paypal</button> </p>
                                        <p class="text-muted"> Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
                                    </div>
                                    <div id="net-banking" class="tab-pane fade pt-3">
                                        <div class="form-group "> <label for="Select Your Bank">
                                            <h6>Select your Bank</h6>
                                        </label> <select class="form-control" id="ccmonth">
                                                <option value="" selected disabled>--Please select your Bank--</option>
                                                <option>Bank 1</option>
                                                <option>Bank 2</option>
                                                <option>Bank 3</option>
                                                <option>Bank 4</option>
                                                <option>Bank 5</option>
                                                <option>Bank 6</option>
                                                <option>Bank 7</option>
                                                <option>Bank 8</option>
                                                <option>Bank 9</option>
                                                <option>Bank 10</option>
                                            </select> </div>
                                        <div class="form-group">
                                            <p> <button type="button" class="btn btn-primary "><i class="fas fa-mobile-alt mr-2"></i> Proceed Payment</button> </p>
                                        </div>
                                        <p class="text-muted">Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
        
    );
};

export default ConfirmationPage;
