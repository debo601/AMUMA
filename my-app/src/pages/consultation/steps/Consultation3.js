import React, { useState } from "react";
import { Link } from "react-router-dom";

function Consultation3({ nextStep }) {
  const [typeOfProject, setTypeOfProject] = useState("");
  const [typeError, setTypeError] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if(!typeOfProject){
      setTypeError("Field is required");
    } else{
      nextStep({ type_of_project: typeOfProject });
    }
    // setStep(4);
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
                <h2>Great! What type of project are you interested in</h2>
                <ul className="consultationRadioBtn">
                  <li>
                    <input
                      type="radio"
                      name="interested_in"
                      id="a"
                      onChange={() => setTypeOfProject("1")}
                    />
                    <label htmlFor="a">
                      <span>A</span> project renovation
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="interested_in"
                      id="b"
                      onChange={() => setTypeOfProject("2")}
                    />
                    <label htmlFor="b">
                      <span>B</span> interior service
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="interested_in"
                      id="c"
                      onChange={() => setTypeOfProject("3")}
                    />
                    <label htmlFor="c">
                      <span>C</span> home decor & furniture
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="interested_in"
                      id="d"
                      onChange={() => setTypeOfProject("4")}
                    />
                    <label htmlFor="d">
                      <span>D</span> others
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

export default Consultation3;

