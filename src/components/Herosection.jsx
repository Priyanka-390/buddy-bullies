import React from "react";

const Herosection = () => {
  function openNav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle("overflow_hidden");
    document.getElementById("menubtn-icon").classList.toggle("cross");
  }
  return (
    <div>
      <section className="bg-img min-vh-100 d-flex flex-column z-1">
        <nav className="pt-4">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <a
                href=""
                className="text-white text-decoration-none ff-poppins fs-21 fw-semibold lh-150"
              >
                Logo
              </a>

              <ul
                className="gap-80 d-flex justify-content-center align-items-center  mobile_view ps-0"
                id="navbar"
              >
                <li className="text-decoration-none">
                  <a
                    href="#mining"
                    className="ff-poppins nav-line position-relative text-decoration-none fs-18 text-white list-unstyled fw-medium lh-nor "
                    onclick="openNav()"
                  >
                    Minting
                  </a>
                </li>
                <li className="text-decoration-none">
                  <a
                    href="#roadmap"
                    className="ff-poppins nav-line position-relative text-decoration-none fs-18 text-white list-unstyled fw-medium lh-nor "
                    onclick="openNav"
                  >
                    Road Map
                  </a>
                </li>
                <li className="text-decoration-none">
                  <a
                    href="#faq"
                    className="ff-poppins nav-line position-relative text-decoration-none fs-18 text-white list-unstyled fw-medium lh-nor "
                    onclick="openNav()"
                  >
                    Faq
                  </a>
                </li>
                <li className="text-decoration-none">
                  <a
                    href="#team"
                    className="ff-poppins nav-line position-relative text-decoration-none fs-18 text-white list-unstyled fw-medium lh-nor "
                    onclick="openNav()"
                  >
                    Team
                  </a>
                </li>
                <li className="text-decoration-none">
                  <a
                    href="#join"
                    className="ff-poppins nav-line position-relative text-decoration-none fs-18 text-white list-unstyled fw-medium lh-nor "
                    onclick="openNav()"
                  >
                    Join Us
                  </a>
                </li>
              </ul>
              <div
                id="menubtn-icon"
                onClick={openNav}
                class=" z-3 pe-2 pt-2 d-lg-none d-block"
              >
                <div class="line2"></div>
                <div class="line3 my-2"></div>
                <div class="line4"></div>
              </div>
              <input type="checkbox" id="menuicon" hidden />
            </div>
          </div>
        </nav>
        <section className="flex-grow-1 d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="d-flex justify-content-center  flex-column">
              <h1 className="max-w-515 ff-poppins fs-70 fw-normal lh-124 text-white">
                Vitae nunc,<span className="fw-bold"> blandit a odio</span>
              </h1>
              <p className="pt-lg-4 pt-md-3 pt-2  max-w-547 text-white ff-poppins fs-20 opacity-70 fw-medium lh-205">
                Semper in egestas risus id tempus. Pellentesque dolor eros
                sollicitudin feugiat ut odio semper. Mattis fermentum eget ut
                vestibulum dolor diam
              </p>
            </div>
            <button className="text-blue ff-poppins fs-25 fw-medium lh-nor getbtn mx-auto mt-lg-5 mt-md-3 mt-2">
              Get Started
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Herosection;
