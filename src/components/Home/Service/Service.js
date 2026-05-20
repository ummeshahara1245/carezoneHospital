import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
// 🌟 যদি তোমার কোনো কাস্টম সিএসএস ফাইল থাকে, তবে এই লাইনের কমেন্ট তুলে পাথ ঠিক করে নিতে পারো:
// import './Service.css';

const Service = () => {
    return (
        <div style={{ backgroundColor: '#f8fafd' }}>
            {/* Header Slider */}
            <HeaderMain />

            {/* Medical Departments Section */}
            <section className="container py-5">
                <div className="text-center mb-5">
                    <span className="text-uppercase fw-bold small tracking-wider" style={{ color: '#5383d3', letterSpacing: '2px' }}>CareZone Capabilities</span>
                    <h2 className="fw-black display-5 text-uppercase mt-2" style={{ color: '#304770' }}>Medical Departments</h2>
                    <div className="mx-auto my-3" style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #5383d3, #304770)', borderRadius: '2px' }}></div>
                    <p className="text-secondary lead max-w-md mx-auto">The Backbone of our Clinic</p>
                </div>

                {/* Grid for Services */}
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {/* Neuro Surgery */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                            <img
                                src="https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                className="card-img-top"
                                style={{ height: '220px', objectFit: 'cover' }}
                                alt="Neuro Surgery"
                            />
                            <div className="card-body p-4 text-start">
                                <h5 className="card-title fw-bold mb-3" style={{ color: '#304770' }}>NEURO SURGERY</h5>
                                <p className="card-text text-secondary small lh-base">
                                    Our neurosurgery department provides advanced surgical care for disorders affecting the brain, spine, and peripheral nerves with cutting-edge technology.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Cardiac Surgery */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                            <img
                                src="https://images.pexels.com/photos/4483327/pexels-photo-4483327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                className="card-img-top"
                                style={{ height: '220px', objectFit: 'cover' }}
                                alt="Cardiac Surgery"
                            />
                            <div className="card-body p-4 text-start">
                                <h5 className="card-title fw-bold mb-3" style={{ color: '#304770' }}>CARDIAC SURGERY</h5>
                                <p className="card-text text-secondary small lh-base">
                                    Equipped with state-of-the-art operation theatres, our cardiac specialists deliver world-class surgical solutions for all complex heart conditions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Medicine */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                            <img
                                src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                className="card-img-top"
                                style={{ height: '220px', objectFit: 'cover' }}
                                alt="Medicine"
                            />
                            <div className="card-body p-4 text-start">
                                <h5 className="card-title fw-bold mb-3" style={{ color: '#304770' }}>MEDICINE</h5>
                                <p className="card-text text-secondary small lh-base">
                                    Comprehensive internal medicine services focusing on accurate diagnosis, preventive care, and premium treatment for general health complexities.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* About Us Section */}
            <section className="py-5" style={{ backgroundColor: '#f3f7fc' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="text-uppercase fw-bold small tracking-wider" style={{ color: '#5383d3', letterSpacing: '2px' }}>Our History</span>
                        <h2 className="fw-black display-5 text-uppercase mt-2" style={{ color: '#304770' }}>About Us</h2>
                        <div className="mx-auto my-3" style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #5383d3, #304770)', borderRadius: '2px' }}></div>
                        <p className="text-secondary lead">Our journey, vision, and legacy of caring</p>
                    </div>

                    <div className="row align-items-center g-5 text-start">
                        {/* About Texts */}
                        <div className="col-lg-7">
                            <div className="mb-4 bg-white p-4 rounded-4 shadow-sm">
                                <h4 className="fw-bold mb-2" style={{ color: '#304770' }}>A GLANCE INTO THE PAST</h4>
                                <p className="text-secondary small m-0 lh-base">Back in 1978, with a rental house at Eskaton Garden, Dhaka, a noble gesture, a wise venture of 5 Founder Directors started shaping up. Primarily based on the personal initiative dream and vision and leadership of Dr. A. K. N. Islam (then Chief of Medicine at Holy Family Red Crescent Hospital) all was set to start a private clinic. Throughout the years passed hard work & commitment of the team earned name and fame of the clinic amongst patients & doctors.</p>
                            </div>

                            <div className="mb-4 bg-white p-4 rounded-4 shadow-sm">
                                <h4 className="fw-bold mb-2" style={{ color: '#304770' }}>A PURPOSE BUILT PRIVATE HOSPITAL</h4>
                                <p className="text-secondary small m-0 lh-base">Defining and redefining the vision in its day-to-day process, the mission was set to shift this clinic to a bigger and better space in view to cater some specific scarce treatment and services. It was 1981 when a land of 1.5 bigha was purchased to construct premises of its own. The venture resulted in the first purpose-built private hospital in Dhaka.</p>
                            </div>

                            <div className="bg-white p-4 rounded-4 shadow-sm">
                                <h4 className="fw-bold mb-2" style={{ color: '#304770' }}>ADVANCED NEURO SURGERY</h4>
                                <p className="text-secondary small m-0 lh-base">Metropolitan Medical Centre from its inception till now has one of the largest neurosurgical centres outside the govt. sector. Prof. Rashiduddin Ahmad, an eminent neurosurgeon of the country, has been associated with this hospital from inception. Gradually the department was enlarged with eminent neurosurgeons rendering valuable services.</p>
                            </div>
                        </div>

                        {/* About Image */}
                        <div className="col-lg-5">
                            <div className="card border-0 shadow-lg overflow-hidden rounded-4">
                                <img
                                    src="https://images.unsplash.com/photo-1591766138175-adc7b22a3708?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxkb2N0b3JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    className="img-fluid w-100"
                                    style={{ minHeight: '440px', objectFit: 'cover' }}
                                    alt="Our Doctors Team"

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Component */}
            <Footer />
        </div>
    );
};

export default Service;