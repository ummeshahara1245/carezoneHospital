import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        // ১. এখানে style={{ height: '70vh', minHeight: '450px' }} এবং bg-dark ক্লাসেস যোগ করা হয়েছে
        <div id="carouselExampleCaptions" className="carousel slide img-caro bg-dark" style={{ height: '70vh', minHeight: '450px' }} data-bs-ride="carousel">
            {/* Indicators */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="active" aria-label="Slide 3"></button>
            </div>

            {/* Carousel Items */}
            {/* ২. এখানে style={{ height: '100%' }} যোগ করা হয়েছে */}
            <div className="carousel-inner" style={{ height: '100%' }}>

                {/* Slide 1 */}
                <div className="carousel-item active position-relative h-100">
                    <img
                        src="https://images.pexels.com/photos/6129210/pexels-photo-6129210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="d-block w-100 h-100"
                        style={{ objectFit: 'cover' }} // ৩. ইমেজ যেন চ্যাপ্টা না হয়
                        alt="Medical Care"
                    />
                    <div className="absolute-inset bg-dark bg-opacity-50 position-absolute top-0 start-0 w-100 h-100"></div>

                    <div className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start h-100 px-4 px-md-5">
                        <span className="text-warning fw-bold tracking-wider text-uppercase mb-2">We Care For Your Best Health</span>
                        <h1 className="display-4 fw-black text-white mb-3 text-uppercase">Provide Best Medical<br />Treatment</h1>
                        <p className="text-light opacity-90 max-w-xl text-sm md:text-base leading-relaxed">
                            We have a state of the art Accident & Emergency unit capable of handling all emergencies, as well as modern wards.
                        </p>
                        <button className="btn btn-warning fw-bold px-4 py-2 mt-3 rounded-pill shadow-sm">Explore Services</button>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item position-relative h-100">
                    <img
                        src="https://images.pexels.com/photos/6129651/pexels-photo-6129651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="d-block w-100 h-100"
                        style={{ objectFit: 'cover' }}
                        alt="Medical Equipments"
                    />
                    <div className="absolute-inset bg-dark bg-opacity-50 position-absolute top-0 start-0 w-100 h-100"></div>

                    <div className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start h-100 px-4 px-md-5">
                        <span className="text-warning fw-bold tracking-wider text-uppercase mb-2">Advanced Technology</span>
                        <h1 className="display-4 fw-black text-white mb-3 text-uppercase">Ultra-Modern<br />Renal & ICU Units</h1>
                        <p className="text-light opacity-90 max-w-xl text-sm md:text-base leading-relaxed">
                            We have opened a state of the art maternity wing where comfort has been emphasized to ensure that mother and baby experience the best.
                        </p>
                        <button className="btn btn-warning fw-bold px-4 py-2 mt-3 rounded-pill shadow-sm">Book Appointment</button>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="carousel-item position-relative h-100">
                    <img
                        src="https://images.pexels.com/photos/3845126/pexels-photo-3845126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="d-block w-100 h-100"
                        style={{ objectFit: 'cover' }}
                        alt="Professional Doctors"
                    />
                    <div className="absolute-inset bg-dark bg-opacity-50 position-absolute top-0 start-0 w-100 h-100"></div>

                    <div className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start h-100 px-4 px-md-5">
                        <span className="text-warning fw-bold tracking-wider text-uppercase mb-2">Expert Specialists</span>
                        <h1 className="display-4 fw-black text-white mb-3 text-uppercase">Compassionate &<br />Professional Care</h1>
                        <p className="text-light opacity-90 max-w-xl text-sm md:text-base leading-relaxed">
                            Our dedicated team of world-class doctors and nurses work around the clock to provide premium medical support.
                        </p>
                        <button className="btn btn-warning fw-bold px-4 py-2 mt-3 rounded-pill shadow-sm">Meet Our Doctors</button>
                    </div>
                </div>

            </div>

            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeaderMain;