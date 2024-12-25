import React from "react";
import "./About.css";
import History from "./History";
import silvia from "./silvia.png";

export default function About() {
  return (
    <div className="about">
      <div className="row  justify-content-center">
        <div className="col-lg-6">
          <div className="content">
            <h2 className="mb-4">
              Hi there! I’m Silvia, the designer behind the branding studio.
            </h2>
            <div className="mb-5 me-4">
              I founded TKD with a passion for creating strategic and beautiful
              brands and websites. Over time, it has evolved into a premium
              creative agency, proudly serving custom home builders, architects,
              interior designers, medical spas, lawyers, therapists,
              dermatologists, and many more .
              <br />I studied marketing at San Diego State University and spent
              years developing my craft. My favorite projects involve
              customizing typography to create unique brand marks. Apart from my
              design passion, I’m a California native now living in Texas and
              splitting my time between the U.S. and Germany. <br /> I enjoy
              learning German (to keep up with the in-laws!), and can most
              likely be found at pilates or searching for the best iced matcha
              latte in town. 
            </div>
            <a
              href="/services"
              title="Project button"
              className="btn btn-branding-outline"
            >
              View all my services
            </a>
          </div>
        </div>
        <div className="col-lg-6 profile-column d-flex justify-content-center profile-column">
          <img
            src={silvia}
            alt="silvia-photo"
            className="img-fluid head-shot"
          />
        </div>
      </div>
      <History />
    </div>
  );
}
