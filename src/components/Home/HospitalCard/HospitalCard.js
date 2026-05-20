import React from 'react';
import { Link } from 'react-router-dom';
// 🌟 যদি তোমার কোনো কাস্টম সিএসএস ফাইল থাকে, তবে এই লাইনের কমেন্ট যেভাবে আছে সেভাবেই থাক
import './HospitalCard.css';

const HospitalCard = (props) => {
    // ডেসট্রাকচারিং (id এবং _id দুইটাই হ্যান্ডেল করা হয়েছে)
    const { name, imageURL, short_des, _id, id } = props.hospital;
    const serviceId = _id || id;

    return (
        <div className="col">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white text-center">

                {/* 🖼️ ইমেজ কন্টেইনার (উচ্চতা ফিক্সড এবং অবজেক্ট ফিট কভার করা হয়েছে) */}
                <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                    <img
                        src={imageURL}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                        alt={name}
                    />
                </div>

                {/* 📝 কার্ড বডি বা টেক্সট সেকশন */}
                <div className="card-body p-4 d-flex flex-column justify-content-between text-start">
                    <div>
                        <h5 className="fw-bold mb-3 text-uppercase text-center text-md-start" style={{ color: '#304770', fontSize: '1.15rem' }}>
                            {name}
                        </h5>
                        <p className="text-secondary small lh-base text-center text-md-start" style={{ opacity: 0.9 }}>
                            {short_des}
                        </p>
                    </div>

                    {/* 🔗 অ্যাকশন বাটন (গাঢ় নীল থিম বাটন) */}
                    <div className="mt-4 text-center">
                        <Link to={`/ServiceDetail/${serviceId}`} className="text-decoration-none">
                            <button
                                className="btn w-100 py-2.5 rounded-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
                                style={{
                                    backgroundColor: '#304770',
                                    color: '#ffffff',
                                    border: 'none',
                                    fontSize: '0.9rem',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                View Details <i className="fas fa-arrow-right small"></i>
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HospitalCard;