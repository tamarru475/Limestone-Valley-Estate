import React from "react";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo"></div>
      <ul className="nav__links">
        <li>
          <a className="nav__link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav__link" href="#stay">
            Stay With Us
          </a>
        </li>
        <li>
          <a className="nav__link" href="#shop">
            Lavender Products
          </a>
        </li>
        <li>
          <a className="nav__link" href="#gallery">
            Gallery
          </a>
        </li>
        <li>
          <a className="nav__link" href="#footer">
            Contact Us
          </a>
        </li>
      </ul>
      <button type="button" className="nav__menu-button"></button>
    </nav>
  );
}
