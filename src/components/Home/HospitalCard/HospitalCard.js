import React from 'react';
import { Link } from 'react-router-dom';
import './HospitalCard.css';

const HospitalCard = (props) => {
    // ডেসট্রাকচারিং (id এবং _id দুইটাই হ্যান্ডেল করা হয়েছে)
    const { name, imageURL, short_des, _id, id } = props.hospital;
    const serviceId = _id || id;

    return (
        <div className="col">
            <div className="card h-100 text-center hospital-card">

                {/* 🖼️ ইমেজ কন্টেইনার */}
                <div className="card-img-container">
                    <img src={imageURL} className="hospital-card-img" alt={name} />
                </div>

                {/* 📝 কার্ড বডি বা টেক্সট সেকশন */}
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title-custom">{name}</h5>
                        <p className="card-text-custom text-secondary">{short_des}</p>
                    </div>

                    {/* 🔗 অ্যাকশন বাটন (text-center দিয়ে বাটন মাঝখানে রাখা হয়েছে) */}
                    <div className="mt-3 text-center">
                        <Link to={`/ServiceDetail/${serviceId}`}>
                            <button className="btn-details">
                                View Details <i className="fas fa-arrow-right ms-2"></i>
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HospitalCard;