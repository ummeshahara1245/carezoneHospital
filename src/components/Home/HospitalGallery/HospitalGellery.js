import React from 'react';

const HospitalGallery = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                {/* Heading */}
                <div className="text-center mb-5">
                    <h2 className="fw-bolder display-5 text-uppercase">
                        Our Hospital <span style={{ color: '#304770' }}>Gallery</span>
                    </h2>
                    <p className="text-secondary lead">Glimpses of our modern facilities and compassionate care environment</p>
                </div>

                {/* Gallery Grid */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                    {/* Image 1 */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-3">
                            <img
                                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                className="card-img-top object-cover img-hover"
                                style={{ height: '260px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                alt="Hospital Facility"
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    </div>

                    {/* Image 2 */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-3">
                            <img
                                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                className="card-img-top object-cover img-hover"
                                style={{ height: '260px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                alt="Medical Consultation"
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    </div>

                    {/* Image 3 */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-3">
                            <img
                                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                className="card-img-top object-cover img-hover"
                                style={{ height: '260px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                alt="Operation Theatre"
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    </div>

                    {/* Image 4 */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-3">
                            <img
                                src="https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                className="card-img-top object-cover img-hover"
                                style={{ height: '260px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                alt="Patient Ward"
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    </div>

                    {/* Image 5 */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-3">
                            <img
                                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                className="card-img-top object-cover img-hover"
                                style={{ height: '260px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                alt="Laboratory"
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    </div>

                    {/* Image 6 */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-3">
                            <img
                                src="https://images.unsplash.com/photo-1565307528294-f70f3c7094e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                className="card-img-top object-cover img-hover"
                                style={{ height: '260px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                alt="Clinic Counter"
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    </div>

                    {/* Image 7 */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-3">
                            <img
                                src="https://images.unsplash.com/photo-1619975101918-6d27886e8c6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                className="card-img-top object-cover img-hover"
                                style={{ height: '260px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                alt="Emergency Care"
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    </div>

                    {/* Image 8 */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-3">
                            <img
                                src="https://images.unsplash.com/photo-1578991624414-276ef23a534f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                className="card-img-top object-cover img-hover"
                                style={{ height: '260px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                alt="ICU Unit"
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    </div>

                    {/* Image 9 */}
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-3">
                            <img
                                src="https://images.pexels.com/photos/8460049/pexels-photo-8460049.jpeg"
                                className="card-img-top object-cover img-hover"
                                style={{ height: '260px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                alt="Pediatric Department"
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HospitalGallery;