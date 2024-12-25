import React from "react";
import "./About.css";
import History from "./History";
import silvia from "./silvia.png";

export default function About() {
  return (
    <div className="about">
      <div className="row  justify-content-center mt-5 mb-5">
        <div className="col-lg-6">
          <div className="content">
            <h2 className="mb-4">Hi there! I’m Silvia.</h2>
            <div className="mb-5 me-4">
              “Beloved community is formed not by the eradication of difference
              but by its affirmation, by each of us claiming the identities and
              cultural legacies that shape who we are and how we live in the
              world”. <br /> <br />― Bell Hooks <br /> <br />I firmly believe in
              the power of human relationships. I was born and raised in Peru
              until my teenage years, and I have lived in New York for the past
              twenty-five years.
              <br /> Being bilingual and bicultural has allowed me to navigate
              diverse worlds and contexts, deepening my understanding of life’s
              complexities. My identities as a woman of color, an immigrant, a
              mother, a partner, and an LGBTQ+ ally have shaped my experiences
              and influenced the way I perceive the world. <br />
              In my professional roles as an educator, supervisor, and
              psychotherapist, I have learned that to effectively help others,
              one must have a deep understanding of oneself. I have been
              practicing for fifteen years, working with a wide range of clients
              who face diverse issues. I graduated from NYU and have taught at
              recognized institutions.
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
