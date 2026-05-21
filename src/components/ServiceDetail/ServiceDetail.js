import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetail.css';

// 🌟 ১. তোমার 'hospital' ফোল্ডার থেকে সরাসরি JSON ফাইলটি ইম্পোর্ট করো
// (পাথটি খেয়াল করো: '../../hospital/fakeData.json' যদি ঠিক না থাকে, তবে সঠিক পাথটি দাও)
import servicesData from '../Home/Hospital/fakeData.json';
const ServiceDetail = () => {
    const { id } = useParams();

    // 🌟 ২. ফেচ করার দরকার নেই, সরাসরি ইম্পোর্ট করা ডেটা থেকে আইডি খুঁজবে
    const exactItem = servicesData?.find(hospital => hospital._id == id || hospital.id == id);

    // 🌟 ৩. যদি কোনো কারণে আইডি ম্যাচ না করে
    if (!exactItem) {
        return (
            <div className="container text-center my-5 py-5">
                <h3 className="text-danger">Service Not Found!</h3>
                <Link to="/home" className="btn btn-primary mt-3 rounded-pill">Go Back Home</Link>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden mx-auto" style={{ maxWidth: '900px' }}>
                <div className="row g-0 align-items-center">

                    {/* Image Section */}
                    <div className="col-md-5 bg-light" style={{ minHeight: '300px' }}>
                        <img
                            src={exactItem.imageURL || exactItem.img || "https://via.placeholder.com/400x300"}
                            className="img-fluid w-100 h-100 object-cover"
                            style={{ minHeight: '300px', objectFit: 'cover' }}
                            alt={exactItem.name}
                        />
                    </div>

                    {/* Content Section */}
                    <div className="col-md-7">
                        <div className="card-body p-4 p-md-5">
                            <span className="badge bg-primary-subtle text-primary mb-2 px-3 py-2 rounded-pill fw-bold text-uppercase">
                                Service Details
                            </span>
                            <h2 className="card-title fw-black mb-3" style={{ color: '#304770' }}>
                                {exactItem.name}
                            </h2>
                            <hr className="my-3 opacity-25" />
                            <p className="card-text text-secondary leading-relaxed mb-4" style={{ fontSize: '1.05rem' }}>
                                {exactItem.short_des || exactItem.description}
                            </p>

                            <div className="d-flex gap-2">
                                <Link to="/Booking-appointment" className="btn btn-warning fw-bold px-4 py-2 rounded-pill shadow-sm">
                                    Book This Service
                                </Link>
                                <Link to="/home" className="btn btn-outline-secondary px-4 py-2 rounded-pill">
                                    Back to Services
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;