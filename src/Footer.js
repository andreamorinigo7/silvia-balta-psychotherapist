import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="grid-2-footer">
      <div>
        <p>
          New York, NY 10010 <br /> <br /> Mount Kisco, 10549
          <br />
          <br />
          silviabe.psychotherapy@gmail.com <br />
          917-994-6446
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

      <div>
        <p>
          {" "}
          Monday – Friday <br /> 10am – 6pm <br /> <br />
          Ask about evening hours
        </p>
      </div>
    </div>
  );
}
