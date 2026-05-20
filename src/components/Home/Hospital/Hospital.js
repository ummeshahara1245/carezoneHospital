import React, { useEffect, useState } from 'react'; // 👈 ছোট হাতের import
import HospitalCard from '../HospitalCard/HospitalCard';
import './Hospital.css';

// 🎯 src এর ভেতরে নিয়ে আসার পর একদম সহজ পাথ
import fakeData from './fakeData.json';

const Hospital = () => {
    const [hospital, setHospital] = useState([]);

    useEffect(() => {
        if (fakeData) {
            setHospital(fakeData);
        }
    }, []);

    return (
        <section id="services" className="services-section py-5">
            <div className="container">

                {/* হেডার সেকশন */}
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

                {/* সার্ভিসেস গ্রিড */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 services-grid">
                    {
                        hospital.length > 0 ? (
                            hospital.map((item, index) => (
                                <HospitalCard
                                    key={item.id || index}
                                    hospital={item}
                                />
                            ))
                        ) : (
                            <div className="text-center w-100 py-5">
                                <p className="text-muted">Loading services...</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Hospital;