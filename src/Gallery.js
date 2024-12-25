import React from "react";
import Family from "./family.png";
import Individual from "./individual.png";
import clinical from "./clinical.png";
import couples from "./couples.png";
import therapy from "./therapy.png";
import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="row-grid">
        <div className="col-9">
          <img
            src={Family}
            alt="Family therapy"
            className="img-fluid family-img"
          />
          <p className="therapy-title">Family Therapy</p>
          <p className="therapy-description">
            Families can take many forms, whether they are biological, kin, or
            chosen. The ever-evolving experiences associated with parenthood,
            partnerships, child-rearing, fertility, traumatic events, and
            various other transitions can often feel overwhelming, potentially
            leading to unhealthy relationships with our loved ones. This form of
            relational therapy encourages family members to unite and
            participate in meaningful discussions with a skilled professional
            present
          </p>
        </div>
        <div className="col-9">
          <img
            src={Individual}
            alt="individual therapy"
            className="img-fluid individual"
          />
          <p className="therapy-title">Individualized Therapy</p>
          <p className="therapy-description">
            This space will offer an opportunity for individuals to feel
            acknowledged and understood. Here, you’ll be supported and
            encouraged to reflect, reconnect with your inner self, and acquire
            coping strategies for managing interpersonal and relational
            challenges. Learn to navigate and thrive in the realms of dating,
            analyzing relationships, and addressing the unique challenges of
            living in today's world. Alongside my extensive training in systemic
            and relational dynamics, I hold specialized qualifications in EMDR,
            Complex Trauma, Racial Trauma, and Integrative Somatic Trauma
            Therapy.{" "}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-9">
          <img
            src={therapy}
            alt="therapy in spanish "
            className="img-fluid spanish-therapy"
          />
          <p className="therapy-title">Terapia en Español </p>
          <p className="therapy-description">
            “El amor empieza en el hogar". M.T. Esta frase es mi guía para
            ayudar a mis clientes. Empezar la terapia no es fácil. Muchas
            personas se sienten abrumados de solo pensarlo. Muchas veces esto
            pasa por la falta de información acerca de la terapia, el stigma y
            el costo. Sin embargo, cuando se pospone, el problema lleva a
            empeorarse. Soy una terapeuta completamente bilingüe y tengo 15 años
            ayudando a mi comunidad a tener una vida mas plena y fortalecida.
            Tengo experiencia extensa y un interés particular en experiencias de
            conflicto familiar y de parejas, las perdidas por inmigración y
            trauma. También proveo un tratamiento terapéutico sensible a la
            diversidad cultural de nuestra comunidad Latina.
          </p>
        </div>
        <div className="col-9">
          <img
            src={couples}
            alt="couple therapy"
            className="img-fluid couple-therapy"
          />
          <p className="therapy-title">Couples Therapy</p>
          <p className="therapy-description">
            Couples often seek therapy when they feel lost in their
            relationship, and it can sometimes seem like a last resort. I
            believe that all couples would benefit from the opportunity to
            receive support in their endeavors as they navigate the complexities
            of life. This type of therapy truly helps couples deepen their
            commitment to one another. It presents a valuable opportunity for
            partners to engage in open communication and to attentively listen
            to one another regarding challenges such as navigating dating,
            marriage, child-rearing, confronting issues during adolescence,
            dealing with infidelity, undergoing separation, or experiencing
            other significant moments together.{" "}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-9">
          <img
            src={clinical}
            alt="clinical therapy"
            className="img-fluid clincal-img"
          />
          <p className="therapy-title">Clinical Supervision</p>
          <p className="therapy-description">
            I offer individual and group supervision to social workers and other
            mental health providers working in agencies, large institutions, and
            private practice. My background includes extensive experience
            receiving supervision from highly qualified faculty members
            specializing in family and systemic therapy. Additionally, I possess
            considerable experience in providing live individual and group
            supervision using a one-way mirror technique, as well as teaching at
            recognized institutions since 2014. Kindly inquire about a special
            rate if you register as a group comprising at least three clinicians
            from the same institution or if you are entering the field for the
            first time.
          </p>
        </div>
      </div>
    </div>
  );
}
