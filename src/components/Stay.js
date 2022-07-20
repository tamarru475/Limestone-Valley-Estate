import React from "react";
import farmHouse from "../images/rainbow.jpg";

export default function Stay() {
  return (
    <section className="stay" id="stay">
      <div className="stay__container">
        <h3 className="stay__heading">Book Your Stay With Us:</h3>
        <p className="stay__discprition">We are available at:</p>
        <img
          src={farmHouse}
          alt="our farm house stay"
          className="stay__image"
        />
        <div className="stay__buttons-container">
          <a href="#" className="stay__button stay__button-airbnb">
            Airbnb
          </a>
          <a href="#" className="stay__button">
            BookAbatch
          </a>
        </div>
      </div>
    </section>
  );
}
