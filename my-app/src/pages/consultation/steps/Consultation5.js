import React, { useState } from "react";
import { Link } from "react-router-dom";

function Consultation5({ setError, error, nextStep }) {
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");

    const emailHander = (e) => {
        setEmail(e.target.value);
        setEmailErr("");
        setError("");
    }
    const handleNext = (e) => {
        e.preventDefault();
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setEmailErr("Please enter a valid email address");
        } else {
            setEmailErr("");
            nextStep({ email });
        }

    };

    return (
        <div className="consultationPage">
            <div className="position-absolute w-100">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-6">
                            <Link to="/" className="loginLogo">
                                <img src="assets/images/amuma-main-logo.svg" alt="" />
                            </Link>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
            <div className="container vh-100 d-flex align-items-center justify-content-start">
                <div className="consultationContent">
                    <form>
                        <div className="row">
                            <div className="col-md-6 pe-md-5">
                                <h2>Perfect! Is there an email where we can reach you?</h2>
                                <input
                                    type="text"
                                    name=""
                                    placeholder="EMAIL"
                                    className="form-control"
                                    value={email}
                                    onChange={emailHander}
                                />
                                {error && <p className="text-danger">{error}</p>}
                                {emailErr && <p className="text-danger">{emailErr}</p>}
                                <button onClick={handleNext} className="btn btn-secondary">
                                    OK
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Consultation5;


