import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetching Fake Data
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    // আইডি ম্যাচ করে নির্দিষ্ট সার্ভিসটি খুঁজে বের করা (filter এর চেয়ে find ব্যবহার করা ভালো)
    // == ব্যবহার করা হয়েছে যাতে string বা number যেকোনো টাইপ আইডি ম্যাচ করে যায়
    const exactItem = services.find(hospital => hospital._id == id || hospital.id == id);

    // ডেটা লোড হওয়ার আগ পর্যন্ত স্পিনার বা লোডিং মেসেজ দেখাবে (ক্র্যাশ হওয়া আটকাতে)
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center my-5 py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // যদি কোনো কারণে আইডি দিয়ে ডেটা খুঁজে না পাওয়া যায়
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
                                {exactItem.description}
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