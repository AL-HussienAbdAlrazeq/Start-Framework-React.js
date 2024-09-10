import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return <>
    <footer className="pt-5 text-center">
      <div className="container">
        <div className="row">
          {/* LOCATION  */}
          <div className="col-md-4">
            <div className="text-white">
              <h2 className="fw-bold">LOCATION</h2>
              <p>31 Youssef El Degwy Street</p>
              <p>Ain Shams</p></div>
          </div>

          {/* ICONS  */}
          <div className="col-md-4">
            <div className="text-white">
              <h2 className="fw-bold">AROUND THE WEB</h2>
              <div className="icon my-3 d-flex justify-content-center align-items-center">
                <div className="icon2 d-flex justify-content-center align-items-center me-2">
                  <Link to={'https://www.facebook.com/hessen.abdalrazek.7'}><i class="fa-brands fa-facebook fa-xl text-white "></i></Link>
                </div>
                <div className="icon2 d-flex justify-content-center align-items-center me-2">
                  <Link to={'https://www.linkedin.com/in/elhussein-abd-alrazzaq-1ab013290/'}><i class="fa-brands fa-linkedin fa-xl text-white"></i></Link>
                </div>
                <div className="icon2 d-flex justify-content-center align-items-center me-2">
                  <Link to={'https://github.com/AL-HussienAbdAlrazeq'}><i class="fa-brands fa-github fa-xl text-white"></i></Link>
                </div>
                <div className="icon2 d-flex justify-content-center align-items-center me-2">
                  <Link to={''}><i class="fa-brands fa-instagram fa-xl text-white"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="text-white">
              <h2 className="fw-bold">ABOUT FREELANCE</h2>
              <p>Freelance is a free to use , licensed Bootstrap theme Created By Hussein</p>

            </div>
          </div>
        </div>
      </div>

      <div className="text-white py-4  footer-feet">
        <p>©2021 Nadine Coelho | All Rights Reserved</p>
      </div>
    </footer>


  </>
}

export default Footer;
