import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';

const OurDoctors = () => {
    return (
        <div>
            {/* Top Slider Section */}
            <HeaderMain />

            {/* Featured Services Section */}
            <section className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bolder display-5 text-uppercase">Featured Services</h2>
                    <p className="text-secondary lead">We cover a big variety of medical services</p>
                </div>

                {/* Services Grid */}
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {/* CT-Scan */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/7088520/pexels-photo-7088520.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                className="card-img-top"
                                style={{ height: '220px', objectFit: 'cover' }}
                                alt="CT-Scan"
                            />
                            <div className="card-body p-4">
                                <h5 className="card-title fw-bold" style={{ color: '#304770' }}>128 SLICE CT-SCAN</h5>
                                <p className="card-text text-secondary">
                                    A clear view for a caring doctor can only get you cured. We trust world brand machines and efficient hands can scan it best. The following CT Scan tests are available here 24 hours.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ICU & CCU */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/6129052/pexels-photo-6129052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                className="card-img-top"
                                style={{ height: '220px', objectFit: 'cover' }}
                                alt="ICU CCU"
                            />
                            <div className="card-body p-4">
                                <h5 className="card-title fw-bold" style={{ color: '#304770' }}>ICU & CCU</h5>
                                <p className="card-text text-secondary">
                                    A dedicated Intensive Care Unit (ICU) specifically for neurosurgery and cardiac patients. Equipped with specialized nursing care and the latest monitoring technology.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pathology */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=500"
                                className="card-img-top"
                                style={{ height: '220px', objectFit: 'cover' }}
                                alt="Pathology"
                            />
                            <div className="card-body p-4">
                                <h5 className="card-title fw-bold" style={{ color: '#304770' }}>PATHOLOGY</h5>
                                <p className="card-text text-secondary">
                                    From tiny to advanced setups, we have it all in our laboratory to assure you accurate diagnostics and premium reports utilizing highly precise modern technology.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Our Doctors Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bolder display-5 text-uppercase">Our Doctors</h2>
                        <p className="text-secondary lead">Meet our team of world-class medical professionals</p>
                    </div>

                    {/* Doctors Grid */}
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                        {/* Doctor 1 */}
                        <div className="col">
                            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                    className="card-img-top"
                                    style={{ height: '280px', objectFit: 'cover', objectPosition: 'top' }}
                                    alt="Dr. Kim Sultan"
                                />
                                <div className="card-body p-3">
                                    <h5 className="card-title fw-bold mb-1" style={{ color: '#304770' }}>Dr. Kim Sultan</h5>
                                    <p className="card-text text-primary fw-semibold m-0">Medicine Specialist</p>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 2 */}
                        <div className="col">
                            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYxfHxkb2N0b3JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    className="card-img-top"
                                    style={{ height: '280px', objectFit: 'cover', objectPosition: 'top' }}
                                    alt="Dr. Jenny"
                                />
                                <div className="card-body p-3">
                                    <h5 className="card-title fw-bold mb-1" style={{ color: '#304770' }}>Dr. Jenny</h5>
                                    <p className="card-text text-primary fw-semibold m-0">Associate Professor (Urology)</p>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 3 */}
                        <div className="col">
                            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1612523138351-4643808db8f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    className="card-img-top"
                                    style={{ height: '280px', objectFit: 'cover', objectPosition: 'top' }}
                                    alt="Dr. Sahal"
                                />
                                <div className="card-body p-3">
                                    <h5 className="card-title fw-bold mb-1" style={{ color: '#304770' }}>Dr. Sahal</h5>
                                    <p className="card-text text-primary fw-semibold m-0">Consultant, Cardiology</p>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 4 */}
                        <div className="col">
                            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjFfHxkb2N0b3JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    className="card-img-top"
                                    style={{ height: '280px', objectFit: 'cover', objectPosition: 'top' }}
                                    alt="Dr. Sayra"
                                />
                                <div className="card-body p-3">
                                    <h5 className="card-title fw-bold mb-1" style={{ color: '#304770' }}>Dr. Sayra</h5>
                                    <p className="card-text text-primary fw-semibold m-0">Assistant Professor (Neurosurgery)</p>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 5 */}
                        <div className="col">
                            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1542868728-79f5b3a92aff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA4fHxkb2N0b3JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    className="card-img-top"
                                    style={{ height: '280px', objectFit: 'cover', objectPosition: 'top' }}
                                    alt="Dr. Jidan"
                                />
                                <div className="card-body p-3">
                                    <h5 className="card-title fw-bold mb-1" style={{ color: '#304770' }}>Dr. Jidan</h5>
                                    <p className="card-text text-primary fw-semibold m-0">Consultant, Neuro Surgery</p>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 6 */}
                        <div className="col">
                            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1609831647099-baaadf7dd44d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIwfHxkb2N0b3JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    className="card-img-top"
                                    style={{ height: '280px', objectFit: 'cover', objectPosition: 'top' }}
                                    alt="Dr. Semmi Khan"
                                />
                                <div className="card-body p-3">
                                    <h5 className="card-title fw-bold mb-1" style={{ color: '#304770' }}>Dr. Semmi Khan</h5>
                                    <p className="card-text text-primary fw-semibold m-0">Classified Specialist in Surgery</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default OurDoctors;