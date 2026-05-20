import React, { useState } from 'react';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile
} from "firebase/auth";
import initializeAuthentication from "./firebase/firebase.init";
import './login.css';

// Firebase Initialize
initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

    // 🌐 Google Sign In
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log("Google User:", user);
                setError('');
            })
            .catch(error => setError(error.message));
    };

    // 🔄 Switch between Login and Registration
    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
        setError(''); // সুইচ করার সময় এরর মেসেজ ক্লিয়ার হবে
    };

    // 📝 Form Submit Handler
    const handleRegistration = (e) => {
        e.preventDefault();

        // পাসওয়ার্ড ভ্যালিডেশন
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain at least 2 uppercase letters.');
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        } else {
            registerNewUser(email, password);
        }
    };

    // 🔐 Existing User Login
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log("Logged In User:", user);
                setError('');
            })
            .catch(error => setError(error.message));
    };

    // 🆕 New User Registration
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log("Registered User:", user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => setError(error.message));
    };

    // 👤 Update Profile Name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => console.log("Profile Name Updated!"))
            .catch(error => console.log(error.message));
    };

    // 📧 Verification Email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => alert("A verification email has been sent to your email address."));
    };

    // 🔑 Reset Password
    const handleResetPassword = () => {
        if (!email) {
            setError("Please enter your email address first to reset password.");
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => alert("Password reset link sent to your email!"))
            .catch(error => setError(error.message));
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5 shadow-lg p-4 rounded-4 bg-white">

                    {/* Header */}
                    <h3 className="text-primary text-center mb-4 fw-bold">
                        Please {isLogin ? 'Login' : 'Register'}
                    </h3>

                    {/* Authentication Form */}
                    <form onSubmit={handleRegistration}>

                        {/* Name Field (Visible only during Registration) */}
                        {!isLogin && (
                            <div className="mb-3">
                                <label htmlFor="inputName" className="form-label fw-semibold text-secondary">Name</label>
                                <input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control py-2"
                                    id="inputName"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                        )}

                        {/* Email Field */}
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label fw-semibold text-secondary">Email Address</label>
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control py-2"
                                id="inputEmail"
                                placeholder="name@example.com"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="form-label fw-semibold text-secondary">Password</label>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control py-2"
                                id="inputPassword"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {/* Toggle Checkbox */}
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                onChange={toggleLogin}
                                className="form-check-input"
                                id="toggleCheck"
                            />
                            <label className="form-check-label text-muted" htmlFor="toggleCheck">
                                Already Registered?
                            </label>
                        </div>

                        {/* Error Message Display */}
                        {error && <div className="alert alert-danger p-2 text-center small mb-3">{error}</div>}

                        {/* Submit & Reset Buttons */}
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-3">
                            <button type="submit" className="btn btn-primary px-4 py-2 fw-semibold shadow-sm">
                                {isLogin ? 'Login' : 'Register'}
                            </button>
                            <button
                                type="button"
                                onClick={handleResetPassword}
                                className="btn btn-link p-0 text-decoration-none small text-primary fw-semibold"
                            >
                                Forgot password?
                            </button>
                        </div>
                    </form>

                    <div className="text-center my-3 text-muted small">OR</div>

                    {/* Google Sign-In Button */}
                    <div className="d-grid">
                        <button
                            className="btn btn-outline-danger py-2 fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm"
                            onClick={handleGoogleSignIn}
                        >
                            <i className="fab fa-google"></i> Sign In With Google
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;