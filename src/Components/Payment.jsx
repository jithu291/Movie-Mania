import React, { useState } from 'react';
import './Payment.css';


function StepForm() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        streetAddress: '',
        country: '',
        zipCode: '',
        orderNote: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to backend or perform validation
        // You can navigate to the next step by calling setStep(step + 1)
    };

    const steps = [
        <section>
            <div className="form-row"> <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Name" /> </div>
            <div className="form-row"> <input type="text" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" /> </div>
            <div className="form-row"> <input type="text" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone number" /> </div>
            <div className="form-row"> <input type="text" className="form-control" name="streetAddress" value={formData.streetAddress} onChange={handleChange} placeholder="Street address" /> </div>
        </section>,
        <section>
            <div className="form-row"> <input type="text" className="form-control" name="country" value={formData.country} onChange={handleChange} placeholder="Country" /> </div>
            <div className="form-row"> <input type="text" className="form-control" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Zip code" /> </div>
            <div className="form-row" style={{ marginBottom: '18px' }}> <textarea name="orderNote" value={formData.orderNote} onChange={handleChange} className="form-control" placeholder="Any order note about delivery or special offer" style={{ height: '108px' }}></textarea> </div>
        </section>,
        <section>
            <div className="product">
                {/* Product items */}
            </div>
            {/* Checkout */}
        </section>,
        <section>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
            </svg>
            <p className="success">Order placed successfully. Your order will be dispatched soon. Meanwhile, you can track your order in the 'My Order' section.</p>
        </section>
    ];

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <div id="wizard">
                    {steps.map((stepContent, index) => (
                        <React.Fragment key={index}>
                            <h4></h4> {/* You can replace this with appropriate step title */}
                            {step === index && stepContent}
                        </React.Fragment>
                    ))}
                </div>
            </form>
        </div>
    );
}

export default StepForm;
