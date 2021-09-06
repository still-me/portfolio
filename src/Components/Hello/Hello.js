import "./Hello.scss";

import photoMobile from "../../images/photo-mobile.jpeg";
import photoTablet from "../../images/photo-tablet.jpeg";
import photoDesktop from "../../images/photo-desktop.jpeg";
import { ReactComponent as IconTelegram } from "../../images/icon-telegram.svg";
import { ReactComponent as IconEmail } from "../../images/icon-email.svg";
import { ReactComponent as IconLinkedin } from "../../images/icon-linkedin.svg";
import { ReactComponent as IconGitHub } from "../../images/icon-github.svg";

export default function Hello() {
  return (
    <div>
      <div className="flex">
        <div className="about-me-wrapper">
          <h3 className="secondary-title">My name is Vladyslav</h3>
          <p className="about-me-title">
            I am Front-End developer form Kyiv, Ukraine.
          </p>
        </div>

        <img
          className="photo"
          srcSet={
            photoMobile +
            " 480w, " +
            photoTablet +
            " 768w, " +
            photoDesktop +
            " 1200w"
          }
          sizes="(min-width: 768px) 768px, (min-width: 480px) 480px, (min-width: 1200px) 200px  100vw"
          src={photoMobile}
          alt={photoMobile}
        />
      </div>

      <h3 className="secondary-title">Contacts</h3>
      <ul className="list social-list">
        <li className="sl-item">
          <a
            href="https://t.me/vladyslav_fomenko"
            className="link social-link"
            target="blank"
            rel="noopener noreferer"
            aria-label="Telegram"
          >
            <IconTelegram className="social-icon" />
          </a>
        </li>
        <li className="sl-item">
          <a
            href="mailto:fomenkovlad93@gmail.com.com"
            className="link social-link"
            target="blank"
            rel="noopener noreferer"
            aria-label="Email"
          >
            <IconEmail className="social-icon" />
          </a>
        </li>
        <li className="sl-item">
          <a
            href="https://www.linkedin.com/in/vladyslav-fomenko"
            className="link social-link"
            target="blank"
            rel="noopener noreferer"
            aria-label="Linkedin"
          >
            <IconLinkedin className="social-icon" />
          </a>
        </li>

        <li className="sl-item">
          <a
            href="https://github.com/still-me"
            className="link social-link"
            target="blank"
            rel="noopener noreferer"
            aria-label="GitHub"
          >
            <IconGitHub className="social-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}
