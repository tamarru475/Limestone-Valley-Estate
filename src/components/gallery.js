import React from "react";
import SlideShow from "./Slideshow";

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h4 className="gallery__heading">Our Farm:</h4>
      <p className="gallery__discprition">Come say hello!</p>
      <div className="gallery__container">
        <SlideShow />
      </div>
      <div className="gallery__video">
        <iframe
          className="gallery__iframe"
          src="https://www.youtube.com/embed/o1O8USgpVXc"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
