import React from "react";
function Home() {
  return (
    <div>
      <header class="headerSection">
        <div class="header_1">
          <div class="container d-flex align-items-center justify-content-end">
            <ul class="d-flex align-items-center justify-content-end">
              <li>
                <a href="#">Consultation</a>
              </li>
              <li>
                <a href="#">Showroom</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="header_2 d-flex align-items-center">
          <a href="#menu" class="menuIcon">
            <img src="assets/images/m-menu.svg" alt />
          </a>
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-md-3">
                <a class="logo" href="index.html">
                  <img src="assets/images/amuma-logo.svg" alt="" />
                </a>
              </div>
              <div class="col-md-6">
                <div class="searchSection">
                  <input type="text" placeholder="SEARCH" />
                  <button type="submit"></button>
                </div>
              </div>
              <div class="col-md-3">
                <ul class="d-flex align-items-center justify-content-end">
                  {/* <li><a href="#"><img src="assets/images/person.svg" alt=""></a></li>
                            <li><a href="#"><img src="assets/images/favorite.svg" alt=""></a></li>
                            <li><a href="#"><img src="assets/images/local_mall.svg" alt=""></a></li> */}
                  <li>
                    <a href="#">
                      <i class="bi bi-person"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="bi bi-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="bi bi-briefcase"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div class="container">
            <div id="menu">
              <ul>
                <li>
                  <a href="#">living</a>
                </li>
                <li>
                  <a href="#">dining</a>
                </li>
                <li>
                  <a href="#">bedroom</a>
                </li>
                <li>
                  <a href="#">office</a>
                </li>
                <li>
                  <a href="#">outdoor</a>
                </li>
                <li>
                  <a href="#">design tools</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Home;
