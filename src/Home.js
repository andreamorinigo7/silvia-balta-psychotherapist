import React from "react";
import "./Home.css";
import Testimonals from "./Testimonals";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1>SILVIA ESPINAL, LCSW</h1>
        <h1>Psychotherapy and Clinical Supervision</h1>
        <a href="/contact" class="btn btn-branding">
          Get started
        </a>
      </div>

      <div className="hero-2">
        <h3>
          You're hitting a breaking point in your life or relationship and need
          help from someone who gets it. You're tired of feeling so stuck and
          disconnected.
        </h3>
        <a
          href="mailto:espinal.silvia@gmail.com"
          class="btn btn-branding-outline shadow"
        >
          Email to schedule
        </a>
      </div>
      <Testimonals />
    </div>
  );
}
