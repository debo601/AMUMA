import React from "react";

function SignUp() {
  return (
    <div>
      <div className="loginSection">
        <div class="container">
          <div class="row pt-5">
            <div class="col-md-6">
              <a href="index.html" class="loginLogo">
                <img src="assets/images/amuma-main-logo.svg" alt="" />
              </a>
            </div>
            <div class="col-md-6">
              <div class="loginBox">
                <div class="d-flex align-items-center justify-content-end">
                  <ul>
                    <li>
                      <a href="#">Login</a>
                    </li>
                    <li>
                      <a href="#" class="active">
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
                <h2 class="pt-5">Sign Up</h2>
                <label for="">Enter your username or email address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username or email address"
                />
                <label for="">Enter your Name</label>y
                <input type="text" class="form-control" placeholder="Name" />
                <label for="">Enter your Password</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                />
                <label for="">Confirm your Password</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Confirm Password"
                />
                <div class="d-flex align-items-center justify-content-end">
                  <button type="submit" class="btn btn-secondary">
                    Sign up
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

export default SignUp;
