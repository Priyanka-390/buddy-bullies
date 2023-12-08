import React from "react";
import img7 from '../assets/images/img7.png'
import img8 from '../assets/images/img8.png'
import img9 from '../assets/images/img9.png'


const Section5 = () => {
  return (
    <div>
      <section className="bg2-blue py-5 position-relative overflow-x-clip z-1">
        <div className="container2" id="faq">
          <div className="d-flex justify-content-center align-items-center">
            <h2 className="text-white ff-poppins pb-md-5 pb-3 fs-50 fw-semibold lh-136">
              FAQs
            </h2>
          </div>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed ff-mon text-white fs-20 fw-medium lh-nor"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What’s the blockchain the buddybullies call home ?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body text-white ff-mon fs-16 fw-medium lh-nor opacity-70">
                  Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
                  mattis adipiscing ornare arcu vitae enim. Proin turpis enim
                  egestas sed in accumsan, feugiat neque turpis. Fringilla dui
                  donec nullam faucibus vitae non, integer. Non.
                </div>
              </div>
            </div>
            <div class="accordion-item pt-3">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed ff-mon text-white fs-20 fw-medium lh-nor"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  What’s the blockchain the buddybullies call home ?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body text-white ff-mon fs-16 fw-medium lh-nor opacity-70">
                  Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
                  mattis adipiscing ornare arcu vitae enim. Proin turpis enim
                  egestas sed in accumsan, feugiat neque turpis. Fringilla dui
                  donec nullam faucibus vitae non, integer. Non.
                </div>
              </div>
            </div>
            <div class="accordion-item pt-3">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed ff-mon text-white fs-20 fw-medium lh-nor"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  What’s the blockchain the buddybullies call home ?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body text-white ff-mon fs-16 fw-medium lh-nor opacity-70">
                  Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
                  mattis adipiscing ornare arcu vitae enim. Proin turpis enim
                  egestas sed in accumsan, feugiat neque turpis. Fringilla dui
                  donec nullam faucibus vitae non, integer. Non.
                </div>
              </div>
            </div>
            <div class="accordion-item pt-3">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed ff-mon text-white fs-20 fw-medium lh-nor"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsefour"
                  aria-expanded="false"
                  aria-controls="flush-collapsefour"
                >
                  What’s the blockchain the buddybullies call home ?
                </button>
              </h2>
              <div
                id="flush-collapsefour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body text-white ff-mon fs-16 fw-medium lh-nor opacity-70">
                  Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
                  mattis adipiscing ornare arcu vitae enim. Proin turpis enim
                  egestas sed in accumsan, feugiat neque turpis. Fringilla dui
                  donec nullam faucibus vitae non, integer. Non.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-lg-4" id="team">
          <div className="d-flex justify-content-center pt-4 align-items-center">
            <h2 className="text-white ff-poppins pt-md-5 pt-4 fs-50 fw-semibold lh-136">
             Our Team
            </h2>
          </div>
          <div className="row ">
            <div className="col-lg-4 pt-lg-4 pt-2 col-md-6 col-12 d-flex flex-column justify-content-center align-items-center">
              <img src={img7} alt="img7" />
              <p className="pt-md-4 pt-3 ff-poppins text-white fs-30 lh-136 fw-medium">Prime Bullister </p>
              <p className="ff-poppins text-white fs-18 fw-normal lh-136">Pruduct Designer</p>
            </div>
             <div className="col-lg-4 pt-lg-4 pt-2 col-md-6 col-12 d-flex flex-column justify-content-center align-items-center">
              <img src={img8} alt="img8" />
              <p className="pt-md-4 pt-3 ff-poppins text-white fs-30 lh-136 fw-medium">Solvador Bulli</p>
              <p className="ff-poppins text-white fs-18 fw-normal lh-136">Artist</p>
            </div>
             <div className="col-lg-4 pt-lg-4 pt-2 col-md-6 col-12 d-flex flex-column justify-content-center align-items-center">
              <img src={img9} alt="img9" />
              <p className="pt-md-4 pt-3 ff-poppins text-white fs-30 lh-136 fw-medium">Meta Bully</p>
              <p className="ff-poppins text-white fs-18 fw-normal lh-136">Developer</p>
            </div>
          </div>
        </div>
        <div className="ellipse4"></div>
      </section>
    </div>
  );
};

export default Section5;
