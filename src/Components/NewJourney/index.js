import React from "react";
import { Link } from "react-router-dom";
import secondarrow from "../../assets/secondarrow.png";
import thirdarrow from "../../assets/thirdarrow.png";
import "./NewJourney.scss";
function NewJourney() {
  return (
    <>
      <div className="NewJourneycontainer">
        <h>Thinking of starting anew in the EU?</h>
        <div className="NewJourneycontainer-row"></div>
        <div className="para-container">
          <span className="first-last-line">Silk Route is here to help. </span>
          <span className="middle-text">
            We’re confident in saying we’re one of the best residency programs
            in Europe, and here’s why. We create companies tailored to each
            individual in our care–businesses that establish residency in the
            European Union and ensure long term success. But the genius of our
            business model is that we make this process a luxury experience for
            you
          </span>
          <span className="first-last-line">
            (full details available on our services page).
          </span>
        </div>
        <div className="img-container">
          <img src={secondarrow} />
        </div>
      </div>
      <div className="NewJourneycontainer">
        <div className="img-container">
          <img src={thirdarrow} />
        </div>

        <div className="para-container">
          <span className="middle-text">
            Our team of experts know the immigration process inside and out.
            Their objective is to take the fear out of the unknown because let’s
            be honest; uprooting your life to start over in a new country is
            daunting to say the least. Trusting Silk Route eliminates the
            anxiety, confusion, and uncertainty of immigration so all that’s
            left for you to think about is the excitement of new beginnings.
          </span>
        </div>
      </div>
      <div className="NewJourneycontainer">
        <h>
          Are you ready to unlock the possibilities of a new life in the EU?
        </h>
      </div>
      <div className="NewJourneycontainer">
      <Link>Click here to begin your journey</Link>
      </div>
    </>
  );
}

export default NewJourney;
