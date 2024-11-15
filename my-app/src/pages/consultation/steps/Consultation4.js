import React, { useState } from "react";
import { Link } from "react-router-dom";

function Consultation4({ nextStep }) {
  const [typeOfProperty, setTypeOfProperty] = useState("");
  const [typeError, setTypeError] = useState("");
  const handleNext = (e) => {
    e.preventDefault();
    if(!typeOfProperty){
      setTypeError("Field is required")
    } else {
      nextStep({ type_of_property: typeOfProperty });
    }
    // setStep(5);
  };

  return (
    <div className="consultationPage">
      <div className="w-100">
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
                <h2>What type of property?</h2>
                <ul className="consultationRadioBtn">
                  <li>
                    <input
                      type="radio"
                      name="property"
                      id="a"
                      onChange={() => setTypeOfProperty("1")}
                    />
                    <label htmlFor="a">
                      <span>A</span> apartment
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="property"
                      id="b"
                      onChange={() => setTypeOfProperty("2")}
                    />
                    <label htmlFor="b">
                      <span>B</span> house
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="property"
                      id="c"
                      onChange={() => setTypeOfProperty("3")}
                    />
                    <label htmlFor="c">
                      <span>C</span> restaurant
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="property"
                      id="d"
                      onChange={() => setTypeOfProperty("4")}
                    />
                    <label htmlFor="d">
                      <span>D</span> hotel
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="property"
                      id="e"
                      onChange={() => setTypeOfProperty("5")}
                    />
                    <label htmlFor="e">
                      <span>E</span> others
                    </label>
                  </li>
                  <div className="errorMsg">
                    {<p className="text-danger">{typeError}</p>}
                  </div>
                </ul>
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

export default Consultation4;


