import React from "react";
// import "./pages/contact";

function contact() {
  return (
    <section className="pt-0 pb-5">
      <div className="container" style={{ maxWidth: "725px" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="contactPageForm">
              <label for="">First & Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="John Doe"
              />
              <label for="">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="john@mail.com"
              />
              <label for="">Subject</label>
              <input
                type="text"
                className="form-control"
                placeholder="I need a help"
              />
              <label for="">Message</label>
              <textarea
                name=""
                id=""
                className="form-control"
                placeholder="Type you message"
              ></textarea>
              <button className="btn btn-secondary" type="submit">
                Send
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <ul className="contactPageDetails">
              <li>
                <span className="icon">
                  <img src="assets/images/mail.svg" alt="" />
                </span>
                <span>
                  support@brainwave.io <br />
                  contact@brainwave.io
                </span>
              </li>
              <li>
                <span className="icon">
                  <img src="assets/images/map.svg" alt="" />
                </span>
                <span>
                  34 Madison Street, <br />
                  NY, USA 10005
                </span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default contact;
