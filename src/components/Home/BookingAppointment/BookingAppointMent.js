import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import './BookingAppointment.css';
import axios from 'axios';

const BookingAppointMent = () => {
    const [appointmentInfo, setAppointmentInfo] = useState({
        patientName: '',
        contact: '',
        email: '', // 📧 নতুন ইমেইল স্টেট যোগ করা হলো
        date: '',
        time: '',
        symptoms: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAppointmentInfo({
            ...appointmentInfo,
            [name]: value
        });
    };

    const handleAppointmentSubmit = async (e) => {
        e.preventDefault();

        try {
            // আমাদের লোকাল নোড জেএস সার্ভারের ইউআরএল
            const serverUrl = 'http://localhost:5000/api/appointments';

            const response = await axios.post(serverUrl, appointmentInfo);

            if (response.data.success) {
                alert(`🎉 Thank you ${appointmentInfo.patientName}! Your appointment is successfully booked. A confirmation email & SMS have been sent.`);

                // ফর্ম খালি করা
                setAppointmentInfo({
                    patientName: '',
                    contact: '',
                    email: '', // ফর্ম খালি করার সময় ইমেইলও খালি হবে
                    date: '',
                    time: '',
                    symptoms: ''
                });
            }
        } catch (error) {
            console.error("API Connection Error:", error);
            alert("Could not connect to server. Please ensure your backend server is running on port 5000.");
        }
    };

    return (
        <div>
            <HeaderMain />
            <div className="container py-5">
                <div className="row g-5 align-items-center">

                    {/* Left Side Info */}
                    <div className="col-lg-6">
                        <div className="pe-lg-4">
                            <h2 className="fw-black mb-4" style={{ color: '#304770' }}>APPOINTMENT BOOKING</h2>
                            <p className="lead text-secondary mb-4">You are most welcome to MMCL for your health services! We are committed to rendering professional medical support.</p>
                            <div className="lh-lg text-secondary mb-4">
                                <h6 className="fw-bold text-dark">🏥 Contact Information:</h6>
                                <div><strong>Working hours:</strong> <span className="text-success fw-semibold">24 Hours, 365 Days</span></div>
                                <div><strong>Phone:</strong> 88 02 9830706</div>
                                <div><strong>Email:</strong> carezonehelp@gmail.com</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="col-lg-6">
                        <div className="card border-0 shadow-lg p-4 p-md-5 rounded-4 bg-white">
                            <h3 className="text-center fw-bold mb-4" style={{ color: '#304770' }}>Find Consultation</h3>
                            <form onSubmit={handleAppointmentSubmit}>
                                <div className="row mb-3 align-items-center">
                                    <label className="col-sm-3 fw-semibold text-secondary">Name</label>
                                    <div className="col-sm-9">
                                        <input type="text" name="patientName" className="form-control py-2" value={appointmentInfo.patientName} onChange={handleInputChange} required />
                                    </div>
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <label className="col-sm-3 fw-semibold text-secondary">Contact</label>
                                    <div className="col-sm-9">
                                        <input type="tel" name="contact" className="form-control py-2" placeholder="01XXXXXXXXX" value={appointmentInfo.contact} onChange={handleInputChange} required />
                                    </div>
                                </div>

                                {/* 📧 নতুন ইমেইল ইনপুট ফিল্ড (যুক্ত করা হলো) */}
                                <div className="row mb-3 align-items-center">
                                    <label className="col-sm-3 fw-semibold text-secondary">Email</label>
                                    <div className="col-sm-9">
                                        <input type="email" name="email" className="form-control py-2" placeholder="patient@email.com" value={appointmentInfo.email} onChange={handleInputChange} required />
                                    </div>
                                </div>

                                <div className="row mb-3 align-items-center">
                                    <label className="col-sm-3 fw-semibold text-secondary">Date</label>
                                    <div className="col-sm-9">
                                        <input type="date" name="date" className="form-control py-2" value={appointmentInfo.date} onChange={handleInputChange} required />
                                    </div>
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <label className="col-sm-3 fw-semibold text-secondary">Time</label>
                                    <div className="col-sm-9">
                                        <input type="time" name="time" className="form-control py-2" value={appointmentInfo.time} onChange={handleInputChange} required />
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <label className="col-sm-3 fw-semibold text-secondary">Symptoms</label>
                                    <div className="col-sm-9">
                                        <textarea name="symptoms" className="form-control" rows="3" value={appointmentInfo.symptoms} onChange={handleInputChange}></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-9 offset-sm-3">
                                        <button type="submit" className="btn text-white w-100 py-2 fw-bold" style={{ backgroundColor: '#304770' }}>
                                            Confirm Appointment
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BookingAppointMent;