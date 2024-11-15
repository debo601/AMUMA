import React from "react";
import { Link } from "react-router-dom";

function Consultation1({ setStep, nextStep }) {
    const handleNext = () => {
        nextStep({});
        setStep(2)
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
                    <div className="row">
                        <div className="col-md-6 pe-5">
                            <h2>
                                Take the survey. <br /> Get inspired.
                            </h2>
                            <p>Consult with our designers today</p>
                            <button onClick={handleNext} className="btn btn-secondary">
                                Start now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Consultation1;

