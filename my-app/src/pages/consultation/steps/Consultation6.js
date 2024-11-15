import React, { useState } from "react";
import { Link } from "react-router-dom";

function Consultation6({ setError, nextStep }) {
    const [phone, setPhone] = useState("");
    const [phoneErr, setPhoneErr] = useState("");
    const handleNext = (e) => {
        e.preventDefault();
        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(phone)) {
            setPhoneErr("Please enter a valid 10-digit phone number");
        } else {
            setPhoneErr("");
            nextStep({ phone });
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
                                <h2>How can we reach you by phone?</h2>
                                <input
                                    type="text"
                                    name=""
                                    placeholder="PHONE"
                                    className="form-control"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                {phoneErr && <p className="text-danger">{phoneErr}</p>}
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

export default Consultation6;


