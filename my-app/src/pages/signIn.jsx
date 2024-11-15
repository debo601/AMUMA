import React from "react";

function SignIn() {
  return (
    <div>
      <div className="loginSection">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6">
              <a href="index.html" className="loginLogo">
                <img src="assets/images/amuma-main-logo.svg" alt="" />
              </a>
            </div>
            <div className="col-md-6">
              <div className="loginBox">
                <div className="d-flex align-items-center justify-content-end">
                  <ul>
                    <li>
                      <a href="#" className="active">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li>
                  </ul>
                </div>
                <h2>Sign in</h2>
                <label for="">Enter your username or email address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username or email address"
                />
                <label for="">Enter your Password</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />
                <a href="#" className="forgot">
                  Forgot Password
                </a>
                <div className="d-flex align-items-center justify-content-end">
                  <button type="submit" className="btn btn-secondary">
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
