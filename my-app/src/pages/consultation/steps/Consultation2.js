import React, { useState } from "react";
import { Link } from "react-router-dom";

function Consultation2({ nextStep }) {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");

  const nameHandler = (e) => {
    const value = e.target.value;
    const namePattern = /^[A-Za-z\s]*$/;
    
    if (namePattern.test(value)) {
      setName(value);
      setNameErr("");
    } else {
      setNameErr("Only letters are allowed");
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!name) {
      setNameErr("Name Field is required");
    } else {
      nextStep({ name });
    }
  };

  return (
    <div className="consultationPage">
      <div className="position-absolute w-100">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6">
              <Link to="/" className="loginLogo">
                <img src="assets/images/amuma-main-logo.svg" alt="Logo" />
              </Link>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
      <div className="container vh-100 d-flex align-items-center justify-content-start">
        <div className="consultationContent">
          <div className="row">
            <form>
              <div className="col-md-6 pe-md-5">
                <h2>What's your name?</h2>
                <input
                  type="text"
                  placeholder="NAME"
                  className="form-control"
                  value={name}
                  onInput={nameHandler}
                  pattern="[A-Za-z\s]+"
                  title="Only letters and spaces are allowed"
                />
                <div className="errorMsg">
                  {nameErr && <p className="text-danger">{nameErr}</p>}
                </div>
                <button onClick={handleNext} className="btn btn-secondary">
                  OK
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation2;
