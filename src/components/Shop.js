import React from "react";

export default function Shop() {
  return (
    <section className="shop" id="shop">
      <div className="shop__container">
        <h4 className="shop__heading">Premium Lavender Products</h4>
        <div className="shop__grid-container">
          <ul className="shop__grid">
            <li className="shop__grid-item"></li>
            <li className="shop__grid-item"></li>
            <li className="shop__grid-item"></li>
          </ul>
        </div>
        <p className="shop__discprition">We are available at:</p>
        <a href="#" className="shop__button">
          Shopify
        </a>
        <p className="shop__footer">Or visit our lovley little shop!</p>
      </div>
    </section>
  );
}
