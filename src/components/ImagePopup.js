import React from "react";
export default function ImagePopup(props) {
  const fadeIn = `${props.item.visibility ? "popup_fadein" : ""}`;
  return (
    <section className={`image ${fadeIn} popup`} id="image-popup">
      <div className="image__container container">
        <button
          type="button"
          className="image__close-button close-button"
          onClick={props.onClose}
        ></button>
        <img
          className="image__popup"
          src={props.item.image}
          alt={props.item.name}
        />
        <p className="image__discription">{props.item.name}</p>
      </div>
    </section>
  );
}
