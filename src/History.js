import React from "react";
import "./History.css";

export default function History() {
  return (
    <div className="history">
      <div className="row">
        <div className="col-lg-3 mt-5 ">
          <h4 className="content-title">Notable History:</h4>
        </div>
        <div className="col-lg-3 mt-5">
          <div className="card">
            <h4 className="title-card">Specialities</h4>

            <ul className="detail-card mt-5">
              <li>Family & Couple Therapy</li>
              <li>Interracial Partnerships</li>
              <li>Migration and Immigration</li>
              <li>Fertility Issues </li>
              <li>Anxiety/Depression</li>
              <li>Trauma</li>
              <li>
                Life transitions (dating, parenthood, career decisions,
                separation, divorce)
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 mt-5">
          <div className="card">
            <h4 className="title-card">Certifications</h4>

            <ul className="detail-card mt-5">
              <li>
                Family and Couple Therapy from Ackerman Institute for the
                Family.
              </li>
              <li>EMDR from the Institute for Creative Mindfulness. </li>
              <li>Integrative Somatic Trauma Therapy from The Embody Lab. </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 mt-5">
          <div className="card">
            <h4 className="title-card">Ackerman</h4>
            <p className="date-card mt-3">2011-2024</p>
            <p className="detail-card mt-5">
              I founded TKD with a passion for creating strategic and beautiful
              brands and websites. Over time, it has evolved into a premium
              creative agency, proudly serving custom home builders, architects,
              interior designers, medical spas, lawyers, therapists,
              dermatologists, and many more .
            </p>
          </div>
        </div>
      </div>
      <div className="hero-2">
        <h3>
          Does this sound like you? Inquire today to brand your business with
          TKD.
        </h3>
        <a href="/contact" className="btn btn-branding-outline">
          Send inquiry
        </a>
      </div>
    </div>
  );
}
