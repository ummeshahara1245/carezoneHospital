import React, { useEffect, useState } from 'react';
import HospitalCard from '../HospitalCard/HospitalCard';
import './Hospital.css'; // 🌟 এক্সটার্নাল সিএসএস ফাইল ইমপোর্ট করা হলো

const Hospital = () => {
    const [hospital, setHospital] = useState([]);

    // Loading Data 
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then(data => {
                setHospital(data);
            })
            .catch(err => console.error("Error fetching fake data:", err));
    }, []);

    return (
        <section id="services" className="services-section py-5">
            <div className="container">

                {/* 🎯 হেডার সেকশনটি আরও মডার্ন করা হলো */}
                <div className="services-header text-center mb-5">
                    <span className="subtitle text-uppercase">CareZone Capabilities</span>
                    <h2 className="fw-black display-5 mt-2">
                        Our Dedicated <span className="highlight-text">Services</span>
                    </h2>
                    <div className="accent-bar mx-auto my-3"></div>
                    <p className="text-secondary lead max-w-md mx-auto">
                        We are committed to rendering professional medical support with state-of-the-art facilities.
                    </p>
                </div>

                {/* 📦 সার্ভিসেস কার্ড গ্রিড */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 services-grid">
                    {
                        hospital.map((item, index) => (
                            <HospitalCard
                                key={item.id || index}
                                hospital={item}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Hospital;