import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Contacts.css';

const Contacts = () => {

    const handleContactSubmit = (e) => {
        e.preventDefault();
        alert('Message Sent Successfully!');
    };

    return (
        <div>
            {/* Slider/Header Section */}
            <HeaderMain />

            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bolder display-5 text-uppercase">Contact Us</h2>
                    <p className="text-secondary lead">Get in touch with us for any inquiries or support</p>
                </div>

                <div className="row g-5 align-items-stretch">

                    {/* Left Side: Contact Form Card */}
                    <div className="col-lg-6">
                        <div className="card border-0 shadow-lg p-4 p-md-5 rounded-4 bg-white h-100">
                            <h3 className="fw-bold mb-1" style={{ color: '#304770' }}>Contact Form</h3>
                            <p className="text-secondary small mb-4">Contact us for any general inquiries or assistance</p>

                            <form id="contact" onSubmit={handleContactSubmit}>
                                {/* Name Field */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold text-secondary">Your Name</label>
                                    <input
                                        placeholder="Enter your name"
                                        type="text"
                                        className="form-control py-2 rounded-3"
                                        tabIndex="1"
                                        required
                                        autoFocus
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold text-secondary">Your Email Address</label>
                                    <input
                                        placeholder="example@mail.com"
                                        type="email"
                                        className="form-control py-2 rounded-3"
                                        tabIndex="2"
                                        required
                                    />
                                </div>

                                {/* Phone Field */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold text-secondary">Your Phone Number (Optional)</label>
                                    <input
                                        placeholder="+88017XXXXXXXX"
                                        type="tel"
                                        className="form-control py-2 rounded-3"
                                        tabIndex="3"
                                    />
                                </div>

                                {/* Website Field */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold text-secondary">Your Website (Optional)</label>
                                    <input
                                        placeholder="https://example.com"
                                        type="url"
                                        className="form-control py-2 rounded-3"
                                        tabIndex="4"
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold text-secondary">Message</label>
                                    <textarea
                                        placeholder="Type your message here...."
                                        className="form-control rounded-3"
                                        rows="4"
                                        tabIndex="5"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    name="submit"
                                    type="submit"
                                    id="contact-submit"
                                    className="btn text-white w-100 py-2.5 fw-bold rounded-3 shadow-sm"
                                    style={{ backgroundColor: '#304770' }}
                                >
                                    Submit Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Side: Contact Info Details */}
                    <div className="col-lg-6">
                        <div className="p-4 p-md-5 rounded-4 bg-light h-100 border border-1 shadow-sm d-flex flex-column justify-content-between">
                            <div>
                                <h3 className="fw-bold mb-3 text-uppercase" style={{ color: '#304770' }}>
                                    Contact Info & Details
                                </h3>
                                <hr className="mb-4 opacity-25" />

                                <p className="lead text-dark fw-medium mb-4">
                                    You are most welcome to MMCL for your health services!
                                </p>

                                <div className="lh-lg text-secondary mb-4">
                                    <div className="mb-2">
                                        <i className="bi bi-clock-fill text-primary me-2"></i>
                                        <strong>Working hours (Patients):</strong> <span className="text-success fw-semibold">24 Hours, 365 Days</span>
                                    </div>
                                    <div className="mb-2">
                                        <i className="bi bi-clock-fill text-primary me-2"></i>
                                        <strong>Working hours (General):</strong> 09 to 17 Hours, Except Holidays
                                    </div>
                                    <div className="mb-2">
                                        <i className="bi bi-telephone-fill text-primary me-2"></i>
                                        <strong>Phone:</strong> +88-02-8824155 / +88-02-9830482
                                    </div>
                                    <div className="mb-2">
                                        <i className="bi bi-envelope-fill text-primary me-2"></i>
                                        <strong>Email:</strong> mmcl.nc78@gmail.com
                                    </div>
                                    <div className="mb-2">
                                        <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                                        <strong>Address:</strong> 46, Shaheed Taj Uddin Ahmed Sarani, Mohakhali, Dhaka (Near Tangail Bus Stand)
                                    </div>
                                </div>
                            </div>

                            {/* Appointment Info Box */}
                            <div className="bg-white p-4 rounded-3 border-start border-primary border-4 shadow-sm mt-4">
                                <h5 className="fw-bold text-primary mb-2">APPOINTMENT REQUEST</h5>
                                <p className="text-secondary small m-0">
                                    If you wish to book an appointment with a doctor, it is best that you visit our
                                    <span className="text-primary fw-semibold cursor-pointer"> Appointment Booking Page</span> directly for real-time schedule checks.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Contacts;