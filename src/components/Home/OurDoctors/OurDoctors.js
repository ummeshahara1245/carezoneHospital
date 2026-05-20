import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
// 🌟 যদি তোমার কোনো কাস্টম সিএসএস ফাইল থাকে, তবে এই লাইনের কমেন্ট তুলে পাথ ঠিক করে নিতে পারো:
// import './OurDr.css'; 

const OurDoctors = () => {
    return (
        <div style={{ backgroundColor: '#f8fafd' }}>
            {/* Top Slider Section */}
            <HeaderMain />

            {/* Featured Services Section */}
            <section className="container py-5">
                <div className="text-center mb-5">
                    <span className="text-uppercase fw-bold small tracking-wider" style={{ color: '#5383d3', letterSpacing: '2px' }}>CareZone Capabilities</span>
                    <h2 className="fw-black display-5 text-uppercase mt-2" style={{ color: '#304770' }}>Featured Services</h2>
                    <div className="mx-auto my-3" style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #5383d3, #304770)', borderRadius: '2px' }}></div>
                    <p className="text-secondary lead max-w-md mx-auto">We cover a big variety of medical services</p>
                </div>

                {/* Services Grid */}
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {/* CT-Scan */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                            <img
                                src="https://images.pexels.com/photos/7088520/pexels-photo-7088520.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                className="card-img-top"
                                style={{ height: '220px', objectFit: 'cover' }}
                                alt="CT-Scan"
                            />
                            <div className="card-body p-4 text-start">
                                <h5 className="card-title fw-bold mb-3" style={{ color: '#304770' }}>128 SLICE CT-SCAN</h5>
                                <p className="card-text text-secondary small lh-base">
                                    A clear view for a caring doctor can only get you cured. We trust world brand machines and efficient hands can scan it best. The following CT Scan tests are available here 24 hours.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ICU & CCU */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                            <img
                                src="https://images.pexels.com/photos/6129052/pexels-photo-6129052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                className="card-img-top"
                                style={{ height: '220px', objectFit: 'cover' }}
                                alt="ICU CCU"
                            />
                            <div className="card-body p-4 text-start">
                                <h5 className="card-title fw-bold mb-3" style={{ color: '#304770' }}>ICU & CCU</h5>
                                <p className="card-text text-secondary small lh-base">
                                    A dedicated Intensive Care Unit (ICU) specifically for neurosurgery and cardiac patients. Equipped with specialized nursing care and the latest monitoring technology.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pathology */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                            <img
                                src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=500"
                                className="card-img-top"
                                style={{ height: '220px', objectFit: 'cover' }}
                                alt="Pathology"
                            />
                            <div className="card-body p-4 text-start">
                                <h5 className="card-title fw-bold mb-3" style={{ color: '#304770' }}>PATHOLOGY</h5>
                                <p className="card-text text-secondary small lh-base">
                                    From tiny to advanced setups, we have it all in our laboratory to assure you accurate diagnostics and premium reports utilizing highly precise modern technology.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Our Doctors Section */}
            <section className="py-5" style={{ backgroundColor: '#f3f7fc' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="text-uppercase fw-bold small tracking-wider" style={{ color: '#5383d3', letterSpacing: '2px' }}>Our Team</span>
                        <h2 className="fw-black display-5 text-uppercase mt-2" style={{ color: '#304770' }}>Our Doctors</h2>
                        <div className="mx-auto my-3" style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #5383d3, #304770)', borderRadius: '2px' }}></div>
                        <p className="text-secondary lead">Meet our team of world-class medical professionals</p>
                    </div>

                    {/* Doctors Grid */}
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                        {/* Doctor 1 */}
                        <div className="col">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden text-center bg-white p-2">
                                <div className="rounded-3 overflow-hidden" style={{ height: '280px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                                        alt="Dr. Kim Sultan"
                                    />
                                </div>
                                <div className="card-body p-3">
                                    <h5 className="fw-bold mb-1" style={{ color: '#304770' }}>Dr. Kim Sultan</h5>
                                    <p className="small fw-semibold m-0" style={{ color: '#5383d3' }}>Medicine Specialist</p>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 2 */}
                        <div className="col">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden text-center bg-white p-2">
                                <div className="rounded-3 overflow-hidden" style={{ height: '280px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYxfHxkb2N0b3JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                                        alt="Dr. Jenny"
                                    />
                                </div>
                                <div className="card-body p-3">
                                    <h5 className="fw-bold mb-1" style={{ color: '#304770' }}>Dr. Jenny</h5>
                                    <p className="small fw-semibold m-0" style={{ color: '#5383d3' }}>Associate Professor (Urology)</p>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 3 */}
                        <div className="col">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden text-center bg-white p-2">
                                <div className="rounded-3 overflow-hidden" style={{ height: '280px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1612523138351-4643808db8f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                                        alt="Dr. Sahal"
                                    />
                                </div>
                                <div className="card-body p-3">
                                    <h5 className="fw-bold mb-1" style={{ color: '#304770' }}>Dr. Sahal</h5>
                                    <p className="small fw-semibold m-0" style={{ color: '#5383d3' }}>Consultant, Cardiology</p>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 4 */}
                        <div className="col">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden text-center bg-white p-2">
                                <div className="rounded-3 overflow-hidden" style={{ height: '280px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjFfHxkb2N0b3JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                                        alt="Dr. Sayra"
                                    />
                                </div>
                                <div className="card-body p-3">
                                    <h5 className="fw-bold mb-1" style={{ color: '#304770' }}>Dr. Sayra</h5>
                                    <p className="small fw-semibold m-0" style={{ color: '#5383d3' }}>Assistant Professor (Neurosurgery)</p>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 5 */}
                        <div className="col">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden text-center bg-white p-2">
                                <div className="rounded-3 overflow-hidden" style={{ height: '280px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1542868728-79f5b3a92aff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA4fHxkb2N0b3JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                                        alt="Dr. Jidan"
                                    />
                                </div>
                                <div className="card-body p-3">
                                    <h5 className="fw-bold mb-1" style={{ color: '#304770' }}>Dr. Jidan</h5>
                                    <p className="small fw-semibold m-0" style={{ color: '#5383d3' }}>Consultant, Neuro Surgery</p>
                                </div>
                            </div>
                        </div>

                        {/* Doctor 6 */}
                        <div className="col">
                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden text-center bg-white p-2">
                                <div className="rounded-3 overflow-hidden" style={{ height: '280px' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1609831647099-baaadf7dd44d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIwfHxkb2N0b3JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                                        alt="Dr. Semmi Khan"
                                    />
                                </div>
                                <div className="card-body p-3">
                                    <h5 className="fw-bold mb-1" style={{ color: '#304770' }}>Dr. Semmi Khan</h5>
                                    <p className="small fw-semibold m-0" style={{ color: '#5383d3' }}>Classified Specialist in Surgery</p>
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