import React from "react";
import TwitterIcon from "../../icons/twitter-icon.svg";
import YouTubeIcon from "../../icons/youtube-icon.svg";
import InstagramIcon from "../../icons/instagram-icon.svg";
import FooterStyles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <ul>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="twitter icon"/>
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={YouTubeIcon} alt="youtube icon"/>
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="instagram icon"/>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
