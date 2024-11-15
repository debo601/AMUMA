import React from "react";

function index() {
  return (
    <div>
      <header class="headerSection">
        <div class="header_1">
          <div class="container d-flex align-items-center justify-content-end">
            <ul class="d-flex align-items-center justify-content-end">
              <li>
                <a href="signIn">Consultation</a>
              </li>
              <li>
                <a href="">Showroom</a>
              </li>
              <li>
                <a href="">Reviews</a>
              </li>
              <li>
                <a href="contact">Contact</a>
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
                <div className="searchSection">
                  <input type="text" placeholder="SEARCH" />
                  <button type="submit"></button>
                </div>
              </div>
              <div class="col-md-3">
                <ul class="d-flex align-items-center justify-content-end">
                  {/* <!-- <li><a href="#"><img src="assets/images/person.svg" alt=""></a></li>
                            <li><a href="#"><img src="assets/images/favorite.svg" alt=""></a></li>
                            <li><a href="#"><img src="assets/images/local_mall.svg" alt=""></a></li> --> */}
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
      <div
        className="home_banner"
        style={{ backgroundImage: "url(assets/images/bannerImage.jpg)" }}
      >
        <div className="container">
          <h1>
            Commodo sed egestas egestas fringilla. Senectus et netus et
            malesuada fames.
          </h1>
          <a href="#" className="btn btn-primary">
            shop now
          </a>
        </div>
      </div>
      <section className="home_1">
        <div className="container">
          <h2>highlighted products</h2>
          <div className="home_1_slider">
            <article>
              <a href="#">
                <div className="prdtc_thumb">
                  <img src="assets/images/highlighted_pro_1.jpg" alt="" />
                  <button className="addWishlistBtn">
                    <i className="bi bi-heart"></i>
                  </button>
                </div>
                <h3 className="namePrice">
                  furniture piece name <span>$00.00</span>
                </h3>
              </a>
            </article>
            <article>
              <a href="#">
                <div className="prdtc_thumb">
                  <img src="assets/images/highlighted_pro_2.jpg" alt="" />
                  <button className="addWishlistBtn">
                    <i className="bi bi-heart"></i>
                  </button>
                </div>
                <h3 className="namePrice">
                  furniture piece name <span>$00.00</span>
                </h3>
              </a>
            </article>
            <article>
              <a href="#">
                <div className="prdtc_thumb">
                  <img src="assets/images/highlighted_pro_3.jpg" alt="" />
                  <button className="addWishlistBtn">
                    <i className="bi bi-heart"></i>
                  </button>
                </div>
                <h3 className="namePrice">
                  furniture piece name <span>$00.00</span>
                </h3>
              </a>
            </article>
            <article>
              <a href="#">
                <div className="prdtc_thumb">
                  <img src="assets/images/highlighted_pro_4.jpg" alt="" />
                  <button className="addWishlistBtn">
                    <i className="bi bi-heart"></i>
                  </button>
                </div>
                <h3 class="namePrice">
                  furniture piece name <span>$00.00</span>
                </h3>
              </a>
            </article>
            <article>
              <a href="#">
                <div class="prdtc_thumb">
                  <img src="assets/images/highlighted_pro_2.jpg" alt="" />
                  <button class="addWishlistBtn">
                    <i class="bi bi-heart"></i>
                  </button>
                </div>
                <h3 class="namePrice">
                  furniture piece name <span>$00.00</span>
                </h3>
              </a>
            </article>
            <article>
              <a href="#">
                <div class="prdtc_thumb">
                  <img src="assets/images/highlighted_pro_3.jpg" alt="" />
                  <button class="addWishlistBtn">
                    <i class="bi bi-heart"></i>
                  </button>
                </div>
                <h3 class="namePrice">
                  furniture piece name <span>$00.00</span>
                </h3>
              </a>
            </article>
            <article>
              <a href="#">
                <div class="prdtc_thumb">
                  <img src="assets/images/highlighted_pro_4.jpg" alt="" />
                  <button class="addWishlistBtn">
                    <i class="bi bi-heart"></i>
                  </button>
                </div>
                <h3 class="namePrice">
                  furniture piece name <span>$00.00</span>
                </h3>
              </a>
            </article>
            <article>
              <a href="#">
                <div class="prdtc_thumb">
                  <img src="assets/images/highlighted_pro_2.jpg" alt="" />
                  <button class="addWishlistBtn">
                    <i class="bi bi-heart"></i>
                  </button>
                </div>
                <h3 class="namePrice">
                  furniture piece name <span>$00.00</span>
                </h3>
              </a>
            </article>
          </div>
        </div>
      </section>
      <section class="home_2 pt-4">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <article>
                <div class="prdtc_thumb">
                  <img src="assets/images/homeImg_1.jpg" alt="" />
                </div>
                <h2>urban style</h2>
                <a href="#" class="btn btn-primary">
                  shop now
                </a>
              </article>
            </div>
            <div class="col-sm-6">
              <article>
                <div class="prdtc_thumb">
                  <img src="assets/images/homeImg_2.jpg" alt="" />
                </div>
                <h2>beach style</h2>
                <a href="#" class="btn btn-primary">
                  shop now
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      <div class="home_3">
        <div class="marquee">
          <div class="marquee_text">
            <ul class="marquee-content-primary">
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
            </ul>
            <ul class="marquee-content-secondary">
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
              <li>agmented reality available</li>
            </ul>
          </div>
        </div>

        {/* <!-- <span>agmented reality available</span>
        <span>agmented reality available</span>
        <span>agmented reality available</span>
        <span>agmented reality available</span>
        <span>agmented reality available</span>
        <span>agmented reality available</span>
        <span>agmented reality available</span> --> */}
      </div>

      <section class="home_4">
        <div class="container">
          <h2>why amuma?</h2>
          <div class="row pt-5 align-items-end">
            <div class="col-lg-3 col-sm-6">
              <img
                src="assets/images/amuma-designer-to-consumer-drifting-dunes-rgb.png"
                alt=""
              />
              <h4>heading 1</h4>
              <p>Commodo sed egestas egestas fringilla</p>
            </div>
            <div class="col-lg-3 col-sm-6">
              <img
                src="assets/images/amuma-customised-living-drifting-dunes-rgb.png"
                alt=""
              />
              <h4>heading 2</h4>
              <p>Commodo sed egestas egestas fringilla</p>
            </div>
            <div class="col-lg-3 col-sm-6">
              <img
                src="assets/images/amuma-sustainability-drifting-dunes-rgb.png"
                alt=""
              />
              <h4>heading 3</h4>
              <p>Commodo sed egestas egestas fringilla</p>
            </div>
            <div class="col-lg-3 col-sm-6">
              <img
                src="assets/images/amuma-viritual-design-drifting-dunes-rgb.png"
                alt=""
              />
              <h4>heading 4</h4>
              <p>Commodo sed egestas egestas fringilla</p>
            </div>
          </div>
        </div>
      </section>

      <section class="home_5 pt-4">
        <div class="container">
          <div class="row colorBox align-items-center">
            <div class="col-sm-6 px-sm-3">
              <h2>book a consult</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul class="d-flex align-items-center justify-content-around">
                <li>
                  <a href="#">book a time</a>
                </li>
                <li>
                  <a href="#">view projects</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6">
              <img src="assets/images/home-5.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section class="home_6 pt-4">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="home_6_thumb">
                <img src="assets/images/home-6a.jpg" alt="" />
              </div>
              <h3>Sleeping</h3>
            </div>
            <div class="col-sm-4">
              <div class="home_6_thumb">
                <img src="assets/images/home-6b.jpg" alt="" />
              </div>
              <h3>Living</h3>
            </div>
            <div class="col-sm-4">
              <div class="home_6_thumb">
                <img src="assets/images/home-6c.jpg" alt="" />
              </div>
              <h3>Office</h3>
            </div>
          </div>
        </div>
      </section>

      <section class="home_7">
        <div class="container text-center">
          <h2>Sign up for our newsletter</h2>
          <p>Say something about why they should sign up</p>
          <div class="row pt-0">
            <div class="col-md-6">
              <input
                class="form-control"
                type="text"
                placeholder="FIRST NAME"
              />
            </div>
            <div class="col-md-6">
              <input class="form-control" type="text" placeholder="LAST NAME" />
            </div>
            <div class="col-md-12">
              <input
                class="form-control"
                type="text"
                placeholder="YOUR EMAIL"
              />
            </div>
            <div class="col-md-12">
              <button type="submit" class="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <div class="home_8">
        <img src="assets/images/instaImages.jpg" alt="" />
        <a href="#" class="btn btn-secondary">
          follow us on instagram
        </a>
      </div>

      <footer class="footerSection">
        <div class="container">
          <div class="footer_1">
            <div class="row">
              <div class="col-md-4 pe-md-5">
                <a class="footer_logo" href="index.html">
                  <img src="assets/images/logo_footer.svg" alt="" />
                </a>
                <p style={{ marginBottom: "-15px" }}>
                  Curabitur gravida arcu ac tortor dignissim convallis aenean
                  et. Sed pulvinar proin gravida hendrerit lectus. Mollis
                  aliquam ut porttitor leo a diam sollicitudin tempor id.
                </p>
              </div>
              <div class="col-md-2">
                <h5>useful links</h5>
                <ul>
                  <li>
                    <a href="#">interior design service</a>
                  </li>
                  <li>
                    <a href="#">consultation</a>
                  </li>
                  <li>
                    <a href="#">showroom</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <h5>about us</h5>
                <ul>
                  <li>
                    <a href="#">About amuma</a>
                  </li>
                  <li>
                    <a href="#">showroom</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <h5>my account</h5>
                <ul>
                  <li>
                    <a href="#">my details</a>
                  </li>
                  <li>
                    <a href="#">my orders</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <h5>head office</h5>
                <ul>
                  <li>123 sussex st, city</li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-2"></div>
              <div class="col-md-2">
                <h5>shopping with us</h5>
                <ul>
                  <li>
                    <a href="#">returns</a>
                  </li>
                  <li>
                    <a href="#">delivery</a>
                  </li>
                  <li>
                    <a href="#">promotion terms</a>
                  </li>
                  <li>
                    <a href="#">warranties</a>
                  </li>
                  <li>
                    <a href="#">help centre</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <h5>help & support</h5>
                <ul>
                  <li>
                    <a href="#">help centre</a>
                  </li>
                  <li>
                    <a href="#">track delivery</a>
                  </li>
                  <li>
                    <a href="#">report a problem</a>
                  </li>
                  <li>
                    <a href="#">return product</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <h5>follow us</h5>
                <ul>
                  <li>
                    <a href="#">instagram</a>
                  </li>
                  <li>
                    <a href="#">facebook</a>
                  </li>
                  <li>
                    <a href="#">pinterest</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer_2">
            <div class="row align-items-center">
              <div class="col-md-6 order-2 order-md-1">
                <p>2024 Amuma Living. All rights reserved</p>
              </div>
              <div class="col-md-6 order-1 order-md-2 text-md-end">
                <ul class="d-flex align-items-center justify-content-end">
                  <li>
                    <a href="#">privacy</a>
                  </li>
                  <li>
                    <a href="#">terms</a>
                  </li>
                  <li>
                    <a href="#">sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- jQuery  -->
    <script src="assets/js/jquery-3.7.1.min.js"></script> */}

      {/* <!-- SLICK JS -->
    <script src="assets/vendor/slick/slick.min.js"></script>
    <script>
        $('.home_1_slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                breakpoint: 1201,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }

            ]
            }); */}
      {/* </script> */}

      {/* <!-- MENU -->
<script src="assets/vendor/mmenu/mmenu-light.js"></script>
<script>
  var menu = new MmenuLight(document.querySelector("#menu"), "(max-width: 991px)");

  var navigator = menu.navigation({
    selectedClass: 'Selected',
    slidingSubmenus: true,
    theme: 'dark',
    title: 'Menu'
  });

  var drawer = menu.offcanvas({
    position: 'left'
  });

  //  Open the menu.
  document
    .querySelector('a[href="#menu"]')
    .addEventListener("click", (evnt) => {
      evnt.preventDefault();
      drawer.open();
    });
</script> */}

      {/* <!-- MARQUEE -->
<script>
    $(document).ready(function(){
        var marquee_width = $(".marquee-content-primary").width();
        document.documentElement.style.setProperty('--marquee-padding', marquee_width + 'px');
    });
</script> */}
    </div>
  );
}

export default index;
