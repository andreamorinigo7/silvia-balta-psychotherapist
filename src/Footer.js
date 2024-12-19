import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer ">
      <div className="row  ">
        <div className="col-6 ps-3 ">
          <p className="ps-5 ">
            Silvia Balta Espinal creats a soothing environent <br /> to make
            therapy a natural and easy transition
          </p>
          <div className="social-media-links ps-5 mt-5 ">
            <span>
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </span>
            <span>
              <FontAwesomeIcon icon="fa-brands fa-youtube" />
            </span>
          </div>
        </div>

        <div className="col-6 ps-5 site-links">
          <a href="/about">Biography</a>
          <br />
          <br />
          <a href="/services">Services</a>
          <br />
          <br />
          <a href="/contact">Inquire</a>
        </div>
      </div>
      <hr />
    </div>
  );
}
