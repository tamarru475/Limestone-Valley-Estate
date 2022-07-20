import React from "react";
import About from "./About";
import Stay from "./Stay";

export default function Main() {
  return (
    <main className="main">
      <About />
      <Stay />
      <section className="shop" id="shop">
        <div className="shop__container">
          <h4 className="shop__heading">Premium Lavender Products</h4>
          <p className="shop__discprition">We are available at:</p>
          <a href="#" className="shop__button">
            Shopify
          </a>
          <p className="shop__footer">Or visit our lovley little shop!</p>
        </div>
      </section>
      <section className="gallery" id="gallery">
        <h4 className="gallery__heading">Our Farm:</h4>
        <p className="gallery__discprition">Come say hello!</p>
        <div className="gallery__container"></div>
        <div className="gallery__video">
          <iframe
            className="gallery__iframe"
            src="https://www.youtube.com/embed/o1O8USgpVXc"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
