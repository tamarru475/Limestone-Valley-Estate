import React from "react";
import About from "./About";
import Stay from "./Stay";
import Shop from "./Shop";

export default function Main(props) {
  return (
    <main className="main">
      <About />
      <Stay />
      <Shop />
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
