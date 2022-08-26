import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";

// * stylesheet
import "../../styles/static elements/Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="contact-details">
        <ul className="contact-details-list">
          <li className="contact-info-item">
            Email:&nbsp;
            <a href="mailto:A.H.ValueTech@gmail.com">A.H.ValueTech@gmail.com</a>
          </li>
          <li className="contact-info-item">Discord: Ann Hiro#9309</li>
        </ul>
      </div>
      <div className="social-links">
        <a
          className="social-link-twitter"
          href="https://twitter.com/HiroAnnSFW?s=20&t=2D1PafM06RWxWwIIVeT3bA"
        >
          <FontAwesomeIcon icon={faTwitter} size="1x" />
        </a>
        <a
          className="social-link-youtube"
          href="https://www.youtube.com/channel/UCvBnXQHwj_LG-_jTtMc18tg"
        >
          <FontAwesomeIcon icon={faYoutube} size="1x" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
