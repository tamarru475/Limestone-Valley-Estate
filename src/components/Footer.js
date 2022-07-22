import React from "react";
import facebookLogo from "../images/facebook-white.png";
import instagramLogo from "../images/instegram.jpg";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <p className="footer__discription">reach us directly at:</p>
      <ul className="footer__links">
        <li className="footer__link footer__links-email">
          Email us: email@gmail.com
        </li>
        <li>
          <a href="#" className="footer__link">
            <img
              src={facebookLogo}
              alt="facebook"
              className="footer__link-facebook"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/LimestoneValleyLavender/"
            className="footer__link footer__link-instegram"
          >
            <img
              src={instagramLogo}
              alt="instegram"
              className="footer__link-instegram"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
