import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// আপনার আপলোড করা ইমেজটি এখানে ইম্পোর্ট করা হয়েছে
import stethoscopeIcon from '../../../images/hospital.jpg';

const Navbar = () => {
    const { logOut, user } = useAuth();

    return (
        <header className="bg-white shadow-sm sticky-top border-bottom border-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light py-2">
                    <div className="container-fluid px-0">

                        {/* Brand Logo & Name */}
                        <Link to="/home" className="navbar-brand d-flex align-items-center gap-2">
                            <img
                                src={stethoscopeIcon}
                                style={{
                                    height: '42px',
                                    width: '42px',
                                    objectFit: 'contain'
                                }}
                                alt="CareZone Stethoscope Logo"
                            />
                            <span className="fw-bold tracking-wide" style={{ color: '#304770', fontSize: '1.35rem' }}>
                                Care<span className="text-primary">Zone</span>
                            </span>
                        </Link>

                        {/* Toggler Button for Mobile */}
                        <button
                            className="navbar-toggler border-0 shadow-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Navbar Links & Actions */}
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto align-items-lg-center gap-2">
                                <NavLink to="/home" className={({ isActive }) => `nav-link fw-semibold px-2 ${isActive ? 'text-primary' : 'text-secondary'}`}>Home</NavLink>
                                <NavLink to="/service" className={({ isActive }) => `nav-link fw-semibold px-2 ${isActive ? 'text-primary' : 'text-secondary'}`}>About Us</NavLink>
                                <NavLink to="/Our-Doctors" className={({ isActive }) => `nav-link fw-semibold px-2 ${isActive ? 'text-primary' : 'text-secondary'}`}>Our Doctors</NavLink>
                                <NavLink to="/Booking-appointment" className={({ isActive }) => `nav-link fw-semibold px-2 ${isActive ? 'text-primary' : 'text-secondary'}`}>Booking Appointment</NavLink>
                                <NavLink to="/contact" className={({ isActive }) => `nav-link fw-semibold px-2 ${isActive ? 'text-primary' : 'text-secondary'} me-lg-3`}>Contact</NavLink>

                                {/* Authentication Section */}
                                <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-3 pt-2 pt-lg-0 border-top border-lg-0">
                                    {user?.email && (
                                        <span className="text-secondary small fw-medium">
                                            Logged in as: <strong className="text-dark">{user.displayName || 'User'}</strong>
                                        </span>
                                    )}

                                    {user?.email ? (
                                        <button
                                            onClick={logOut}
                                            className="btn btn-outline-danger btn-sm px-4 rounded-pill fw-bold"
                                        >
                                            Log-out
                                        </button>
                                    ) : (
                                        <Link to="/login">
                                            <button className="btn btn-primary btn-sm px-4 rounded-pill fw-bold shadow-sm" style={{ backgroundColor: '#304770', borderColor: '#304770' }}>
                                                Log In
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;